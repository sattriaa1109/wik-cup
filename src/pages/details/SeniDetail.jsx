import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function SeniDetail() {
  const linkPendaftaran = "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform";

  // --- Logika untuk Tombol 'Kembali ke Atas' & Auto-Scroll ---
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const refs = {
    gitar: useRef(null),
    nyanyi: useRef(null),
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Listener untuk tombol 'kembali ke atas'
    window.addEventListener('scroll', toggleVisibility);
    
    // Listener untuk auto-scroll (hash)
    const hash = location.hash.substring(1); 
    if (hash && refs[hash]) {
      refs[hash].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Jika tidak ada hash, scroll ke atas saat pindah halaman
      window.scrollTo(0, 0);
    }

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [location, refs]); // Dependensi di-update
  // --- Akhir Logika ---

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
            Gitar Akustik Solo & Menyanyi Solo (Culture Festival)
          </p>
          
          {/* --- Waktu & Tempat --- */}
          <div className="detail-rules-block">
            <h2 className="detail-title-secondary">Waktu & Tempat Kegiatan</h2>
            <div className="detail-rules">
              <ul>
                <li><b>Pendaftaran (Online/Offline)</b>: 8 November – 14 November 2025</li>
                <li><b>Technical Meeting (TM)</b>: 15 November 2025 (14.00 s.d 15.30 WIB) di SMK Wikrama</li>
                <li><b>Pelaksanaan</b>: Sabtu, 29 November 2025 (07.30 - 17.00 WIB) di SMK Wikrama</li>
              </ul>
            </div>
          </div>

          {/* --- Penghargaan --- */}
          <div className="detail-rules-block">
            <h2 className="detail-title-secondary">Apresiasi & Penghargaan</h2>
            <p style={{color: '#FFFFFF', fontSize: '1rem', lineHeight: '1.7', marginBottom: '15px'}}>
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

          {/* --- Persyaratan Umum --- */}
          <div className="detail-rules-block"> 
            <h2 className="detail-title-secondary">E. Persyaratan Umum</h2>
            <div className="detail-rules">
              <ul>
                <li>Merupakan siswa aktif, dibuktikan dengan surat keterangan dari sekolah.</li>
                <li>Mengisi formulir pendaftaran.</li>
                <li>Melampirkan fotokopi rapor dari semester pertama hingga terakhir.</li>
                <li>Melampirkan fotokopi kartu pelajar.</li>
                <li>Menyerahkan pas foto ukuran 3x4 sebanyak 2 lembar.</li>
                <li>Masuk ke dalam grup yang sudah ada di dalam Google Form.</li>
              </ul>
            </div>
          </div>

          {/* --- Peraturan Umum --- */}
          <div className="detail-rules-block"> 
            <h2 className="detail-title-secondary">F. Peraturan Umum</h2>
            <div className="detail-rules">
              <ul>
                <li>Keputusan juri tidak dapat diganggu gugat.</li>
                <li>Semua peserta Culture Festival WAJIB mengikuti seluruh rangkaian kegiatan.</li>
                <li>Semua peserta WAJIB mematuhi tata tertib dan aturan yang berlaku.</li>
                <li>Semua peserta WAJIB menggunakan ID Card selama berada di lingkungan SMK Wikrama.</li>
              </ul>
            </div>
          </div>

          {/* --- Ketentuan Lomba --- */}
          <div className="detail-rules-block"> 
            <h2 className="detail-title-secondary">G. Ketentuan Lomba</h2>

            {/* --- Sub-bagian Gitar --- */}
            <div ref={refs.gitar} id="gitar" style={{paddingTop: '10px'}}>
              <div className="detail-rules">
                <h3>a. Gitar Akustik Solo</h3>
                <ul>
                  <li>Peserta <b>wajib membawa gitar akustik pribadi</b>.</li>
                  <li>Peserta menyiapkan seluruh peralatan yang dibutuhkan saat tampil.</li>
                  <li>Peserta memainkan alat musik gitar dengan membawakan 1 lagu daerah dan 1 lagu bebas.</li>
                  <li>Sudah mengunggah partitur lagu pada link pendaftaran.</li>
                  <li>Peserta menggunakan kostum sesuai dengan tema lagu daerah gitar solo.</li>
                  <li>Aransemen musik yang digunakan adalah <b>gitar akustik</b>.</li>
                  <li>Peserta hadir 15 menit sebelum acara dimulai.</li>
                  <li><b>Waktu penampilan maks 10 menit</b> untuk dua lagu (setelah check sound 5 menit).</li>
                </ul>
                <h3 style={{marginTop: '25px'}}>Kriteria Penilaian (Gitar):</h3>
                <ul className="sub-list indented">
                  <li><b>Teknik:</b> Teknik kesulitan repertoar, Penalaan instrumen / tuning, Kemampuan dan keterampilan penguasaan lagu, Ketepatan membidik nada (pitch).</li>
                  <li><b>Pembawaan:</b> Interpretasi, Balance, Artikulasi, Frase.</li>
                  <li><b>Aransemen:</b> Ketepatan dalam menerapkan progresif akor (harmoni) dalam lagu, Kreativitas dalam menerapkan ide musikal.</li>
                  <li><b>Penampilan</b></li>
                </ul>
              </div>
            </div>

            {/* --- Sub-bagian Menyanyi --- */}
            <div ref={refs.nyanyi} id="nyanyi" style={{paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '30px'}}>
              <div className="detail-rules">
                <h3>b. Menyanyi Solo</h3>
                <ul>
                  <li>Peserta adalah siswa SMP/MTS sederajat se-Bogor Raya.</li>
                  <li>Peserta membawakan lagu daerah khas Jawa Barat dan lagu bebas genre pop.</li>
                  <li>Peserta menggunakan kostum sesuai tema lagu daerah.</li>
                  <li><b>Musik iringan diserahkan</b> kepada panitia melalui Google Form saat registrasi.</li>
                  <li><b>Durasi penampilan maksimal 10 menit.</b></li>
                  <li>Peserta hadir 15 menit sebelum acara dimulai.</li>
                  <li>Keputusan juri tidak dapat diganggu gugat.</li>
                  <li>Peserta lomba untuk vokal solo.</li>
                </ul>
                <h3 style={{marginTop: '25px'}}>Aspek Penilaian (Menyanyi):</h3>
                <ul className="sub-list indented">
                  <li><b>Teknik Vokal:</b> Kontrol nada, pernafasan, register vokal, tempo, ritme, vibrato.</li>
                  <li><b>Teknik Mic</b></li>
                  <li><b>Performance:</b> Bahasa tubuh, ekspresi, dan penghayatan.</li>
                  <li><b>Musik:</b> Kecocokan nada dan penyanyi.</li>
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

      {/* ✅ TOMBOL 'KEMBALI KE ATAS' (JSX) */}
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          ↑
        </button>
      )}

      {/* --- CSS --- */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .detail-section {
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
          color: #f8bb28;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-shadow: 0 0 8px rgba(248, 187, 40, 0.5);
        }

        .back-button:hover {
          color: #ffffff;
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
          color: #f8bb28;
          text-shadow: 0 0 10px rgba(248, 187, 40, 0.5);
        }

        .detail-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          color: #FFFFFF;
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
          color: #f8bb28;
          text-shadow: 0 0 10px rgba(248, 187, 40, 0.5);
        }
        
        .detail-rules h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #f5931c;
          border-left: 4px solid #f5931c;
          padding-left: 10px;
          text-shadow: 0 0 8px rgba(245, 147, 28, 0.4);
        }

        .detail-rules ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 20px;
        }

        .detail-rules > ul > li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 1rem;
          line-height: 1.7;
          color: #FFFFFF;
        }

        .detail-rules > ul > li::before {
          content: '•';
          color: #f5931c;
          font-size: 1.4rem;
          position: absolute;
          left: 0;
          top: -1px;
        }
        
        .detail-rules ul li b,
        .detail-rules ul li i {
          color: #FFFFFF;
          font-weight: 600;
        }

        .detail-rules .sub-list {
          list-style: none;
          padding-left: 15px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        
        .detail-rules .sub-list.indented > li {
          padding-left: 25px; 
          font-size: 1rem;
          line-height: 1.7;
          color: #FFFFFF;
          margin-bottom: 12px;
          position: relative;
        }
        
        .detail-rules .sub-list.indented > li::before {
           content: '○';
           color: #f5931c;
           font-size: 1.2rem;
           position: absolute;
           left: 0;
           top: 0px;
        }
        
        /* ✅ CSS BARU UNTUK TOMBOL 'KEMBALI KE ATAS' */
        .back-to-top-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #f5931c;
          color: #223165;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          font-weight: bold;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
          z-index: 1000;
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0.9;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .back-to-top-button:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        /* --- Akhir CSS Baru --- */
        
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
          .detail-rules > ul > li {
            font-size: 0.95rem;
          }
          .detail-watermark-icon {
              width: 200px;
          }
          .back-to-top-button {
            width: 40px;
            height: 40px;
            font-size: 20px;
            line-height: 40px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default SeniDetail;