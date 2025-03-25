import { AppContext } from '@/AppContext'
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'

function LodgeVideoPlayer() {
  const {videoUrlId} = useContext(AppContext)

  console.log(`fetching ${videoUrlId}....`);

  return (
    <Box>LodgeVideoPlayer</Box>
  )
}

export default LodgeVideoPlayer