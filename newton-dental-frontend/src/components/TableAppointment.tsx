import { Avatar, Box, HStack, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Table } from "@chakra-ui/react"

const TableAppointment = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Approval is required for schedule changes.</TableCaption>
                <Thead>
                <Tr>
                    <Th>Dentist</Th>
                    <Th>Schedule</Th>
                    <Th>Status</Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>
                        <HStack direction={['column', 'row']} spacing='10px'>
                            <Box><Avatar size={'sm'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Box>
                            <Box><Text>Dr. Neo Anderson</Text><Text>Room 201, Wing 2 Bldg</Text></Box>
                        </HStack>
                        
                    </Td>
                    <Td>February 2, 2023 10:00 AM</Td>
                    <Td>Scheduled</Td>
                    <Td>View</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableAppointment