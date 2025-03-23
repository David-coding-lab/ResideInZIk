import Header from "./components/Header"

import { Box, Button, Container, Text,} from "@chakra-ui/react"
import { Outlet } from "react-router"
import { Toaster } from "./components/ui/toaster"

function App() {
return(
  <Box>

    <Header />

    {/* ALerts user on the bottom of the screen */}
    <Toaster />

    <Outlet />

  </Box>
)
}

export default App





// Components used in this webApp

// 1. Header: encompases the logo of the site

// 2. Filter Location badges: filters lodges with the specific location

// 3. Search bar: search for specificity e.g price, location, category

// 4. Large Lodge Card: shows a short auto-play video of the particular lodge

// 5. Small Lodge Card: shows an image, price, option and location of the particular lodge

// 6. Footer Notification: shows messages at the footer

// 7. badges: badges with their different text and value boosting the lodge visibility and conversion rate





// Features

// 1. 