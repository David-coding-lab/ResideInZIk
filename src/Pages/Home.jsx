import '../App.css'

import { AppContext } from '@/AppContext'
import { Box } from '@chakra-ui/react'
import { lazy, useContext, useState } from 'react'

import TownsAvailable  from '@/components/TownsAvailable'
import SearchBar from '@/components/SearchBar'
import { Outlet } from 'react-router'

const Filter = lazy(()=> import('@/components/Filter'))
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
