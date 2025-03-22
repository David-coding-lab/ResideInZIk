import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/Logo 2.svg"
import theme from "../theme/theme"

const {primary} = theme.colors.brand

function Header() {
    return (

        // Nav bar containing the logo
        <Box
            display={'flex'}
            alignItems={'center'}
            bgColor={primary}
            borderBottomLeftRadius='20px'
            pl={'18px'}
            h={{base: '64px', sm: '', md: '', lg: ''}}
            zIndex={'99'}
        >
            <Image w={'153px'} src={Logo} />
        </Box>

    )
}

export default Header