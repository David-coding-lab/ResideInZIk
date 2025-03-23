import { AppContext } from "@/AppContext";
import theme from "@/theme/theme";
import { Box, Button, Checkbox, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useContext, useState } from "react";
import { toaster } from "./ui/toaster";

const {body,popup} = theme.fonts
const {primary} = theme.colors.brand

function Filter() {
    // animation for the push in of the component
    const PushIn = keyframes({
        from: { opacity: 0, transform: "translateY(1000px)" },
        to: { opacity: 1, transform: "translateY(0)" },
    });
    const PushOut = keyframes({
        from: { opacity: 1, transform: "translateY(0)" },
        to: { opacity: 0, transform: "translateY(1000px)" },
    });

    const [search,setSearch] = useState('')

    // this are the lodge filter options.
    // it would be fetched from the backend
    const [availableFilterOptions, setAvailableFilterOptions] = useState(
        ['Spacious Room', 'Roommate Option', 'Balcony', 'Tap water',]
    )

    // User budget
    const {setUserFilterOptions, animateFilterOut, setLoadingSpinner, UserFilterOptions} = useContext(AppContext)

    return (
        <Flex
            w="100%"
            h="calc(100% - 210px)"
            paddingInline='20px'
            position="fixed"
            bgColor="#FBFBFB"
            zIndex="1"
            top="210px"
            flexDir={'column'}
            justify={'space-between'}
            animation={!animateFilterOut ?
                `${PushIn} 0.5s cubic-bezier(0.25, 1, 0.5, 1)` :
                `${PushOut} 0.4s cubic-bezier(0.25, 1, 0.5, 1)`
            } // Improved easing
        >
            <Box>
                <VStack
                    marginBlock='25px'
                    align='start'
                    gap='15px'
                >
                    <Text
                        color={primary}
                        fontFamily={popup}
                        fontWeight={'bold'}
                        fontSize='18px'
                    >
                        Budget
                    </Text>
                    <Input
                        h='60px'
                        type="number"
                        value={search}
                        border={'none'}
                        outline={'none'}
                        bgColor={'#F3F3F3'}
                        placeholder={'Enter your Budget'}
                        fontFamily={body}
                        onChange={(e)=> setSearch(e.target.value)}
                    />
                </VStack>

                {/* mapped filter options from the array of available filter options */}
                <VStack
                    align={'start'}
                    gap={'17px'}
                    color={'#A2A7AF'}
                    fontFamily={popup}
                >
                    <FilterOptions optionArray={availableFilterOptions}/>
                </VStack>
            </Box>

            <Button
                h='60px'
                mb={'10%'}
                cursor={'pointer'}
                borderRadius={'15px'}
                bgColor={primary}
                onClick={()=>{
                    fetchSearchResult(setUserFilterOptions, setLoadingSpinner, UserFilterOptions, search)
                    // Whenever you click on this button it should fetch data from the server similar to the userSearch option
                }}
            >
                Find
            </Button>
        </Flex>
    );
}


const FilterOptions = ({ optionArray }) => {
    const {setUserFilterOptions} = useContext(AppContext)

    return optionArray.map((option, index) => ((
        <Checkbox.Root
            colorPalette={'purple'}
            key={index}
            onChange={()=>{
                setUserFilterOptions((prevOptions) =>
                    prevOptions.includes(option)
                        ? prevOptions.filter(item => item !== option)  // Remove if exists
                        : [...prevOptions, option]  // Add if not exists
                )
            }}
        >
            <Checkbox.HiddenInput />
            <Checkbox.Control borderRadius={'8px'}/>
            <Checkbox.Label fontSize={'18px'}>{option}</Checkbox.Label>
      </Checkbox.Root>
    )))
};
export default Filter;


// Other function used in this component

// this function does
// 1. checks if all the checkbox is filled or any input is ✅ '
// 2. set loading to be true ✅
// 3. fetch data based on the search the user provided and store it
// 4. Navigate to the searchResult page
function fetchSearchResult(setUserFilterOptions,setLoadingSpinner, UserFilterOptions, search){
    setUserFilterOptions(prevOptions=> (
        search != '' ? [...prevOptions, search] : [...prevOptions]
    ))

    // checks data
    if(!search && UserFilterOptions.length <= 0){

        toaster.create({
            description: 'Fill in any input to proceed',
            type: 'info',
            duration: 1000
        })
        return
    }

    if(UserFilterOptions.length > 0 || search){
        // starts loading
        setLoadingSpinner(true)
        console.log(UserFilterOptions);

        // this is where i fetched data based on user input

    }
}