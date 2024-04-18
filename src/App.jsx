/* import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarComponent from './components/Navbar/NavbarComponent'
import HandpickedProjects from './components/HandPicked/HandpickedProjects'
import Footer from './components/Footer/Footer'
import PostPropertyPage from './Pages/Postproperty/PostPropertyPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path ='/postpropertypage' element={<PostPropertyPage/>}/>
      </Routes>
      </BrowserRouter>
     
      <HandpickedProjects/>
      <Footer/>
    </div>
  )
}

export default App
 */

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PostPropertyPage from './Pages/Postproperty/PostPropertyPage'
import NavbarComponent from './components/Navbar/NavbarComponent'
import HandpickedProjects from './components/HandPicked/HandpickedProjects'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path = '/' element={<HandpickedProjects/>}/>
       
        <Route path = "/postpropertypage" element={<PostPropertyPage/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
