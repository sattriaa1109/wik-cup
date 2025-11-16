import React from "react";
// Pastikan Link di-import dari react-router-dom
import { Link } from "react-router-dom";

function Kompetisi() {
  const linkPendaftaran = "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform";

  return (
    <>
      <section id="kompetisi" className="kompetisi-section">
        <h2 className="section-title">Kompetisi Kami</h2>
        
        <img src="/shapes.png" alt="Decoration" className="kompetisi-decoration-top" />
        <img src="/shapes.png" alt="Decoration" className="kompetisi-decoration-bottom" />

        <div className="kompetisi-content-wrapper">
          <div className="kompetisi-card-container">
            
            <div className="kompetisi-card">
              <h3>Basket</h3>
              <p>
                Kejuaraan basket putra untuk peserta didik SMP se-Bogor raya.
              </p>
              <Link to="/kompetisi/basket" className="card-detail-button">
                Lihat Detail
              </Link>
              <img src="/orange-stripes.png" alt="Card Decor" className="card-stripes-decor-left" />
              <img src="/orange-stripes.png" alt="Card Decor" className="card-stripes-decor-right" />
            </div>

            <div className="kompetisi-card">
              <h3>Kompetisi Seni</h3>
              <p>
                Tunjukkan bakat musik (gitar) dan vokalmu di panggung Wikrama Fest!
              </p>
              <Link to="/kompetisi/seni" className="card-detail-button">
                Lihat Detail
              </Link>
              <img src="/orange-stripes.png" alt="Card Decor" className="card-stripes-decor-left" />
              <img src="/orange-stripes.png" alt="Card Decor" className="card-stripes-decor-right" />
            </div>
            
          </div>

          <a
            href={linkPendaftaran}
            target="_blank"
            rel="noopener noreferrer"
            className="main-daftar-button"
          >
            Daftar Sekarang Semua Kompetisi
          </a>

          {/* BAGIAN LAMPIRAN BARU */}
          <div className="lampiran-section">
            <h3 className="lampiran-title">Dokumen Pendukung (Basket)</h3>
            <div className="lampiran-container">
              <a 
                href="/surat-undangan-resmi.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Surat Undangan Resmi (SMP)
              </a>
              <a 
                href="/formulir-pendaftaran-atlet.docx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Unduh Formulir Pendaftaran Atlet
              </a>
              <a 
                href="/surat-rekomendasi-igornas.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Surat Rekomendasi IGORNAS
              </a>
              <a 
                href="/surat-rekomendasi-dinas-pendidikan.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Rekomendasi Dinas Pendidikan
              </a>
              <a 
                href="/surat-rekomendasi-perbasi.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-button"
              >
                Rekomendasi PERBASI
              </a>
            </div>
          </div>
          {/* --- Akhir Bagian Lampiran --- */}

        </div>

        <style>{`
          /* CSS Baru untuk paksa scroll */
          body, html {
            overflow-y: auto !important;
            height: auto !important;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .kompetisi-section {
            background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
            width: 100%;
            margin: 0;
            border: none;
            padding: 80px 20px 0 20px;
            text-align: center;
            min-height: calc(100vh - 74px);
            position: relative;
            /* overflow: hidden; DIHAPUS */
          }
          
          .kompetisi-decoration-top {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 80px;
            opacity: 0.7;
            z-index: 1;
          }
          .kompetisi-decoration-bottom {
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 80px;
            opacity: 0.7;
            z-index: 1;
            transform: rotate(180deg);
          }

          .section-title {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 60px;
            color: #f8bb28;
            position: relative;
            z-index: 2;
          }

          .kompetisi-content-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding-bottom: 80px;
            position: relative;
            z-index: 2;
          }
          
          .kompetisi-card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-bottom: 60px;
          }

          .kompetisi-card {
            background: rgba(0, 0, 0, 0.35);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 30px 25px;
            width: 300px; 
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.4s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .kompetisi-card .card-stripes-decor-left {
            position: absolute;
            top: 0;
            left: 0;
            width: 60px;
            opacity: 0.4;
            transform: rotate(90deg);
          }
          .kompetisi-card .card-stripes-decor-right {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 60px;
            opacity: 0.4;
            transform: rotate(-90deg);
          }

          .kompetisi-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
          }

          .kompetisi-card h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #f8bb28;
            position: relative; z-index: 1;
          }

          .kompetisi-card p {
            font-size: 1rem;
            line-height: 1.6;
            color: #F0F0F0;
            margin-bottom: 30px;
            flex-grow: 1;
            position: relative; z-index: 1;
          }
          
          .card-detail-button, .main-daftar-button {
            display: inline-block;
            background: linear-gradient(90deg, #f5931c, #f8bb28);
            color: #223165;
            border: none;
            border-radius: 50px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s ease;
            text-decoration: none;
            position: relative; 
            z-index: 1;
          }

          .card-detail-button {
            padding: 12px 30px;
            font-size: 1rem;
            box-shadow: 0 5px 15px rgba(245, 147, 28, 0.3);
          }

          .main-daftar-button {
            padding: 15px 40px;
            font-size: 1.2rem;
            box-shadow: 0 8px 25px rgba(245, 147, 28, 0.4);
          }

          .card-detail-button:hover {
            background: #f8bb28;
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(248, 187, 40, 0.5);
          }

          .main-daftar-button:hover {
            background: linear-gradient(90deg, #f8bb28, #f5931c);
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 12px 35px rgba(248, 187, 40, 0.6);
          }
          
          /* --- CSS LAMPIRAN DIPERBARUI (KECIL & WRAP) --- */
          .lampiran-section {
            margin-top: 60px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 40px;
          }
          
          .lampiran-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #f8bb28;
            margin-bottom: 30px;
            text-align: center;
            text-shadow: 0 0 8px rgba(248, 187, 40, 0.4);
          }

          .download-button {
            display: inline-block;
            padding: 8px 15px; /* Lebih kecil */
            border: 2px solid #f5931c;
            color: #f5931c;
            background: transparent;
            border-radius: 50px;
            font-size: 0.8rem; /* Lebih kecil */
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;
            text-shadow: 0 0 6px rgba(245, 147, 28, 0.4);
            margin: 5px; /* Memberi jarak agar bisa wrap */
          }
          .download-button:hover {
            background: #f5931c;
            color: #223165;
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(245, 147, 28, 0.2);
            text-shadow: none;
          }
          
          .lampiran-container {
            display: flex;
            flex-direction: row; /* Horizontal */
            flex-wrap: wrap; /* Bungkus jika tidak muat */
            justify-content: center; /* Tombol rata tengah */
            gap: 0;
            margin-top: 15px;
            margin-bottom: 10px;
          }
          /* --- END: CSS BARU --- */

          @media (max-width: 768px) {
            .section-title {
              font-size: 2.2rem;
            }
            .kompetisi-card-container {
              flex-direction: column;
              align-items: center;
              gap: 25px;
            }
            .kompetisi-card {
              width: 90%;
              max-width: 300px;
            }
            .main-daftar-button {
              padding: 12px 30px;
              font-size: 1.1rem;
            }
            .kompetisi-decoration-top,
            .kompetisi-decoration-bottom {
                width: 60px;
            }
            
            .lampiran-container .download-button {
              width: 100%;
              text-align: center;
              margin: 5px 0; /* Rapi di mobile */
            }
          }
        `}</style>
      </section>
      
      {/* --- KODE MAPS --- */}
      <section id="lokasi" className="maps-section">
        <h2 className="section-title-maps">Lokasi Kami</h2>
        <div className="map-container">
          <iframe
            src="http://googleusercontent.com/maps/google.com/0"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '15px', width: '100%', height: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
        </div>

        <style>{`
          .maps-section {
            background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
            background-size: 400% 400%;
            animation: gradientMove 15s ease infinite;
            width: 100%;
            margin: 0;
            padding: 0 20px 80px 20px;
            text-align: center;
            border: none;
          }

          .section-title-maps {
            font-size: 2.8rem;
            font-weight: 800;
            margin-top: 0;
            padding-top: 80px;
            margin-bottom: 60px;
            color: #f8bb28;
          }

          .map-container {
            max-width: 900px;
            margin: 0 auto;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            aspect-ratio: 16 / 9;
            height: auto; 
          }

          @media (max-width: 768px) {
            .section-title-maps {
              font-size: 2.2rem;
              margin-top: 0;
              padding-top: 60px;
              margin-bottom: 40px;
            }
            .map-container {
              aspect-ratio: 4 / 3;
            }
          }
        `}</style>
      </section>
    </>
  );
}

export default Kompetisi;