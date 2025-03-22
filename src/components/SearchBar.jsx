import { AppContext } from "@/AppContext"
import theme from "@/theme/theme"
import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"

function SearchBar() {
    const [searchText, setSearchText] = useState('')

    const {setToggleFilter} = useContext(AppContext)
    const {heading} = theme.fonts

    return(
        <Flex
            bgColor={'#F5F4F8'} p={'10px 17px'}
            justify={'space-between'} align={'center'}
            w={'auto'} m='0 10px' borderRadius={'10px'}
        >
            <HStack gap='0'>

                {/* Search icon. when clicked will submit searchText to the backend and the fetched data will be updated to the client side*/}
                <svg width="20" cursor='pointer' height="20" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12C10.0376 12 12.5 9.53757 12.5 6.5C12.5 3.46243 10.0376 1 7 1C3.96243 1 1.5 3.46243 1.5 6.5C1.5 9.53757 3.96243 12 7 12Z" stroke="#3D1287" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4999 15.0001L10.8333 10.6667" stroke="#3D1287" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* this will contain all filtered location text when you shuffle and apply */}
                <Flex></Flex>

                {/* Input Field for search */}
                <Input
                    type={"text"}
                    border={'none'}
                    outline={'none'}
                    color={'rgba(61, 18, 135, 0.6)'}
                    value={searchText}
                    placeholder="Search Areas, Lodge Name, etc"
                    onChange={(e)=> setSearchText(e.target.value)}
                    fontSize={'16px'}
                    fontFamily={heading}
                />
            </HStack>

            <svg
                width="20" cursor='pointer'
                height="20" viewBox="0 0 18 19"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={()=> setToggleFilter(true)}
            >
                <path d="M0 14.5V16.5H6V14.5H0ZM0 2.5V4.5H10V2.5H0ZM10 18.5V16.5H18V14.5H10V12.5H8V18.5H10ZM4 6.5V8.5H0V10.5H4V12.5H6V6.5H4ZM18 10.5V8.5H8V10.5H18ZM12 6.5H14V4.5H18V2.5H14V0.5H12V6.5Z" fill="#3D1287" fillOpacity="0.6"/>
            </svg>


        </Flex>
    )
}


export default SearchBar