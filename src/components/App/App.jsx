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
import { arrBoy } from '../../utils/data'
import {PageNotFound} from '../../pages/PageNotFound/PageNotFound'


function App() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [isPopupImageOpen, setIsPopupImageOpen] = useState(false)
  const [isIndex, setIsIndex] = useState(null)
  const [isArr, setIsArr] = useState(arrBoy)


  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
  }, []);

  const handleImageClose = useCallback(() => {
    setIsPopupImageOpen(false)
  }, []);

  const handleImageOpen = useCallback((index, arrPortfolio) => {
      setIsIndex(index)
      setIsArr(arrPortfolio)
      setIsPopupImageOpen(true)
  }, [])

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Routes> 
        <Route path='*' element={
            <PageNotFound/>
        }/>
        <Route  path='/'  element={
          <Main
            isImageOpen={handleImageOpen}
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
            isImageOpen={handleImageOpen}
          />
        }/>
        <Route  path='/istoriya'  element={
          <AboutUs
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
        arr={isArr}
      />}

      <UpButton/>
    </div>
  );
}

export default App;


/*<Route  path='/zdorovie'  element={
  <Health
  />
}/>*/
