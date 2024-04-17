import { Box, Button, Flex } from '@chakra-ui/react'
import AppointmentList from '../components/AppointmentList'
import MenuLeft from '../components/MenuLeft'
import Header from '../components/Header'

export default function Dashboard() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
<Header />
      <Flex w={'70%'} alignSelf={'center'}>
        <Box w='300px' p={6}>
            <MenuLeft />
        </Box>
        <Box flex='1' p={6}> 
            <Box width={'430px'} pos={'absolute'} right={0}><Button size={'xs'} colorScheme={'blue'}>+ Create Appointment</Button></Box>
            <AppointmentList />
        </Box>
    </Flex>

      </div>
      
    </>
    
  )
}
