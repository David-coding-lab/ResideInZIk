import { AppContext } from '@/AppContext'
import { keyframes } from '@emotion/react';
import { useContext, useEffect, useState } from 'react'
import { Box, Button, Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'

import stairCaseIcon from "../assets/stairscaseicon.svg";
import playButton from "../assets/Playbtn.svg";
import lightIcon from "../assets/lighticon.svg";
import backIcon from "../assets/backIcon.svg";
import theme from "@/theme/theme";


function LodgeVideoPlayer() {
  const [videoLoading,setVideoLoading] = useState(true)

  const [fetchedVideoData, setFetchedVideoData] = useState(undefined)

  const{body} = theme.fonts
  const{primary} = theme.colors.brand
  const {videoUrlId} = useContext(AppContext)

  console.log(`fetching ${videoUrlId}....`);

  // fetch video
  const fetchLodgeClickedVideo = async (videoUrlId)=>{
    setVideoLoading(true);

    try {
        const response = await fetch(`https://67e3d0dd2ae442db76d1b751.mockapi.io/lodges`);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        // set the Video state
        data.map(item =>{
          if(item.id === videoUrlId){
            setFetchedVideoData(item);
            return
          }
        })

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        setVideoLoading(false);
    }
  }

  useEffect(()=>{
    fetchLodgeClickedVideo(videoUrlId)
  },[])

  // change the static video data
  // add the play functionality
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

  return (
    <Box
      w={'full'}
      h={'100%'}
      bgColor='black'
      position={'relative'}
      zIndex='-1'
      top='-16px'
      overflow="hidden" // ✅ Prevents scrolling
    >
     <Box h={'93.5vh'} w={'full'}>
     <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
        src={fetchedVideoData && fetchedVideoData.video}
        onLoadedData={() => setVideoLoading(false)}
        onError={() => setVideoLoading(false)}
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
          <Button
            position='absolute'
            bgColor='transparent'
            m='27px 10px'
          >
            <Image w='17px' src={backIcon} />
          </Button>

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
                mb='30px'
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
                        ₦{fetchedVideoData && fetchedVideoData.price} - {fetchedVideoData && fetchedVideoData.subsequentPrice}
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
                    {fetchedVideoData && fetchedVideoData.name}
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
                        {fetchedVideoData && fetchedVideoData.floor}
                    </HStack>
                    {/* light frequency */}
                    <HStack
                        color='#53587A' fontFamily={body}
                        fontWeight={'semibold'}
                        fontSize='15px'
                    >
                        <Image w='20px' src={lightIcon}/>
                        {fetchedVideoData && fetchedVideoData.lightFrequency} light
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