import {Flex, SimpleGrid } from '@chakra-ui/react'

import Lodges from './Lodges'
import AgentProfilePic from '../assets/agentavatar.png'
import LodgeThumbnail from '../assets/LodgeImage.png'
import { useState } from 'react'

function LodgesContainer() {
    const [loading, setLoading] = useState(false)
  return (
    <Flex justify='center' align='center' height='100%'>
        <SimpleGrid
            placeContent='center'
            columns={{base: 2, sm: 2, md: 3, lg: 4}}
            gap='10px'
        >
            <Lodges
                AgentProfilePic={AgentProfilePic}
                LodgeThumbnail={LodgeThumbnail}
                LodgePrice={'600'}
                LodgeSubsequentPrice ={'300'}
                LodgeName={'Roommate Option'}
                LodgeLocation={'Yahoo junction'}
            />

            <Lodges
                AgentProfilePic={AgentProfilePic}
                LodgeThumbnail={LodgeThumbnail}
                LodgePrice={'600'}
                LodgeSubsequentPrice ={'300'}
                LodgeName={'Roommate Option'}
                LodgeLocation={'Yahoo junction'}
            />
            <Lodges
                AgentProfilePic={AgentProfilePic}
                LodgeThumbnail={LodgeThumbnail}
                LodgePrice={'600'}
                LodgeSubsequentPrice ={'300'}
                LodgeName={'Roommate Option'}
                LodgeLocation={'Yahoo junction'}
            />

            <Lodges
                AgentProfilePic={AgentProfilePic}
                LodgeThumbnail={LodgeThumbnail}
                LodgePrice={'600'}
                LodgeSubsequentPrice ={'300'}
                LodgeName={'Roommate Option'}
                LodgeLocation={'Yahoo junction'}
            />
        </SimpleGrid>
    </Flex>
  )
}

export default LodgesContainer




// what's left to be done

// 1. creating the data in mockapi
// 2. create a fetcher function that fetched the data
// 3/ display the lodges and add function that refresh page incase of error
// 4. implement it in searchResult component
// 5. add click functions to the lodges cards
// 6. added pagination to th4e pages
