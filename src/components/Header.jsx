import { Flex, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/Logo.png"

function Header() {
    return (
        <Flex bgColor={'red'}>

            <Image w='200px' h='200px' src={Logo} />

        </Flex>
    )
}

export default Header