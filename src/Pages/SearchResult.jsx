import { AppContext } from "@/AppContext"
import { Box } from "@chakra-ui/react"
import { useContext } from "react"

function SearchResult() {
  const {setLoadingSpinner} = useContext(AppContext)

  setLoadingSpinner(true)

  return (
    <Box>
      SearchResult
    </Box>
  )
}

export default SearchResult