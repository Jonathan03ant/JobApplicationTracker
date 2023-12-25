import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Job from './Components/Job';

function App() {
  return (
    <>
        <NavBar/>
        <div className='px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
            <Job/>
        </div>
    </>

  )
}

export default App
