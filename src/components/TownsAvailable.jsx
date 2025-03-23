import { Box, Flex, HStack, Text } from '@chakra-ui/react'

import theme from "../theme/theme"
import {useContext, useState} from "react"
import { AppContext } from '@/AppContext'
import { useLocation, useNavigate } from 'react-router'

const {primary, secondary} = theme.colors.brand

// Towns Available Component Container
function TownsAvailable() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isCurrent, setIsCurrent] = useState('All')

    return (
        <HStack
          width="100%"
          overflowX="auto"
          gap={{ base: "15px", sm: "20px" }}
          p="10px"
          css={{
            "&::-webkit-scrollbar": { height: "3px" },
            "&::-webkit-scrollbar-thumb":
                {   background: "rgba(61, 18, 135, 0.34)",
                    borderRadius: "3px"
                },
          }}
        >
            <Towns
                townAvailableName ="All"
                isCurrent={isCurrent}
                setIsCurrent={setIsCurrent}
                location={location}
                navigate={navigate}
            />
            <Towns
                townAvailableName ="Ifite"
                isCurrent={isCurrent}
                setIsCurrent={setIsCurrent}
                location={location}
                navigate={navigate}
            />
            <Towns
                townAvailableName ="Yahoo Junction"
                isCurrent={isCurrent}
                setIsCurrent={setIsCurrent}
                location={location}
                navigate={navigate}
            />
            <Towns
                townAvailableName ="Up School"
                isCurrent={isCurrent}
                setIsCurrent={setIsCurrent}
                location={location}
                navigate={navigate}
            />
            <Towns
                townAvailableName ="Tesars Junction"
                isCurrent={isCurrent}
                setIsCurrent={setIsCurrent}
                location={location}
                navigate={navigate}
            />
        </HStack>
    )
}

// Town Available Component Chunk

// the fetched data of towns available will be made and passed as an argument to this function
const Towns = ({townAvailableName, isCurrent, setIsCurrent,location,navigate})=>{
    const {setTownToBeDisplayed, pushOutFilterComponent, setAnimateFilterOut, setToggleFilter, setUserFilterOptions} = useContext(AppContext)
    return(
        <Box
            minW="auto"
            p="10px 24px" borderRadius="20px"
            cursor={'pointer'}

            onClick={()=>
                {
                    pushOutFilterComponent(setAnimateFilterOut, setToggleFilter,setUserFilterOptions,location,navigate)
                    setTownToBeDisplayed(townAvailableName)
                    setIsCurrent(townAvailableName)
                }}
            bgColor={
                isCurrent === townAvailableName ?
                    'rgba(61, 18, 135, 0.6)' : secondary
            }
        >
            <Text
                whiteSpace="nowrap"
                color={
                    isCurrent === townAvailableName ?'white' : primary
                }
            >{townAvailableName}</Text>
        </Box>
    )
}

export default TownsAvailable

// Function to Toggle lodge with current town to be displayed