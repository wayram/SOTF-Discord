import React from "react"
import { Route, Routes } from "react-router-dom"
import useScrollToTop from './useScrollToTop.jsx'
import NotFound from "./Pages/NotFound.jsx"
import Home from "./Pages/Home/Home.jsx"
import Shop from "./Pages/Shop/Shop.jsx"

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route exact path="/shop" element={<Shop/>}/> */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
