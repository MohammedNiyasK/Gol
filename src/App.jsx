import React,{Fragment} from 'react'
import './App.css'
import HomePage from './Components/Pages/HomePage'
import HeaderTemplate from './Components/UI/HeaderTemplate/HeaderTemplate'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AboutPage from './Components/Pages/AboutPage';
import PackagePage from './Components/Pages/PackagePage';

function App() {
 

  return (
    <Fragment >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="package" element={<PackagePage />} />
      </Routes>
    </BrowserRouter>
      
      
    </Fragment>
  )
}

export default App
