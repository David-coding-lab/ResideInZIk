import Header from "./components/Header"

import { Box, Button, Container, Text,} from "@chakra-ui/react"
import { Outlet } from "react-router"
import { Toaster } from "./components/ui/toaster"
import { AppContext } from "./AppContext"
import { lazy, useState } from "react"

const MessageUser = lazy(()=> import ('@/components/MessageUser'))



function App() {
  const [townToBeDisplayed,setTownToBeDisplayed] = useState('All')
  const [messageButtonText ,setMessageButtonText] = useState('')
  const [messageTitle ,setMessageTitle] = useState('')
  const [messageBody ,setMessageBody] = useState('')
  const [videoUrlId ,setVideoUrlId] = useState('')

  const [messageFunction ,setMessageFunction] = useState(()=> {})

  const [userFilterOptions, setUserFilterOptions] = useState([])

  const [animateFilterOut, setAnimateFilterOut] = useState(false)
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const [activateMessage, setActivateMessage] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

return(
    <AppContext value={{
      pushOutFilterComponent,setUserFilterOptions,
      setTownToBeDisplayed, setToggleFilter,
      setAnimateFilterOut,setLoadingSpinner,
      setIsLoggedIn, setVideoUrlId, setMessageTitle,
      setMessageBody, setMessageFunction, setActivateMessage,
      setMessageButtonText,

      townToBeDisplayed, userFilterOptions,
      toggleFilter, animateFilterOut,
      isLoggedIn, loadingSpinner,
      videoUrlId, messageTitle,
      messageBody, messageFunction,
      messageButtonText
    }}>
      <Box>

        <Header />

        {/* Alerts the user on the center of page with a dark overlay */}
        {activateMessage &&
          <MessageUser />
        }

        {/* ALerts user on the bottom of the screen */}
        <Toaster />

        <Outlet />

      </Box>
    </AppContext>
)
}

export default App


// Other functions and component to be shared across

function pushOutFilterComponent(setAnimateFilterOut, setToggleFilter,setUserFilterOptions,location,navigate){
  setAnimateFilterOut(true)

  setUserFilterOptions && setUserFilterOptions([])

  setTimeout(() => {
    setToggleFilter(false)
    setAnimateFilterOut(false)

    location && location.pathname !== '/' && navigate('/')
  }, 401);
}

// Components used in this webApp

// 1. Header: encompases the logo of the site ✅

// 2. Filter Location badges: filters lodges with the specific location ✅

// 3. Search bar: search for specificity e.g price, location, category ✅

// 4. Large Lodge Card: shows a short auto-play video of the particular lodge ✅

// 5. Small Lodge Card: shows an image, price, option and location of the particular lodge

// 6. Footer Notification: shows messages at the footer

// 7. badges: badges with their different text and value boosting the lodge visibility and conversion rate
