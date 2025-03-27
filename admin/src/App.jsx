import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import ListYt from './components/ListYt';
import GameListYt from './components/GameListYt';
import YtAdd from './components/YtAdd';
import YtGames from './components/YtGames';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const location = useLocation();

  // Initially check if user is logged in from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userData'));


  const toggleSidenav = () => {
    setIsSidenavOpen((prev) => !prev);
  };

  // Close sidenav when route changes
  React.useEffect(() => {
    setIsSidenavOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        toggleSidenav={toggleSidenav}  // Pass toggle function
        isSidenavOpen={isSidenavOpen}  // Pass state
      />
      <SideNav isOpen={isSidenavOpen} toggleSidenav={toggleSidenav} />

      <main className={`transition-all duration-300 pt-12 ${isSidenavOpen ? 'ml-64' : 'ml-0' }`}>
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<PrivateRoute><Home toggleSidenav={toggleSidenav} /></PrivateRoute>} />
          <Route path="/listyt" element={<PrivateRoute><ListYt /></PrivateRoute>} />
          <Route path="/gamesyt" element={<PrivateRoute><GameListYt /></PrivateRoute>} />
          <Route path="/ytadd" element={<PrivateRoute><YtAdd /></PrivateRoute>} />
          <Route path="/ytgames" element={<PrivateRoute><YtGames /></PrivateRoute>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;