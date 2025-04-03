import FeaturedLodge from '@/components/FeaturedLodge'
import LodgesContainer from '@/components/LodgesContainer'
import { Box } from '@chakra-ui/react'

function LodgesDisplay() {
  return (
    <Box>
      <FeaturedLodge />

      <LodgesContainer />
    </Box>
  )
}

export default LodgesDisplay