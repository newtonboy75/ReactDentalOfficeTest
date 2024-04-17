export type UserDetails = {
    UserId: string
    Email: string
    Name: string
    Role: string
    Verified: boolean
    Authentication: {
        Password: string
        Salt: string
        SessionToken?: string
    }
}

export type AppointmentDetails = {
    Id: string
    PatientId: string
    DentistId: string
    AppointmentDate: string
    AppointmentTime: string
    Timestamp: string
    Status: string
    Notes: string
}

export type UDetails = Omit<UserDetails, "Authentication" | "Verified">

export type UserAccessToken  = {
    access_token: string,
}

export type UserResults = UDetails & UDetails 