import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default App
