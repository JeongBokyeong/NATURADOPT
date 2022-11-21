import { useState } from 'react'

import AppStyle from './App.module.css';

import Header from './components/Header';
import Contents from './components/Contents';
import Donation  from './donations/donationMain';
import AboutUs from './aboutus/AboutusMain';
import AllCategories from './allCategories/categoryMain';
import AdoptMain from './adopt/adopMain';
import Community from './community/communityMain';
import Chat from './chat/chatMain';
import Kokatoo from './adoptionPosts/kokatoo';
import NaturaHouse from './adoptionPosts/NaturaHouse'
import Tutorial from './tutorial/tutorialMain';
import SearchResult from './tutorial/searchResult';
import TutorialNaturaHouse from './tutorial/NaturaHouse';
import TutorialChat from './tutorial/TurotialChat';
import TutorialChatBot from './tutorial/TutorialChatBot';

import { BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle.wrapper}>
        {/* dont display header when page is tutorial */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/tutorial" element={<></>} />
        </Routes>
        
        {/* <Header/> */}
        {/* < img src={Banner} alt="banner" className={AppStyle.Banner} /> */}
          
        <Routes>
          <Route path="/" element={<div><Header /><Contents/></div>} />
          <Route path='/donation' element={<div><Header /><Donation/></div>}/>
          <Route path='/aboutus' element={<div><Header /><AboutUs/></div>}/>
          <Route path='/allCategories' element={<div><Header /><AllCategories/></div>}/>
          <Route path='/adopt' element={<div><Header /><AdoptMain/></div>}/>
          <Route path='/community' element={<div><Header /><Community/></div>}/>
          <Route path='/chat' element={<div><Header /><Chat/></div>}/>
          <Route path='/adopt/kokatoo' element={<div><Header /><Kokatoo/></div>}/>
          <Route path='/allCategories' />
          <Route path='/adopt/kokatoo/NaturaHouse' element={<div><Header /><NaturaHouse/></div>} />
          <Route path='/adopt/kokatoo/NotYet' element={<div><Header /><NaturaHouse/></div>} />
          <Route path='/tutorial' element={<Tutorial/>} />
          <Route path='/tutorial/result' element={<SearchResult/>} />
          <Route path='/tutorial/result/NaturaHouse' element={<TutorialNaturaHouse/>} />
          <Route path='/tutorial/result/NaturaHouse/TutorialChat' element={<TutorialChat/>} />
          <Route path='/tutorial/result/NaturaHouse/TutorialChat/ChatBot' element={<TutorialChatBot/>} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
