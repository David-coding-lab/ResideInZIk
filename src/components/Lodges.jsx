import { Avatar, Badge, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'

import theme from '@/theme/theme'
import LocationIcon from '../assets/Location.svg'

function Lodges(
    {
        AgentID,
        AgentProfilePic,
        LodgeThumbnail,
        LodgePrice,
        LodgeSubsequentPrice,
        LodgeName,
        LodgeLocation,
        LodgeId
    }) {

        const {colors, fonts} = theme
  return (
    <Flex
        h={{base: '280px', sm: '300px', md: '340px'}}
        w={{base: '190px', sm: '240px', md: '260px'}}
        bgColor='#F5F4F8'
        flexDir='column'
        padding='8px'
        borderRadius='25px'
        position='relative'
    >
        {/* contains the agent profile pic, the lodge image, abd the lodge price */}
        <Box>

            <Avatar.Root
                position='absolute'
                zIndex='1'
                border='1px solid white'
                m='10px'
            >
                <Avatar.Image src={AgentProfilePic}/>
            </Avatar.Root>

            <Badge
                pos='absolute'
                zIndex='1'
                mt={{base: '120px', sm: '160px', md: '180px'}}
                ml={{base: '75px', sm: '115px', md: '140px'}}
                p={{base: '6px', sm: '10px'}}
                borderRadius='8px'
                fontFamily={fonts.body}
                fontWeight='medium'
                color='white'
                bgColor='rgba(77, 38, 146, 0.6)'
                fontSize={{base: '14px'}}
            >
                ₦ {LodgePrice} - {LodgeSubsequentPrice}
            </Badge>

            <Image
                w='100%'
                h='85%'
                objectFit='cover'
                src={LodgeThumbnail}
                position='relative'
                borderRadius='25px'
            />

        </Box>

        {/* Contains the lodge name and location */}
        <VStack
            position='absolute'
            bottom='0'
            m='11px 17px'
            alignItems='start'
        >
            <Text
                fontFamily={fonts.body}
                fontWeight='bolder'
                fontSize={{base: '18px', sm: '20px', md: '22px'}}
                color='#252B5C'
            >{LodgeName}</Text>

            <HStack gap='5px'>
                <Image w='20px' src={LocationIcon}/>
                <Text
                    fontFamily={fonts.body}
                    fontWeight='normal'
                    fontSize='16px'
                    color='#53587A'
                >{LodgeLocation}</Text>
            </HStack>
        </VStack>

    </Flex>
  )
}

export default Lodges