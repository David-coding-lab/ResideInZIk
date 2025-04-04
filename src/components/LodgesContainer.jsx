import {Flex, SimpleGrid } from '@chakra-ui/react'

import Lodges from './Lodges'
import AgentProfilePic from '../assets/agentavatar.png'
import LodgeThumbnail from '../assets/LodgeImage.png'

function LodgesContainer() {
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