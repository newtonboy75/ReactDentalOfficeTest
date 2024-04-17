import { Box, Center, HStack, Link, Spacer, Text } from '@chakra-ui/react'
import { useLayoutEffect, useState } from 'react'
import { useAuth } from './AuthProvider'

export default function Header() {
    const [userName, setUserName] = useState()
    const {authUser} = useAuth()

    useLayoutEffect(() => {
        const authObj = JSON.parse(authUser)
        setUserName(authObj.Name)
    }, [])

  return (
    <>
        <Box w={'100%'} borderBottom={'1px'} borderBottomColor={'#f0f0f0'}>
            <Center>
                <HStack alignSelf={'center'} width={'70%'} p={5}>
                    <Box>
                        <Text fontSize={'20px'} fontWeight={'bold'} color={'#4AD7E5'}>Newton Dental Office</Text>
                    </Box>
                    <Spacer />
                    <Box alignItems={'flex-end'}>
                        <Link href='/logout'>Hello {userName}</Link>    
                    </Box>
                </HStack>
            </Center>  
        </Box>
        
    </>
  )
}
