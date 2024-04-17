import { Box, HStack, Link } from "@chakra-ui/react"
import RegisterPopup from "./RegisterPopup"


const HeaderFrontPage = () => {
    return (
        <>
            <Box position={'absolute'} top={0} pt="5" alignSelf={'flex-end'}>
                <HStack spacing={6}>               
                    <Link href='/about'>About</Link>
                    <RegisterPopup />
                    <Link href='/contact-us'>Contact Us</Link>       
                </HStack>
                
            </Box>
        </>
    )
}

export default HeaderFrontPage