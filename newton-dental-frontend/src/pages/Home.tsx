import { Box, Center, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import FrontImage from '../assets/frontpageimage.png'
import HeaderFrontPage from '../components/HeaderFrontpage'

import LoginPopUp from '../components/LoginPopUp'

const Home = () => {
    return (
        <>
            <Center backgroundImage={FrontImage} backgroundRepeat={'no-repeat'} backgroundSize={'50%'} backgroundPosition={'20%'}>
                <HStack w={'70%'} h={'100vh'} alignSelf={'top'}>
                    <Box w={'60%'}></Box>
                    <VStack width={'40%'} alignContent={'flex-start'}>
                        <HeaderFrontPage />
                        <Heading color={'#4AD7E5'} size={'lg'} mb={'40px'} fontWeight={'bold'}>Newton Dental Office</Heading>
                        <Text>Transforming Smiles, Enhancing Lives: Your Trusted Partner in Comprehensive Dental Care</Text>
                        <LoginPopUp />
                    </VStack>
                </HStack>
            </Center>         
        </>
    )
}

export default Home