import React from 'react';
import { Link } from 'react-router-dom';

function BasketDetail() {
  const linkPendaftaran = "https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform";

  return (
    <>
      <section id="detail-kompetisi" className="detail-section">
        
        <img src="/basketball.png" alt="Basketball Icon" className="detail-watermark-icon" />

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

          <h2 className="detail-title">Kompetisi Basket</h2>
          <p className="detail-subtitle">
            Kejuaraan basket putra untuk peserta didik SMP se-Bogor raya.
          </p>

          <div className="detail-rules">
            
            <h3>A. Kategori Peserta</h3>
            <ul>
              <li>Siswa <b>putra</b> tingkat SMP/Sederajat.</li>
              <li>Diutamakan kelas 8 & 9 tahun ajaran <b>2025-2026</b>.</li>
            </ul>
            
            <h3>B. Waktu & Tempat</h3>
            <ul>
              <li><b>Pendaftaran (Online/Offline)</b>: 3 - 14 November 2025 (08.00 - 16.00 WIB)</li>
              <li><b>Technical Meeting (TM)</b>: Sabtu, 15 November 2025 (09.00 - 12.00 WIB) di SMK Wikrama</li>
              <li><b>Sesi 1</b>: Sabtu, 22 November 2025 (07.30 - 17.00 WIB) di SMK Wikrama</li>
              <li><b>Sesi 2</b>: Minggu, 23 November 2025 (07.30 - 17.00 WIB) di SMK Wikrama</li>
              <li><b>Sesi 3</b>: Sabtu, 29 November 2025 di SMK Wikrama</li>
            </ul>
            
            <h3>C. Biaya & Penghargaan</h3>
            <ul>
              <li><b>Biaya Daftar</b>: Rp 400.000,- per tim.</li>
              <li><b>Juara 1</b>: Piala, Piagam, dan Uang Pembinaan Rp 1.500.000,-</li>
              <li><b>Juara 2</b>: Piala, Piagam, dan Uang Pembinaan Rp 1.000.000,-</li>
              <li><b>Juara 3</b>: Piala, Piagam, dan Uang Pembinaan Rp 500.000,-</li>
            </ul>
            
            <h3>D. Syarat Pendaftaran (Wajib)</h3>
            <ul>
              <li>Membayar biaya pendaftaran.</li>
              <li>Menyerahkan surat rekomendasi asli (stempel sekolah & TTD Kepala Sekolah).</li>
              <li>Menyerahkan Pas Foto 3x4 (2 buah) untuk ID Card dan formulir.</li>
              <li>Semua syarat harus lengkap saat Technical Meeting (TM).</li>
            </ul>
            
            <h3>E. Sistem & Aturan Main</h3>
            <ul>
              <li>Peraturan permainan menggunakan <b>FIBA 2022</b>.</li>
              <li>Sistem pertandingan adalah <b>sistem gugur</b>.</li>
              <li>Juara 1 & 2 tahun <b>2024</b> akan mendapat posisi <i>drawing</i> di bagan atas dan bawah.</li>
            </ul>
            
            <h3>F. Waktu Pertandingan</h3>
            <ul>
              <li><b>Penyisihan - Semifinal</b>: 4x10 menit (kotor). 2 menit terakhir di Q4 menggunakan waktu bersih.</li>
              <li><b>Final</b>: 4x10 menit (semibersih). 2 menit terakhir di Q4 menggunakan waktu bersih.</li>
              <li><b>Istirahat</b>: 1 menit antar Q1-Q2 dan Q3-Q4. Jeda antar babak (Q2-Q3) selama 2 menit.</li>
              <li><b>Overtime</b>: Jika imbang, tambahan waktu 5 menit (diulang jika masih imbang).</li>
              <li><b>Time Out</b>: Total 5 kali (2x di Babak I, 3x di Babak II).</li>
            </ul>
            
            <h3>G. Aturan Tim & Pemain</h3>
            <ul>
              <li><b>Tim</b>: Maksimal 12 pemain dan 3 official per sekolah.</li>
              <li><b>Wajib Main (Minute Play)</b>: Seluruh pemain yang terdaftar di <i>scoresheet</i> WAJIB bermain minimal 5 menit (di Q1-Q3).</li>
              <li><b>Hukuman Minute Play</b>: Jika ada pemain yang tidak main 5 menit (di Q1-Q3), tim akan dikenai <i>Technical Foul</i> di awal Q4 (sebanyak jumlah pemain yang melanggar).</li>
              <li><b>Keterlambatan</b>: Toleransi 10 menit dari jadwal (3x panggilan @3 menit). Lewat dari itu dianggap kalah WO.</li>
            </ul>
            
            <h3>H. Seragam & Atribut</h3>
            <ul>
              <li>Setiap tim wajib menyediakan 2 set kostum (Gelap & Terang).</li>
              <li>Tim yang disebut <b>pertama</b> memakai kostum <b>TERANG</b>.</li>
              <li>Tim yang disebut <b>kedua</b> memakai kostum <b>GELAP</b>.</li>
              <li>Aksesoris (sleeve, headband, deker, dll) WAJIB berwarna <b>HITAM</b> atau <b>PUTIH</b> saja dan harus seragam se-tim.</li>
              <li>Dilarang memakai aksesoris tubuh (anting, kalung, cincin).</li>
              <li>Kostum wajib dimasukkan ke dalam celana.</li>
            </ul>
            
            <h3>I. Wasit</h3>
            <ul>
              <li>Wasit ditugaskan oleh PERBASI Kota Bogor.</li>
              <li>Setiap pertandingan dipimpin oleh 2 orang wasit.</li>
            </ul>
            
            <h3>J. Tata Tertib Umum</h3>
            <ul>
              <li>Seluruh peserta WAJIB memakai <b>ID CARD</b> di area SMK Wikrama. Pemain tanpa ID Card dilarang bermain.</li>
              <li>Official/Pelatih WAJIB berpakaian rapi (kaos berkerah, celana panjang, sepatu).</li>
              <li><b>DILARANG MEROKOK</b> di seluruh area SMK Wikrama Bogor.</li>
              <li>Panitia hanya menyediakan P3K. Cedera lanjutan ditanggung tim.</li>
              <li>Keputusan panitia tidak dapat diganggu gugat.</li>
            </ul>
            
            <h3>K. Penonton</h3>
            <ul>
              <li>Setiap tim diharapkan membawa minimal 5 penonton.</li>
              <li><b>Tiket Penyisihan</b>: Rp 5.000,- (dapat <i>soft drink</i>).</li>
              <li><b>Tiket Semi-Final & Final</b>: Rp 10.000,- (dapat <i>soft drink</i>).</li>
            </ul>
            
            <h3>L. Gangguan Pertandingan</h3>
            <ul>
              <li><b>Terjadi di Q1</b>: Pertandingan dan skor diulang penuh.</li>
              <li><b>Terjadi di Q2 - Q4 (menit ke-5)</b>: Lanjut dengan skor dan waktu terakhir.</li>
              <li><b>Terjadi di Q4 (kurang dari 5 menit)</b>: Pertandingan selesai, skor terakhir dianggap hasil akhir.</li>
              <li>Batas waktu menunggu gangguan adalah 30 menit.</li>
            </ul>
            
            <h3>M. Protes</h3>
            <ul>
              <li>Dapat diajukan tertulis maksimal 30 menit setelah laga selesai.</li>
              <li>Menyerahkan uang jaminan <b>Rp 1.000.000,-</b>. (Uang ini akan hangus, baik protes diterima maupun ditolak).</li>
            </ul>
            
            <h3>N. Sanksi & Denda</h3>
            <ul>
              <li><b>WO (Walk Out)</b>: Dinyatakan kalah, denda <b>Rp 100.000,-</b>, dan di-<i>blacklist</i> di Wikrama Cup berikutnya.</li>
              <li><b>Pemogokan/Onar</b>: Tim yang mogok atau membuat onar akan didiskualifikasi dari turnamen.</li>
              <li><b>Perkelahian/Penganiayaan</b>:
                <li style={{ listStyleType: 'circle', marginLeft: '20px', paddingLeft: '5px' }}>
                  Pemain (individu): Dikeluarkan dari pertandingan (skorsing ditentukan panitia).
                </li>
                <li style={{ listStyleType: 'circle', marginLeft: '20px', paddingLeft: '5px' }}>
                  Official: Didiskualifikasi (dilarang mendampingi tim selamanya).
                </li>
                <li style={{ listStyleType: 'circle', marginLeft: '20px', paddingLeft: '5px' }}>
                  Massal: Salah satu atau kedua tim akan didiskualifikasi.
                </li>
              </li>
            </ul>
            
            <h3>Kontak Panitia (FAQ)</h3>
            <ul>
              {/* ✅ DIUBAH: Nomor Dwina diganti Satria */}
              <li><b>Satria</b>: 0831-2843-1096 (WhatsApp)</li>
              <li><b>Noer Sandy</b>: 0899-7972-996 (WhatsApp)</li>
            </ul>
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
            border-radius: 50%;
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
          color: #f8bb28;
        }

        .detail-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 40px;
          color: #F0F0F0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 30px;
        }
        
        .detail-rules h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 30px;
          margin-bottom: 15px;
          color: #f5931c;
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
          color: #F0F0F0;
        }

        .detail-rules ul li::before {
          content: '•';
          color: #f5931c;
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

export default BasketDetail;