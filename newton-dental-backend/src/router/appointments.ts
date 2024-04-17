import express from 'express'
import { isAuthenticated } from '../middlewares';
import { createAppointment, getAllAppointments } from '../controllers/appointments';


export default (router: express.Router) => {
    router.get('/api/appointments', isAuthenticated, getAllAppointments);
    router.post('/api/appointments/create', isAuthenticated, createAppointment);
}