import './App.css';
import aos from 'aos';
import { useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Navigation from './Nav';
import Main from './Main';
import SpotifyRec from './Projects/SpotifyRec'
import Projecttwo from './Projects/MangaProjects';
import Interests from './More/interests';
import Res from './Resume/Resume';

function App() {
  return (
    <div className="w-full h-full bg-[#fffaf0]">
      <Navigation/>
      <Routes>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/spotifyrecs' element = {<SpotifyRec/>}/>
        <Route path = '/mangaproject' element = {<Projecttwo/>}/>
        <Route path = '/interests' element = {<Interests/>}/>
        <Route path = '/Resume' element = {<Res/>}/>
      </Routes>
    </div>
  );
}

export default App;
