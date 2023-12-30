import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { auth } from './Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import './App.css'

import Home from './Components/Authentication/Home';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';

import NavBar from './Components/NavBar'
import Watchlist from './Components/Routers/Watchlist';
import AddApplication from './Components/Routers/AddApplication';
import Dashboard from './Components/Routers/Dashboard';

function App() {


    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }else {
                setAuthUser(null);
            }
        });

        return () => {
            unsub();
        }
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setAuthUser(null);
            });
    };

    return (
        <Router>
            {authUser && <NavBar handleLogout={handleLogout}/>}
            <Routes>
                {authUser ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/add-application" element={<AddApplication />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                    </>
                ) : (
                    <>
                        <Route path="" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </>
                )}
            </Routes>
        </Router>
    );

}

export default App;
