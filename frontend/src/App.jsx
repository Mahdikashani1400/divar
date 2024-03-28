import { useState } from 'react'

import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Navbar from './components/Navbar/Navbar'
import Icons from './Icons/Icons'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Icons />
      <Navbar />
      <div className="container ">
        <div className="flex justify-end 2xl:mx-10">
          <Sidebar />
          {router}
        </div>
      </div>
    </>
  )
}

export default App
