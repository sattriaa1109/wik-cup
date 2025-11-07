// File: App.jsx

import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// ✅ 1. AKTIFKAN KEMBALI SEMUA IMPORT
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import Kompetisi from './pages/Kompetisi.jsx';
import BasketDetail from './pages/details/BasketDetail.jsx';
import SeniDetail from './pages/details/SeniDetail.jsx';

// ✅ 2. IMPORT HALAMAN BARU
import ComingSoon from './pages/ComingSoon.jsx';

// ❌ Hapus import maintenance
// import Maintenance from './pages/maintenance.jsx';


// ✅ 3. AKTIFKAN KEMBALI LAYOUT
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
    // ✅ 4. AKTIFKAN KEMBALI ROUTES
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kompetisi">
          <Route index element={<Kompetisi />} /> 
          <Route path="basket" element={<BasketDetail />} /> 
          <Route path="seni" element={<SeniDetail />} />
        </Route>
        
        {/* ✅ 5. TAMBAHKAN ROUTE UNTUK HALAMAN PENGajuan */}
        <Route path="/pengajuan" element={<ComingSoon />} />

      </Route>
    </Routes>
  );
}

export default App;