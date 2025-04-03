import { AppContext } from "@/AppContext"
import { Box, Center, Text } from "@chakra-ui/react"
import { keyframes } from "@emotion/react";
import { useContext, useEffect, useState } from "react"

function SearchResult() {
  const growAndPop = keyframes`
    0% { transform: scale(0); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0; }
    100% { transform: scale(2); opacity: 0; }
  `;

  const [searchedData, setSearchData] = useState()
  const [noSuchDataFound, setNoSuchDataFound] = useState(false)
  const { setLoadingSpinner, userSearch } = useContext(AppContext)

  const fetchUserSearch = async (searchQuery) => {
    if (!searchQuery) return; // Avoid API call if search is empty

    setLoadingSpinner(true);

    try {
      const response = await fetch(`https://67e3d0dd2ae442db76d1b751.mockapi.io/lodges?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();

      setSearchData(data);
      setNoSuchDataFound(data.length === 0); // If no results, set noSuchDataFound to true

    } catch (error) {
      console.error("Error fetching data:", error);
      setNoSuchDataFound(true);
    } finally {
      setLoadingSpinner(false);
    }
  };

  // Debounce Effect
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchUserSearch(userSearch);
    }, 500); // Waits 500ms after user stops typing

    return () => clearTimeout(delayDebounce); // Cleanup function to prevent unnecessary calls
  }, [userSearch]);

  return (
    <Box>
      {noSuchDataFound && (
        <>
          <Box
            top='30px'
            right='30px'
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100vh"
          >
            <Box
              w="50px"
              h="50px"
              borderRadius="full"
              bg="#4D2692"
              animation={`${growAndPop} 2s infinite ease-in-out`}
            />
          </Box>

          <Box
            top='10px'
            left='30px'
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100vh"
          >
            <Box
              w="50px"
              h="50px"
              borderRadius="full"
              bg="#4D2692"
              animation={`${growAndPop} 2s infinite ease-in-out`}
            />
          </Box>

          <Center h='60vh' position={'relative'}>
            <Text
              fontFamily={'quicksand'}
              fontSize={'30px'}
              color={'#4D2692'}
              fontWeight='bold'
            >
              Search unavailable
            </Text>
          </Center>
        </>
      )}
    </Box>
  );
}

export default SearchResult;
