import express from 'express';
import { get, merge } from 'lodash';
import { rateLimit } from 'express-rate-limit'

import { getUserBySessionToken } from '../db/users';

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params;
        const currentUserId = get(req, 'identity.UserId') as unknown as string

        if(!currentUserId){
            return res.sendStatus(403);
        }

        if(currentUserId.toString() !== id){
            return res.sendStatus(403)
        }

        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['NEWTON-DENTAL-AUTH'];

        if(!sessionToken){
            return res.sendStatus(400);
        }

        const currentUser = await getUserBySessionToken(sessionToken);
        //console.log(currentUser)

        if(!currentUser){
            return res.sendStatus(403)
        }

        merge(req, { identity: currentUser });
        next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

/**
 * api rate limiter
 */
export const api_limiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	limit: 100, 
	standardHeaders: 'draft-7',
	legacyHeaders: false, 
})
