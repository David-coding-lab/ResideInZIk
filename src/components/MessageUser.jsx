import { AppContext } from '@/AppContext'
import { Box, Button, Center, CloseButton, Text } from '@chakra-ui/react'
import { useContext } from 'react'

import theme from '@/theme/theme'
import { useLocation, useNavigate } from 'react-router'

function MessageUser() {
    const {
        messageBody,messageTitle,
        messageButtonText, messageFunction,
        setActivateMessage
    } = useContext(AppContext)

    const {primary} = theme.colors.brand
    const {heading,popup} = theme.fonts

    const location = useLocation()
    const navigate = useNavigate()

  return (
    <Center
        top={'0'}
        h={'100vh'}
        w={'100vw'}
        zIndex={'1'}
        position={'fixed'}
        bgColor={'rgba(0, 0, 0, 0.25)'}
    >
        <Center
            w='320px'
            h='auto'
            p='20px'
            bgColor='white'
            borderRadius='24px'
            flexDir='column'
            gap='13px'
            position='relative'
        >
            <CloseButton
                right='2'
                top='2'
                position='absolute'
                onClick={()=> {
                    location.pathname !== '/' ? navigate('/')
                    : setActivateMessage(false)
                }}
            />
            <Text
                fontSize='22px'
                fontWeight='extrabold'
                fontFamily={heading}
                color={primary}
            >
                {messageTitle}
            </Text>

            <Text
                color={'#A2A7AF'}
                textAlign='center'
                fontSize='20px'
                fontFamily={popup}
            >
                {messageBody}
            </Text>

            <Button
                borderRadius='15px'
                bgColor={primary}
                color='white'
                fontFamily={popup}
                w='250px'
                h='50px'
                onClick={()=> {
                    if (typeof messageFunction === 'function') {
                        messageFunction(); // Call the function only if it's valid
                        console.log('isFunction');
                    }

                    setActivateMessage(false)
                }}
            >
                {messageButtonText}
            </Button>
        </Center>
    </Center>
  )
}

export default MessageUser