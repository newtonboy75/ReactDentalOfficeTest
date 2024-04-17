import { Box, Text, Card, Stack, CardBody, CardFooter, Button, HStack, Spacer, Avatar } from "@chakra-ui/react"

const CardAppointments = () => {
    return (
        <Card direction={{ base: 'column', sm: 'row' }}  overflow='hidden' variant='outline' my={5}>
            <Stack>
                <CardBody>
                <HStack spacing={6}>
                    <Box><Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Box>
                    <Spacer />
                    <Box>
                    <Text>Date: February 2, 2024</Text>
                    <Text>Time: 10:00 AM</Text>
                    <Text>Dentist: Neo Anderson</Text>
                    <Text>Note: Will be a bit late today</Text>
                    </Box>
                </HStack>
                </CardBody>
                <CardFooter>
                <Button variant='solid' colorScheme='red' size={'xs'}>
                    Cancel Appointment
                </Button>
                </CardFooter>
            </Stack>
            </Card>
    )

}

export default CardAppointments