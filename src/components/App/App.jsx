import React, {useCallback, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import app from './App.module.scss'
import {Main} from '../../pages/Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { UpButton } from '../UpButton/UpButton'
import { Contacts } from '../../pages/Contacts/Contacts'
import { AboutUs } from '../../pages/AboutUs/AboutUs'
import { Dogs } from '../../pages/Dogs/Dogs'
import { Breed } from '../../pages/Breed/Breed'
import { MenuMobile } from '../MenuMobile/MenuMobile'
import { ModalImage } from '../ModalImage/ModalImage'
import { News } from '../../pages/News/News'
import { Health } from '../../pages/Health/Health'


function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false)
  const [isIndex, setIsIndex] = useState(null)


  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []);

  const handleImageClose = useCallback(() => {
    setIsPopupImageOpen(false)
  }, []);

  const handleImageOpen = useCallback((index) => {
      setIsIndex(index)
      setIsPopupImageOpen(true)
  }, [])

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Routes> 
        <Route  path='/'  element={
          <Main
          />
        }/>
        <Route  path='/novosti'  element={
          <News
          />
        }/>
        
        <Route  path='/kontakty'  element={
          <Contacts
          />
        }/>
        <Route  path='/poroda'  element={
          <Breed
          />
        }/>
        <Route  path='/istoriya'  element={
          <AboutUs
          />
        }/>
      <Route  path='/zdorovie'  element={
          <Health
          />
        }/>
        <Route  path='/foto'  element={
          <Dogs
            isImageOpen={handleImageOpen}
          />
        }/>
      </Routes>
      <Footer/>
      {isMenuMobile && <MenuMobile
        onClose={handleCloseMenuMobile}
      />}
      {isPopupImageOpen && 
      <ModalImage
        onClose={handleImageClose}
        index={isIndex}
      />}

      <UpButton/>
    </div>
  );
}

export default App;
