import express from 'express';
import { createUser, getUserByEmail, updateUserSessionToken } from '../db/users';
import { authentication, random } from '../helpers/util';
import { UDetails, UserAccessToken, UserResults } from '../helpers/types';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        console.log(req.body)
        const { email, password, name, role } = req.body;
        if(!email || !password || !name){
            return res.sendStatus(400)
        }
        const existingUser = await getUserByEmail(email)

        if(existingUser.Count == 1){
            return res.sendStatus(400)
        }

        const salt = random(128)
        const userID = random(12)
        const user = await createUser({
            UserId: userID,
            Email: email,
            Name: name,
            Role: role,
            Verified: true,
            Authentication: {
                Salt: salt,
                Password: authentication(salt, password), 
            },
        });

        return res.status(200).json(user).end();

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export const login = async (req: express.Request, res: express.Response) => {

    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Credentials", "true");

    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.sendStatus(400)
        }

        const user = await getUserByEmail(email)
        
        if(user.Count === 0){
            return res.sendStatus(400);
        }

        const auth_salt = user.Items?.map(i => i.Authentication['Salt']).toString()
        const auth_password = user.Items?.map(i => i.Authentication['Password']).toString()
        const auth_userid = user.Items?.map(u => u.UserId).toString()
        const expectedHash = authentication(auth_salt!, password)

        if(auth_password !== expectedHash){
            return res.sendStatus(403);
        }

        const salt = random(128);
        const session_token = authentication(salt, auth_userid!)
        await updateUserSessionToken(auth_userid!, session_token)
        res.setHeader("Content-Type", "application/json")
        res.cookie('access_token', session_token, { maxAge: 900000, httpOnly: false})

        const uDetail: UDetails = {
            UserId: user.Items?.map(i => i.UserId).toString()!,
            Name: user.Items?.map(i => i.Name).toString()!,
            Email: user.Items?.map(i => i.Email).toString()!,
            Role: user.Items?.map(i => i.Role).toString()!,
        }

        const currentAccessToken: UserAccessToken = {
            access_token: session_token
        }

        const userResult: UserResults = Object.assign({}, uDetail, currentAccessToken)
        
        return res.status(200).json(userResult).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const signedIn = async (req: express.Request, res: express.Response) => {
    const currentUser = req.cookies.access_token
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send(JSON.stringify({response: currentUser, code: 0}))
}

export const signOut = async (req: express.Request, res: express.Response) => {
    res.setHeader('access_token', 'access_token=; max-age=0')
    console.log(req.cookies.req.cookies.access_token)
    res.end()
}