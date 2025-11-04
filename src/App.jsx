import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Kompetisi from './pages/Kompetisi.jsx'; // Mengimpor dari path yang Anda buat
import Maps from './components/maps.jsx'; 

// Layout ini memastikan Navbar dan Maps ada di setiap halaman
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Ini adalah tempat Home atau Kompetisi muncul */}
      </main>
      <Maps /> {/* Maps akan selalu muncul di bawah konten */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kompetisi" element={<Kompetisi />} />
      </Route>
    </Routes>
  );
}

export default App;