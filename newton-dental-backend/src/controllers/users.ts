import express from 'express'
import { getUsers, getUserByUserId, getUserByEmail, createUser } from '../db/users'

export const getAllUsers =  async (req: express.Request, res: express. Response) => {
    try {
        const users =  await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const getUsersEmail = async (req: express.Request, res: express.Response) => {
    try {
        const { email } = req.params;
  
        const users =  await getUserByEmail(email);

        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify({response: users, code: 0}))

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

