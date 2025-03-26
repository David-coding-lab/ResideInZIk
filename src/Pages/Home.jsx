import '../App.css'

import { AppContext } from '@/AppContext'
import { lazy, useContext} from 'react'
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router'

import TownsAvailable  from '@/components/TownsAvailable'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'

const LoadingSpinner = lazy(()=> import('@/components/LoadingSpinner'))

function Home() {
  const {toggleFilter,loadingSpinner} = useContext(AppContext)
  return (
    <Box>

      {/* FilterComponent */}
      {toggleFilter && <Filter />}

      {/* Town Shuffle Component */}
      <Box pb='10px' paddingInline='12px'>
        <TownsAvailable />
      </Box>

      {/* Search And filter Component  */}
      <SearchBar />

      {/* loading animation component */}
      {loadingSpinner && <LoadingSpinner />}

      <Outlet />

    </Box>
  )
}

export default Home
