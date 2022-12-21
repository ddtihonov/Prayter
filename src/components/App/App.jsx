import React, {useCallback, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import app from './App.module.scss'
import {Main} from '../../pages/Main/Main'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { UpButton } from '../UpButton/UpButton'
import { Contacts } from '../../pages/Contacts/Contacts'
import { AboutUs } from '../../pages/AboutUs/AboutUs'
import { Pup } from '../Pup/Pup'
import { Dogs } from '../Dogs/Dogs'


function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false)
  const [isIndex, setIsIndex] = useState(null)


  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []);

  const handleFormOpen = useCallback(() => {
    setIsPopupFormOpen(true)
  }, []);

  const handleFormClose = useCallback(() => {
    setIsPopupFormOpen(false)
  }, []);

  const handleOpen = useCallback(() => {
    setIsPopupOpen(true)
  }, []);

  const handleClose = useCallback(() => {
    setIsPopupOpen(false)
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
            isOpen={handleFormOpen}
            isImageOpen={handleImageOpen}
          />
        }/>
        
        <Route  path='/kontakty'  element={
          <Contacts
            isOpen={handleFormOpen}
            popupOpen={handleOpen}
          />
        }/>
        <Route  path='/istoriya'  element={
          <AboutUs
            isOpen={handleFormOpen}
            popupOpen={handleOpen}
          />
        }/>
        <Route  path='/shchenki'  element={
          <Pup
            isOpen={handleFormOpen}
            popupOpen={handleOpen}
          />
        }/>
        <Route  path='/proizvoditeli'  element={
          <Dogs
            isOpen={handleFormOpen}
            popupOpen={handleOpen}
          />
        }/>
      </Routes>
      <Footer/>
      <UpButton/>
    </div>
  );
}

export default App;
