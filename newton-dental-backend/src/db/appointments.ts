
import { dynamoClient } from "../helpers/dynamodb";
import { AppointmentDetails, UserDetails } from "../helpers/types";

const TABLE_NAME = "Appointments"

export const getAppointmentsByPatientId = async (patientId: string) => {

    const params = {
        TableName : TABLE_NAME,
        ExpressionAttributeValues: {
            ":PatientId": patientId,
          },
          FilterExpression: "PatientId = :patientId",
    };

    const appointments = await dynamoClient.scan(params).promise()

    return appointments
}

export const getAppointmentsByDentistId = async (dentistId: string) => {

    const params = {
        TableName : TABLE_NAME,
        ExpressionAttributeValues: {
            ":DentistId": dentistId,
          },
          FilterExpression: "DentistId = :dentistId",
    };

    const appointments = await dynamoClient.scan(params).promise()

    return appointments
}

export const getAppointments = async () => {
    const params = {
        TableName: TABLE_NAME
    }

    const appointments = await dynamoClient.scan(params).promise()
    return appointments
}

export const createNewAppointment = async (appointment: AppointmentDetails) => {
    var params = {
        TableName: TABLE_NAME,
        Item: appointment
    }
    const new_appointment = await dynamoClient.put(params).promise()
    console.log(new_appointment)
    return new_appointment
}

export const getAppointmentsBydate = async (date: string, time: string, dentistid: string) => {
    const params = {
        TableName : TABLE_NAME,
        ExpressionAttributeValues: {
            ":AppointmentDate": date,
            ":AppointmentTime": time,
            ":DentistId": dentistid
          },
          FilterExpression: "AppointmentDate = :AppointmentDate AND AppointmentTime = :AppointmentTime AND DentistId = :DentistId",
    };

    const appointment = await dynamoClient.scan(params).promise()
    return appointment
}