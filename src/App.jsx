import { Box, Button, Container, Text} from "@chakra-ui/react"
import { lazy } from "react"

import Header from "./components/Header"
import { Outlet } from "react-router"

const TownsAvailable = lazy(()=> import("./components/TownsAvailable"))

function App() {
return(
  <Box>

    <Header />
    {/* Components will be rendered dynamically on user interaction */}
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