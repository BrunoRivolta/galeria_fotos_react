import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Gallery from "./Pages/Gallery"
import Navigation from "Components/Navigation"
import Footer from "Components/Footer"
import Favorites from "Pages/Favorites"
import About from "Pages/About"
import FavoritesProvider from "Common/Context/favorites"

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </FavoritesProvider>    
      <Footer />
    </BrowserRouter>
  )
}
