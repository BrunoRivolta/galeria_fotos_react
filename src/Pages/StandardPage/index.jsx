import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'Components/Footer'
import FavoritesProvider from 'Common/Context/favorites'
import Navigation from 'Components/Navigation'
import AddPhotosProvider from 'Common/Context/addPhoto'

export default function StandardPage() {
  return (
    <main>
      <Navigation />
      <FavoritesProvider> 
        <AddPhotosProvider>
          <Outlet />
        </AddPhotosProvider>
      </FavoritesProvider>    
      <Footer /> 
    </main>
  )
}



