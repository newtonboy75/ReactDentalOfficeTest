import express from 'express'
import { createNewAppointment, getAppointments, getAppointmentsBydate } from "../db/appointments";
import { random } from '../helpers/util';
import { AppointmentDetails } from '../helpers/types';

export const getAllAppointments =  async (req: express.Request, res: express. Response) => {
    try {
        const appointments =  await getAppointments();
        return res.status(200).json(appointments);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createAppointment = async (req: express.Request, res: express.Response) => {
    try {

        const {date, time, patient_id, dentist_id} = req.body

        if(!date || !time){
            return res.sendStatus(400)
        }

        const appointment = await getAppointmentsBydate(date, time, dentist_id)

        if(appointment.Count === 1){
            console.log(appointment)
            return res.sendStatus(400);
        }

        const Id = random(12)
        const new_appointment: AppointmentDetails = {
            Id: Id,
            PatientId: patient_id,
            DentistId: dentist_id,
            AppointmentDate: date,
            AppointmentTime: time,
            Timestamp: Math.floor(Date.now() / 1000).toString(),
            Status: 'scheduled',
            Notes: '',
        }

        const created_appointment = await createNewAppointment(new_appointment)
        return res.status(200).json(created_appointment).end()

    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}