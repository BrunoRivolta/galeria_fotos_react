import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Gallery from "./Pages/Gallery"
import Favorites from "Pages/Favorites"
import StandardPage from "Pages/StandardPage"
import AddPhoto from "Pages/AddPhoto"

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Gallery />} ></Route>
            <Route path="/favoritos" element={<Favorites />} ></Route>
            <Route path="/adicionar" element={<AddPhoto />} ></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}