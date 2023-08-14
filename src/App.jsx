import Home from "./Home/Home"
import { Box } from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route, 
  Switch } from 'react-router-dom'
import VideoDetail from "./VideoDetail/VideoDetail"
// import AddVideo from "./FormsPage/AddVideo"
// import AddProduct from "./FormsPage/AddProduct"


function App() {

  return (
    <Box
      overflowY='scroll'
        >
       <Router>
          <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path="/video-detail/:id">
                <VideoDetail />
              </Route>
              {/* On next Patch*/}
              {/* <Route path='/add-video'>
                <AddVideo />
              </Route>
              <Route patk='/add-product'>
                <AddProduct />
              </Route> */}
          </Switch>
       </Router>
    </Box>
  )
}

export default App
