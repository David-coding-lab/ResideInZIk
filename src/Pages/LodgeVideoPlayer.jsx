import { AppContext } from '@/AppContext'
import { Box, Button, Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react'


import stairCaseIcon from "../assets/stairscaseicon.svg";
import playButton from "../assets/Playbtn.svg";
import lightIcon from "../assets/lighticon.svg";
import theme from "@/theme/theme";
import { LiaChevronCircleRightSolid } from 'react-icons/lia';
import { keyframes } from '@emotion/react';


function LodgeVideoPlayer() {
  const blink = keyframes`
      0% {
      background-position: 0% 0%;
      background-size: 100% 100%;
      }
      50% {
      background-position: 100% 100%;
      background-size: 150% 150%;
      }
      100% {
      background-position: 0% 0%;
      background-size: 100% 100%;
      }
  `;

  const [videoLoading,setVideoLoading] = useState(true)

  const{body} = theme.fonts
  const{primary} = theme.colors.brand
  const {videoUrlId} = useContext(AppContext)

  console.log(`fetching ${videoUrlId}....`);


  // fetch video
  // set the Video state
  // change the static video data
  // add the play functionality
  return (
    <Box
      w={'full'}
      h={'100%'}
      bgColor='black'
      position={'relative'}
      zIndex='-1'
      top='-16px'
    >
     <Box h={'100%'} w={'full'}>
      <video
          // width="100%"
          // height=""
          src={"/Videos/VID-20250324-WA0002.mp4"}
          onLoadedData={() => setVideoLoading(false)} // When the video is ready
          onError={() => setVideoLoading(false)} // Hide loader even if video fails
        />
     </Box>

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        animation={videoLoading ? `${blink} 3s infinite alternate` : "none"}
        bg={videoLoading ? "linear-gradient(to top, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0) 80%)" : 'none'}
      >
        {/* Back button */}
          <Button position='absolute' m='25px 20px'>Back</Button>

        {/* Contains the play button */}
        <Flex
            h='100%'
            flexDir='column'
            justify='space-between'
        >
            <IconButton
                bgColor='transparent'
                alignSelf='center'
                mt='85%'
            >
                <Image w='60px' src={playButton}/>
            </IconButton>

            {/* Contains the lodge name, price and some details */}
            <Flex
                mb='50px'
                bottom='0'
                flexDir='column'
                gap='5px'
            >

                {/* lodge price */}
                <Flex
                    ml='15px'
                    w='125px'
                    h='40px'
                    borderRadius='16px'
                    bgColor='rgba(72, 146, 38, 0.6)'
                    align='center'
                    justify='center'
                >
                    <Text
                        color='white'
                        fontFamily={body}
                        fontWeight='semibold'
                    >
                        ₦{'300'} - {'150'}
                    </Text>
                </Flex>
                {/* lodge name */}
                <Text
                    ml='15px'
                    fontFamily={body}
                    fontWeight={'semibold'}
                    fontSize='18px'
                    color='white'
                >
                    {'Roommate Option'}
                </Text>

                {/* Contains the lodgeFloor and light frequency */}
                    <Flex gap='6px' ml='15px'>
                    {/* lodge floor */}
                    <HStack
                        color='#53587A'
                        fontFamily={body}
                        fontWeight={'semibold'}
                        fontSize='15px'
                    >
                        <Image w='20px' src={stairCaseIcon}/>
                        {'Ground Floor'}
                    </HStack>
                    {/* light frequency */}
                    <HStack
                        color='#53587A' fontFamily={body}
                        fontWeight={'semibold'}
                        fontSize='15px'
                    >
                        <Image w='20px' src={lightIcon}/>
                        {'Moderate'} light
                    </HStack>
                </Flex>

                <Button
                  m='auto'
                  h='50px'
                  width='350px'
                  mt='10px'
                  bgColor={primary}
                  borderRadius='15px'
                >
                  View Lodge
                </Button>

            </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default LodgeVideoPlayer