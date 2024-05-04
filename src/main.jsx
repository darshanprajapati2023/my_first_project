import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mycomponent from './Mycomponent.jsx'
import Classcomponent from './Classcomponent.jsx'
import Task1 from './Task1.jsx'
import Task1Class from './Task1Class.jsx'
import ObjectAccess from './ObjectAccess.jsx'
import BootstrapComponent from './BootstrapComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu.jsx'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Mycomponent newname="DarshanPrajapati" /> */}
    {/* <Classcomponent color="red" /> */}
    {/* <Task1 /> */}
    {/* <Task1Class /> */}
    {/* <ObjectAccess /> */}
    {/* <BootstrapComponent /> */}
    {/* <Menu /> */}
    {/* <BrowserRouter> */}
    <HashRouter>
      <Menu />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode >,
)
