import '../App.css'

import { AppContext } from '@/AppContext'
import { Box } from '@chakra-ui/react'
import { lazy, Suspense, useEffect, useState } from 'react'

import TownsAvailable  from '@/components/TownsAvailable'
import LodgesDisplay  from '@/components/LodgesDisplay'
import SearchBar from '@/components/SearchBar'
import { Outlet, useNavigate } from 'react-router'

const Filter = lazy(()=> import('@/components/Filter'))
const LoadingSpinner = lazy(()=> import('@/components/LoadingSpinner'))

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/lodgesDisplay"); // Navigates to the lodges display page
  }, [navigate])


  const [townToBeDisplayed,setTownToBeDisplayed] = useState('All')
  const [animateFilterOut, setAnimateFilterOut] = useState(false)
  const [UserFilterOptions, setUserFilterOptions] = useState([])
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)

  return (
    <AppContext value={{
      pushOutFilterComponent,setUserFilterOptions,
      setTownToBeDisplayed, setToggleFilter,
      setAnimateFilterOut,setLoadingSpinner,

      townToBeDisplayed, UserFilterOptions,
      toggleFilter, animateFilterOut,
    }}>

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

    </AppContext>
  )
}

export default Home



// Other functions and component to be shared across

function pushOutFilterComponent(setAnimateFilterOut, setToggleFilter){
  setAnimateFilterOut(true)

  setTimeout(() => {
      setToggleFilter(false)
      setAnimateFilterOut(false)
  }, 401);
}