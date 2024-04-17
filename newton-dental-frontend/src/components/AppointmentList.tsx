import { Box, Text } from "@chakra-ui/react"
import TableAppointment from "./TableAppointment"

const AppointmentList = () => {
    return (
        <>
            <Box mt={'30px'}>
                <Text py={3} fontWeight={'bold'} color={'#4AD7E5'}>Incoming Appointments</Text>
                    <TableAppointment />        
            </Box>
        </>
    )
}

export default AppointmentList