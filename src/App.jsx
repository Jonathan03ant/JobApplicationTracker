import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Authentication/Home';

import NavBar from './Components/NavBar'
import Watchlist from './Components/Routers/Watchlist';
import AddApplication from './Components/Routers/AddApplication';
import Dashboard from './Components/Routers/Dashboard';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>

            <Route path="/home" element={<Home/>} />  
            <ProtectedRoute path="/dashboard" element={<Dashboard/>} />  
            <ProtectedRoute path="/add-application" element={<AddApplication/>} /> 
            <ProtectedRoute path="/watchlist" element={<Watchlist/>} /> 
            
        </Routes>
    </Router>

  )
}

export default App
