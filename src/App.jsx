import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Job from './Components/Job';

function App() {
  return (
    <>
        <NavBar/>
        <div>
            <Job/>
        </div>
    </>

  )
}

export default App
