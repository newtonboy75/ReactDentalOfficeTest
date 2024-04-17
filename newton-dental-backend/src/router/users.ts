import express from 'express'
import { getAllUsers, getUsersEmail } from '../controllers/users'
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/api/users', isAuthenticated, getAllUsers);
    router.get('/api/users/:email', getUsersEmail);
}