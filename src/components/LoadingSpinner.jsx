import theme from "@/theme/theme"
import { Center, Spinner, } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

const {primary} = theme.colors.brand

function LoadingSpinner() {
    const Rotate = keyframes`
        from: {transform: rotate(0deg)},
        to: {transform: rotate(360deg)}`
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
            w={'100px'}
            h={'100px'}
            bgColor={'white'}
            borderRadius={'20px'}
        >
            <Spinner
                color={primary}
                size={"xl"}
                borderWidth={'3px'}
                animationDuration={'.8s'}
            />
        </Center>
    </Center>
  )
}

export default LoadingSpinner


// things to do

// 1. create the api

// 2. fetch and make it show on mobile

// 3. make it play