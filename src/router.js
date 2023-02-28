import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Gallery from "./Pages/Gallery"
import Navigation from "Components/Navigation"
import Footer from "Components/Footer"
import Favorites from "Pages/Favorites"
import About from "Pages/About"

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>    
          <Route path="/" element={<Gallery />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}
