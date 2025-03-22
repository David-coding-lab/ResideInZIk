import '../App.css'

import { AppContext } from '@/AppContext'
import { Box } from '@chakra-ui/react'
import { lazy, Suspense, useState } from 'react'

import TownsAvailable  from '@/components/TownsAvailable'
import FeaturedLodges  from '@/components/FeaturedLodges'
import SearchBar from '@/components/SearchBar'

const Filter = lazy(()=> import('@/components/Filter'))

function Home() {
  const [UserFilterOptions, setUserFilterOptions] = useState([])
  const [townToBeDisplayed,setTownToBeDisplayed] = useState('All')
  const [toggleFilter, setToggleFilter] = useState(false)
  const [animateFilterOut, setAnimateFilterOut] = useState(false)

  console.log(UserFilterOptions, animateFilterOut);

  return (
    <AppContext value={{townToBeDisplayed, setTownToBeDisplayed, setToggleFilter, setUserFilterOptions, UserFilterOptions, toggleFilter, animateFilterOut, setAnimateFilterOut}}>

      {/* FilterComponent */}
      {toggleFilter && <Filter />}

      {/* Town Shuffle Component */}
      <Box pb='10px' paddingInline='12px'>
        <TownsAvailable />
      </Box>

      {/* Search And filter Component  */}
      <SearchBar />

      <Box>
        {/* Featured Lodges Display */}
        <FeaturedLodges />
      </Box>

    </AppContext>
  )
}

export default Home