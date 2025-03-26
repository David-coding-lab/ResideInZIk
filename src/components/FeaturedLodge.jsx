import { keyframes } from "@emotion/react";
import { AppContext } from "@/AppContext";
import { useNavigate } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import { Box, Card, Center, Flex, For, HStack, IconButton, Image, Spinner, Text } from "@chakra-ui/react";

import Badges from "./Badges";
import theme from "@/theme/theme";

import playButton from "../assets/Playbtn.svg";
import lightIcon from "../assets/lighticon.svg";
import stairCaseIcon from "../assets/stairscaseicon.svg";

function FeaturedLodge() {
    const {isLoggedIn, setVideoUrlId} = useContext(AppContext)
    const {primary} = theme.colors.brand
    const {body} = theme.fonts

    const [featuredLodgesList, setFeaturedLodgesList] = useState([]);
    // const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [ LodgesDisplayLimit ] = useState(isLoggedIn ? 20 : 10)

    const [loading, setLoading] = useState(false); // ✅ Prevents duplicate fetches
    const [videoLoading, setVideoLoading] = useState(true)
    const navigate = useNavigate()

    const observer = useRef(null);
    const lastLodgeRef = useRef(null);

    // animation for the videos loading
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
    // makes a fetch to replicate backend pagination
    const fetchFeaturedLodges = async (pageNumber) => {
        setLoading(true);

        try {
            const response = await fetch(`https://67e3d0dd2ae442db76d1b751.mockapi.io/lodges?page=${pageNumber}&limit=2`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data);

            if (!Array.isArray(data)) {
                throw new Error("Data format incorrect: expected an array");
            }

            setFeaturedLodgesList(prevItems => ([...prevItems, ...data]));

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
                setLoading(false);
        }
    };

    // Fetch data when page changes
    // this fetch is not efficient because of it's fetching from local server
    useEffect(() => {
        if (loading || featuredLodgesList.length >= LodgesDisplayLimit) return; // ✅ Stop fetching if no more data or already loading

        fetchFeaturedLodges(page);
    }, [page]);

    // Attach IntersectionObserver to the last item
    useEffect(() => {
        if (observer.current) observer.current.disconnect(); // ✅ Prevent multiple observers

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("Last item in view. Fetching next page...");
                setPage(prevPage => prevPage + 1) // ✅ Small delay to prevent race conditions
            }
        }, { threshold: 1,rootMargin: '0px'});

        if (lastLodgeRef.current) observer.current.observe(lastLodgeRef.current);

        return () => observer.current && observer.current.disconnect(); // ✅ Cleanup observer
    }, [featuredLodgesList, loading]);

    return (
        <Flex
            w='100%'
            h='auto'
            m='10px 5px'
            align='center'
            overflowX='auto' // ✅ Enables horizontal scrolling
            whiteSpace='nowrap' // ✅ Prevents wrapping
            scrollBehavior={'smooth'}
        >
            <For each={featuredLodgesList}>
                {(item, index) => (
                    // each video mapped and displayed dynamically
                    <Box
                        key={index}
                        h={'400px'}
                        minW={'260px'}
                        border={'none'}
                        ml='10px'
                        mt='10px'
                        borderRadius={'15px'}
                        scrollSnapAlign={'center'}
                        scrollBehavior={'smooth'}
                        overflow='hidden'
                        position={'relative'}
                        animation={videoLoading ? `${blink} 2s infinite alternate` : "none"}
                        animationDelay={`${index * 0.2}s`}
                        // checks for the last item so as to enable infinite scrolling
                        ref={index === featuredLodgesList.length - 1 ? lastLodgeRef : null}
                        bg="linear-gradient(to bottom,rgba(0, 0, 0, 0.07) 0%, #000000 100%)"
                        onClick={()=>{
                            setVideoUrlId(item.id)
                            navigate("/lodgeVideoPlayer");
                        }}
                    >
                        <video
                            width="100%"
                            height="100%"
                            src={item.video}
                            onLoadedData={() => setVideoLoading(false)} // When the video is ready
                            onError={() => setVideoLoading(false)} // Hide loader even if video fails
                        />

                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            w="100%"
                            h="100%"
                            bg="linear-gradient(to top, rgba(0, 0, 0, 0.6) 10%, rgba(0, 0, 0, 0) 80%)"
                        >
                            {/* badge eg verified and premium */}
                            <Badges badgeTag={item.badge} />

                            {/* Contains the play button */}
                            <Flex
                                h='100%'
                                flexDir='column'
                                justify='space-between'
                            >
                                <IconButton
                                    bgColor='transparent'
                                    alignSelf='center'
                                    mt='65%'
                                >
                                    <Image w='60px' src={playButton}/>
                                </IconButton>

                                {/* Contains the lodge name, price and some details */}
                                <Flex
                                    mb='15px'
                                    ml='15px'
                                    flexDir='column'
                                    gap='5px'
                                >

                                    {/* lodge price */}
                                    <Flex
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
                                            ₦{item.price} - {item.subsequentPrice}
                                        </Text>
                                    </Flex>
                                    {/* lodge name */}
                                    <Text
                                        fontFamily={body}
                                        fontWeight={'semibold'}
                                        fontSize='18px'
                                        color='white'
                                    >
                                        {item.name}
                                    </Text>

                                    {/* Contains the lodgeFloor and light frequency */}
                                    <Flex gap='6px'>
                                        {/* lodge floor */}
                                        <HStack
                                            color='#53587A'
                                            fontFamily={body}
                                            fontWeight={'semibold'}
                                            fontSize='15px'
                                        >
                                            <Image w='20px' src={stairCaseIcon}/>
                                            {item.floor}
                                        </HStack>
                                        {/* light frequency */}
                                        <HStack
                                            color='#53587A' fontFamily={body}
                                            fontWeight={'semibold'}
                                            fontSize='15px'
                                        >
                                            <Image w='20px' src={lightIcon}/>
                                            {item.lightFrequency} light
                                        </HStack>
                                    </Flex>

                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                )}
            </For>

            {loading && <Center
                            w={'100px'}
                            h={'50vh'}
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
            }
        </Flex>
    );
}

export default FeaturedLodge;
