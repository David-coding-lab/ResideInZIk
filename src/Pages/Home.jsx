import '../App.css'

import { lazy, useContext, useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router'
import { AppContext } from '@/AppContext'
import { Box } from '@chakra-ui/react'

import FilterOptionContainer  from '@/components/FilterOptionContainer'
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
        <FilterOptionContainer
          fetchUrl={'https://67f0d049c733555e24ab45e3.mockapi.io/location'}
          fetchingWhat='locations'
        />
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
