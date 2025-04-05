import { AppContext } from "@/AppContext"
import { useContext } from "react"
import { useNavigate } from "react-router"
import { Box, Text } from "@chakra-ui/react"

import theme from "@/theme/theme"

// the fetched data of filter options available will be made and passed as an parameter to this function
function FilterOption ({filterOption, isCurrent, setIsCurrent, subsequentPrice}){
    const {primary, secondary} = theme.colors.brand

    const navigate = useNavigate()

    const { setUserSearch } = useContext(AppContext)

    return(
        <Box
            minW="max-content" // Fixing the width
            p="10px 24px"
            borderRadius="20px"
            cursor="pointer"
            textAlign="center" // Center the text
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex='1'
            onClick={()=>
                {
                    setUserSearch(filterOption === 'All' ? 'Search Areas, Lodge Name, etc': filterOption)
                    setIsCurrent(filterOption)
                    navigate(filterOption === 'All' ? '/' : 'searchResult')
                }}
            bgColor={
                isCurrent === filterOption ?
                    'rgba(61, 18, 135, 0.6)' : secondary
            }
        >
            <Text
                whiteSpace="nowrap"
                color={
                    isCurrent === filterOption ?'white' : primary
                }
            >
                {filterOption} {subsequentPrice && '-'} {subsequentPrice && subsequentPrice}
            </Text>
        </Box>
    )
}

// Function to Toggle lodge with current town to be displayed

export default FilterOption

