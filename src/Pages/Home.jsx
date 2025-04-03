import '../App.css'

import { AppContext } from '@/AppContext'
import { lazy, useContext, useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router'

import TownsAvailable  from '@/components/TownsAvailable'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'

const LoadingSpinner = lazy(()=> import('@/components/LoadingSpinner'))

function Home() {
  const navigate = useNavigate()

  const {toggleFilter,loadingSpinner,userSearch} = useContext(AppContext)

  useEffect(() => {
    userSearch === '' && navigate('/')
  },[])
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
