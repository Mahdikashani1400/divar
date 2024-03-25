import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Navbar from './components/Navbar/Navbar'
import Icons from './components/Icons/Icons'


function App() {
  const router = useRoutes(routes)
  return (
    <>
      {router}
      <Icons />
      <Navbar />

    </>
  )
}

export default App