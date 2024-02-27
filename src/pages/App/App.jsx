import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../../pages/HomePage/HomePage';
import BestSellersPage from '../../pages/BestSellersPage/BestSellersPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
            <NavBar />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/best-sellers" element={<BestSellersPage />} />
            </Routes>
    </main>
  );
}
