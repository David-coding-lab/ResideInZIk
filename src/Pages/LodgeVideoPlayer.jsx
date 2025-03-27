import { AppContext } from '@/AppContext'
import { useNavigate } from 'react-router';
import { useContext, useEffect, useRef, useState } from 'react'
import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'

import stairCaseIcon from "../assets/stairscaseicon.svg";
import playButton from "../assets/Playbtn.svg";
import lightIcon from "../assets/lighticon.svg";
import backIcon from "../assets/backIcon.svg";
import theme from "@/theme/theme";

function LodgeVideoPlayer() {
  const lodgeDetailsContainer = useRef(null)
  const backButton = useRef(null)
  const videoRef = useRef(null)
  const playBtn = useRef(null)
  const navigate = useNavigate()

  const [videoLoading,setVideoLoading] = useState(true)

  const [fetchedVideoData, setFetchedVideoData] = useState(undefined)

  const{body} = theme.fonts
  const{primary} = theme.colors.brand
  const {videoUrlId} = useContext(AppContext)

  // fetch video
  const fetchLodgeClickedVideo = async (videoUrlId)=>{
    setVideoLoading(true);

    try {
        const response = await fetch(`https://67e3d0dd2ae442db76d1b751.mockapi.io/lodges`);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

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

  useEffect(()=>{
    !videoUrlId && navigate('/')
  },[videoUrlId])

  // change the static video data ✅
  // add the play functionality

  return (
    <Box
      w="flex"
      h="calc(100vh - 64px + 16px)" // ✅ calculates and knows how to gain the full heighth of any screen
      overflow="hidden" // ✅ Prevents extra scrolling
      top="-16px" // ✅ Moves it up slightly to fit under the header
      position="relative" // ✅ Ensures it stays under the curved header
      onClick={() => pauseVideo(videoRef,lodgeDetailsContainer,backButton,playBtn)}
    >

      {/* <Box h="100%" w="100%">
      </Box> */}

      {/* Back button */}
        <Button
          position='absolute'
          bgColor='transparent'
          m='47px 5px'
          ref={backButton}
        >
          <Image w='17px' src={backIcon} />
        </Button>

      <video
        style={{
          zIndex: '-1',
          width: "100%",
          height: "100%",
          objectFit: "cover", // ✅ Ensures full screen video without stretching
          position: 'absolute',
        }}
        src={fetchedVideoData?.video}
        onLoadedData={() => setVideoLoading(false)}
        onError={() => setVideoLoading(false)}
        ref={videoRef}
      />


      {/* Contains the play button */}
      <Flex
          h='100%'
          flexDir='column'
          justify='space-between'
      >
        <Image
          w='80px'
          src={playButton}
          onClick={(e)=>playVideo(videoRef,lodgeDetailsContainer,backButton,playBtn,e)}
          alignSelf='center'
          mt='80%'
          zIndex='100'
          ref={playBtn}
        />

          {/* Contains the lodge name, price and some details */}
          <Flex
              mb='30px'
              bottom='0'
              flexDir='column'
              gap='5px'
              ref={lodgeDetailsContainer}
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
                      color='#EBEBEB'
                      fontFamily={body}
                      fontWeight={'semibold'}
                      fontSize='15px'
                  >
                      <Image w='20px' src={stairCaseIcon}/>
                      {fetchedVideoData && fetchedVideoData.floor}
                  </HStack>
                  {/* light frequency */}
                  <HStack
                      color='#EBEBEB' fontFamily={body}
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

  )
}

export default LodgeVideoPlayer



// other functions and stuffs



function playVideo(videoRef, lodgeDetailsContainer, backButton, playBtn, e) {
  e.stopPropagation(); // Prevent pausing when clicking play button

  if (videoRef.current) {
    lodgeDetailsContainer.current.style.transform = `translateY(200px)`;
    lodgeDetailsContainer.current.style.transition = "transform 0.5s ease-in-out";

    backButton.current.style.transform = `translateY(-200px)`;
    backButton.current.style.transition = "transform 0.5s ease-in-out";

    playBtn.current.style.visibility = 'hidden'

    setTimeout(() => {
      videoRef.current.play();
    }, 500);
  }
}

function pauseVideo(videoRef, lodgeDetailsContainer, backButton, playBtn) {
  if (videoRef.current) {
    videoRef.current.pause();

    lodgeDetailsContainer.current.style.transform = `translateY(0px)`;
    backButton.current.style.transform = `translateY(0px)`;
    playBtn.current.style.visibility = 'visible'
  }
}
