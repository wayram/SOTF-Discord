import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import NotFound from "./Pages/NotFound.jsx"
import contents from "./contentsData.jsx"
import ContentPage from "./Pages/Content Page/ContentPage.jsx"
import Profile from "./Team/Profile.jsx"
import useScrollToTop from './useScrollToTop.jsx';

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {contents.map((content, index) => {
        const path = `/${content.type}/${content.id}`;
        return <Route key={index} path={path} element={<ContentPage/>} />;
      })}
      <Route path="/team/wayram" element={<Profile/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
