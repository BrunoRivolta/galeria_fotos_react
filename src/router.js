import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Gallery from "./Pages/Gallery"
import Favorites from "Pages/Favorites"
import About from "Pages/About"
import StandardPage from "Pages/StandardPage"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Gallery />} ></Route>
            <Route path="/favoritos" element={<Favorites />} ></Route>
            <Route path="/sobre" element={<About />} ></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}