import React from 'react'
import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import Location from './components/location/Location';
import Character from './components/character/Character';
import Episode from './components/episode/Episode';
import CharacterProfile from './components/uniqueCharacter/CharacterProfile';

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/character' element={<Character />} />
          <Route path='/location' element={<Location />} />
          <Route path='/episode' element={<Episode />} />
        </Route>
        <Route path='/profile' element={<CharacterProfile />}/>
    </Routes>
    </>
  )
}

export default Router;