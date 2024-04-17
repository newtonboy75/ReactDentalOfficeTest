import { Link, ListItem } from "@chakra-ui/react"
import { Box, List } from "@chakra-ui/react"

const MenuLeft = () => {
    return (
        <Box mt={'60px'}>
            <List>
                <ListItem><Link href='/logout'>Dashboard</Link></ListItem>
                <ListItem><Link href='/logout'>Dentists</Link>   </ListItem>
                <ListItem><Link href='/logout'>Contact Us</Link></ListItem>
                <ListItem><Link href='/logout'>Logout</Link></ListItem>
            </List>
        </Box>
    )
}

export default MenuLeft