import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SeniDetail() {
  const linkPendaftaran = "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform";

  const location = useLocation();
  const refs = {
    gitar: useRef(null),
    nyanyi: useRef(null),
  };

  useEffect(() => {
    const hash = location.hash.substring(1); 
    if (hash && refs[hash]) {
      refs[hash].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, refs]);

  return (
    <>
      <section id="detail-kompetisi" className="detail-section">
        
        <img src="/microphone.png" alt="Microphone Icon" className="detail-watermark-icon" />

        <div className="detail-content-wrapper">
          
          <div className="detail-header">
            <Link to="/kompetisi" className="back-button">
              ← Kembali ke Kompetisi
            </Link>
            <a
              href={linkPendaftaran}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-register-button"
            >
              Daftar Lomba Ini
            </a>
          </div>

          <h2 className="detail-title">Kompetisi Seni</h2>
          <p className="detail-subtitle">
            Syarat & Ketentuan Lomba Menyanyi Solo & Gitar Akustik Antar SMP
          </p>

          {/* --- Waktu & Tempat --- */}
          <div className="detail-rules-block">
            <h2 className="detail-title-secondary">Waktu & Tempat Kegiatan</h2>
            <div className="detail-rules">
              <ul>
                <li><b>Pendaftaran (Online/Offline)</b>: 3 - 14 November 2025 (08.00 - 16.00 WIB)</li>
                <li><b>Technical Meeting (TM)</b>: Sabtu, 15 November 2025 (09.00 - 12.00 WIB) di SMK Wikrama</li>
                <li><b>Pelaksanaan</b>: Sabtu, 29 November 2025 (07.30 - 17.00 WIB) di SMK Wikrama</li>
              </ul>
            </div>
          </div>

          {/* --- Penghargaan --- */}
          <div className="detail-rules-block">
            <h2 className="detail-title-secondary">Apresiasi & Penghargaan</h2>
            <p style={{color: '#F0F0F0', fontSize: '1rem', lineHeight: '1.7'}}>
              Hadiah diberikan untuk <b>masing-masing</b> kategori (Menyanyi Solo & Gitar Akustik):
            </p>
            <div className="detail-rules">
              <ul>
                <li><b>Juara 1</b>: Piala, Sertifikat, dan Uang Pembinaan Rp 500.000,-</li>
                <li><b>Juara 2</b>: Piala, Sertifikat, dan Uang Pembinaan Rp 350.000,-</li>
                <li><b>Juara 3</b>: Piala, Sertifikat, dan Uang Pembinaan Rp 250.000,-</li>
              </ul>
            </div>
          </div>

          {/* --- Ketentuan Umum --- */}
          <div className="detail-rules-block"> 
            <h2 className="detail-title-secondary">Peraturan Lomba</h2>
            
            <div className="detail-rules">
              <h3>A. Ketentuan Umum</h3>
              <ul>
                <li>Peserta merupakan siswa aktif jenjang SMP/sederajat (dibuktikan dengan kartu pelajar atau surat keterangan sekolah).</li>
                <li>Setiap sekolah diwajibkan mengirimkan <b>minimal 1 peserta</b> untuk Menyanyi Solo dan <b>1 peserta</b> untuk Gitar Akustik.</li>
                <li>Peserta wajib mengisi formulir pendaftaran dan menyerahkan berkas yang diminta oleh panitia sebelum batas waktu yang ditentukan.</li>
                <li>Peserta menyetujui seluruh peraturan lomba dan bersedia mengikuti seluruh rangkaian kegiatan sesuai jadwal.</li>
                <li>Keputusan dewan juri bersifat mutlak dan tidak dapat diganggu gugat.</li>
              </ul>
            </div>
          </div>

          {/* --- Kategori Lomba --- */}
          <div className="detail-rules-block"> 
            <h2 className="detail-title-secondary">B. Kategori Lomba</h2>

            <div ref={refs.nyanyi} id="nyanyi" style={{paddingTop: '10px'}}>
              <div className="detail-rules">
                <h3>Menyanyi Solo (Vokal)</h3>
                <ul>
                  <li>Peserta menyanyikan 1 lagu bebas (pop, daerah, atau akustik versi sendiri).</li>
                  <li>Lagu tidak mengandung unsur SARA, kekerasan, maupun ujaran kebencian.</li>
                </ul>
              </div>
            </div>

            <div ref={refs.gitar} id="gitar" style={{paddingTop: '10px'}}>
              <div className="detail-rules">
                <h3>Gitar Akustik (Instrumen)</h3>
                <ul>
                  <li>Peserta menampilkan satu lagu instrumental atau versi akustik bebas.</li>
                  <li>Gitar yang digunakan adalah gitar akustik (non-elektrik atau semi-elektrik).</li>
                </ul>
              </div>
            </div>

          </div>

          {/* --- Kontak Panitia --- */}
          <div className="detail-rules-block">
            <h2 className="detail-title-secondary">Kontak Panitia (FAQ)</h2>
            <div className="detail-rules">
                <ul>
                  <li><b>Habil</b>: 0852-8225-1956 (WhatsApp)</li>
                </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- CSS --- */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .detail-section {
          /* ✅ DIUBAH: Gradien hanya menggunakan warna gelap */
          background: linear-gradient(-45deg, #223165, #000000, #1a254f, #000000);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          width: 100%;
          min-height: calc(100vh - 74px);
          margin: 0;
          border: none;
          padding: 60px 20px;
          text-align: left;
          position: relative;
          overflow: hidden;
        }
        
        .detail-watermark-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            opacity: 0.1;
            z-index: 0;
            pointer-events: none;
        }

        .detail-content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 1;
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          flex-wrap: wrap; 
          gap: 20px;
        }

        .back-button {
          color: #f8bb28; /* Warna Kuning (Aksen) */
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          color: #ffffff;
          transform: translateX(-5px);
        }

        .detail-register-button {
          display: inline-block;
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(245, 147, 28, 0.4);
          text-decoration: none;
        }

        .detail-register-button:hover {
          background: linear-gradient(90deg, #f8bb28, #f5931c);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(248, 187, 40, 0.6);
        }

        .detail-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 10px;
          color: #f8bb28; /* Warna Kuning (Aksen) */
        }

        .detail-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          color: #F0F0F0; /* ✅ DIUBAH: Warna netral putih solid */
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 30px;
        }
        
        .detail-rules-block {
          padding-top: 10px; 
          scroll-margin-top: 90px;
        }
        
        .detail-rules-block:not(:last-child) {
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 20px;
        }

        .detail-title-secondary {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 25px;
          color: #f8bb28; /* Warna Kuning (Aksen) */
        }
        
        .detail-rules h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #f5931c; /* Warna Oranye (Aksen) */
          border-left: 4px solid #f5931c;
          padding-left: 10px;
        }

        .detail-rules ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        .detail-rules ul li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 1rem;
          line-height: 1.7;
          color: #F0F0F0; /* ✅ DIUBAH: Warna netral putih solid */
        }

        .detail-rules ul li::before {
          content: '•';
          color: #f5931c; /* Warna Oranye (Aksen) */
          font-size: 1.4rem;
          position: absolute;
          left: 0;
          top: -1px;
        }
        
        .detail-rules ul li b,
        .detail-rules ul li i {
          color: #ffffff;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .detail-section {
            padding: 40px 10px;
          }
          .detail-content-wrapper {
            padding: 30px 20px;
          }
          .detail-header {
            flex-direction: column; 
            align-items: flex-start;
          }
          .detail-title {
            font-size: 2.2rem;
          }
          .detail-subtitle {
            font-size: 1.1rem;
          }
          .detail-title-secondary {
            font-size: 1.9rem;
          }
          .detail-rules h3 {
            font-size: 1.4rem;
          }
          .detail-rules ul li {
            font-size: 0.95rem;
          }
          .detail-watermark-icon {
              width: 200px;
          }
        }
      `}</style>
    </>
  );
}

export default SeniDetail;