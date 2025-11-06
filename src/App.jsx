// File: App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Kompetisi from './pages/Kompetisi.jsx';

// ✅ 1. Impor halaman detail Anda di sini
import BasketDetail from './pages/details/BasketDetail.jsx';
// Hapus GitarDetail dan NyanyiDetail
// import GitarDetail from './pages/details/GitarDetail.jsx';
// import NyanyiDetail from './pages/details/NyanyiDetail.jsx';

// ✅ Tambahkan impor baru
import SeniDetail from './pages/details/SeniDetail.jsx';


function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="kompetisi">
          {/* Halaman utama /kompetisi (yang berisi kartu) */}
          <Route index element={<Kompetisi />} /> 
          
          {/* Halaman detail /kompetisi/basket */}
          <Route path="basket" element={<BasketDetail />} /> 
          
          {/* ✅ Rute lama dihapus
          <Route path="gitar" element={<GitarDetail />} /> 
          <Route path="nyanyi" element={<NyanyiDetail />} /> 
          */}

          {/* ✅ Rute baru yang digabung */}
          <Route path="seni" element={<SeniDetail />} />

        </Route>

      </Route>
    </Routes>
  );
}

export default App;