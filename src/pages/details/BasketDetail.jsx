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

          <h2 className="detail-title">Regulasi Wikrama Cup 4</h2>
          <p className="detail-subtitle">
            Basketball Championship Tahun 2025
          </p>

          <div className="detail-rules">
            
            <h3>A. KATEGORI</h3>
            <ul>
              <li>Murid putra SMP sederajat</li>
            </ul>
            
            <h3>B. WAKTU DAN TEMPAT</h3>
            <ul>
              <li><b>Pendaftaran</b>: 8 November – 14 November 2025</li>
              <li><b>Technical Meeting</b>: 15 November 2025 (14.00 s.d 15.30 WIB)</li>
              <li><b>Pelaksanaan</b>: 22, 23 dan 29 November 2025 (07.30 - selesai)</li>
              <li><b>Tempat</b>: Lapangan SMK Wikrama Bogor</li>
            </ul>
            
            <h3>C. BIAYA PENDAFTARAN</h3>
            <ul>
              <li>Rp. 600.000,00/tim</li>
            </ul>

            <h3>D. PENGHARGAAN</h3>
            <ul>
              <li><b>Juara 1</b>: Piala, Piagam dan Uang Pembinaan senilai Rp 1.500.000.00</li>
              <li><b>Juara 2</b>: Piala, Piagam dan Uang Pembinaan senilai Rp 1.000.000.00</li>
              <li><b>Juara 3</b>: Piala, Piagam dan Uang Pembinaan senilai Rp 500.000.00</li>
            </ul>
            
            <h3>E. PERSYARATAN UMUM</h3>
            <ul>
              <li>Sudah membayar uang pendaftaran sebesar Rp. 600.000/tim</li>
              <li>Pada saat Technical Meeting, setiap tim harus sudah melengkapi persyaratan.</li>
              <li>Surat rekomendasi dari sekolah masing-masing (bertanda tangan kepala sekolah dan berstempel sekolah asli).</li>
              <li>Mengisi formulir pendaftaran.</li>
              <li>FC Raport semester tarakhir (sesuai tingkatan) / FC Kartu Pelajar.</li>
              <li>Pas Foto 3x4 dua buah (satu untuk ID Card dan satu untuk formulir).</li>
            </ul>
            
            <a 
              href="/surat-rekomendasi.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="download-button"
            >
              Surat Rekomendasi IGORNAS
            </a>
            
            <h3>F. PERATURAN UMUM</h3>
            <ul>
              <li>Keputusan panitia tidak dapat diganggu gugat.</li>
              <li>Panitia berhak menginterprestasikan peraturan sesuai persepsi panitia.</li>
              <li>Semua peserta Wikrama Cup 4 WAJIB mengikuti semua proses acara dan rangkaian kegiatan.</li>
              <li>Semua peserta WAJIB mengikuti protokol kesehatan yang sudah ditentukan.</li>
              <li>Peserta diutamakan adalah kelas 8-9 siswa SMP sederajat tahun ajaran 2025-2026.</li>
              <li>Semua tim WAJIB mengikuti pembukaan minimal diwakili 5 orang/tim. (Denda Rp 50.000/tim jika kurang).</li>
              <li>Perwakilan tim WAJIB hadir saat Technical Meeting dengan pakaian rapih. Jika tidak hadir, dianggap menyetujui semua peraturan.</li>
              <li>Peraturan permainan yang digunakan adalah peraturan <b>FIBA 2024</b>.</li>
              <li>Semua Peserta WAJIB menggunakan ID CARD selama berada dilingkungan SMK Wikrama.</li>
              <li>Official, pelatih, dan guru pendamping WAJIB menggunakan pakaian rapih.</li>
            </ul>

            <h3>G. PERATURAN KHUSUS</h3>
            <ul>
              <li>Setiap tim maksimal 12 pemain dan 3 official.</li>
              <li>Sistem pertandingan yang digunakan adalah sistem gugur.</li>
              <li><b>Waktu Tanding (Penyisihan-Semifinal)</b>: 4x10 menit (kotor), 2 menit terakhir Q4 waktu bersih.</li>
              <li><b>Waktu Tanding (Final)</b>: 4x10 menit (semibersih), 2 menit terakhir Q4 waktu bersih.</li>
              <li><b>Istirahat</b>: 1 menit (antar Q1-Q2 & Q3-Q4) dan 2 menit (jeda babak).</li>
              <li><b>Overtime</b>: Jika imbang, tambahan waktu 5 menit.</li>
              <li><b>Toleransi Keterlambatan</b>: 10 menit dari jadwal (3x panggilan @3 menit). Tim yang tidak hadir dinyatakan kalah WO.</li>
              <li><b>Time Out</b>: Total 5 kali (2x di babak pertama, 3x di babak kedua). 1x time out hangus di 2 menit terakhir jika belum diambil.</li>
              <li>Setiap tim WAJIB memainkan seluruh pemain minimal <b>4 menit</b> (dari Q1-Q3). Pelatih akan dikenai Technical Foul per jumlah pemain yang melanggar.</li>
              <li>Tim harus daftar ulang 30 menit sebelum jadwal tanding.</li>
              <li>Panitia hanya memberikan P3K, penanganan lanjutan dibebankan kepada tim.</li>
              <li>Juara 1 dan 2 tahun 2024 akan menempati posisi atas dan bawah bagan.</li>
            </ul>

            <h3>H. SERAGAM DAN TATA TERTIB LAPANGAN</h3>
            <ul>
              <li>Setiap tim wajib membawa bola masing-masing untuk pemanasan.</li>
              <li>Maksimal 15 orang (12 pemain, 3 official) di area bangku pemain.</li>
              <li>Dilarang merokok di area SMK Wikrama Bogor.</li>
              <li>Official harus mengenakan pakaian rapi dan sopan.</li>
              <li>Wajib menyediakan 2 set kostum (Gelap & Terang). Tim disebut PERTAMA pakai TERANG, tim KEDUA pakai GELAP.</li>
              <li>Setiap pemain harus memasukan kostum ke dalam celana.</li>
              <li>Dilarang menggunakan aksesoris tubuh (anting, kalung, cincin, dll).</li>
              <li>Aksesoris (Sleeve, Deker, Headband, dll) WAJIB berwarna HITAM atau PUTIH saja dan seragam se-tim.</li>
              <li>Saat bertanding, ID Card pemain diserahkan ke meja. Official wajib mengenakan ID Card.</li>
              <li>Pemain yang tidak menyerahkan ID Card dilarang bermain.</li>
              <li>Peserta tidak memakai kostum dengan nomor punggung yang sama dalam 1 tim.</li>
            </ul>

            <h3>I. WASIT DAN KOORDINATOR WASIT</h3>
            <ul>
              <li>Wasit ditugaskan oleh pengcab PERBASI Kota Bogor.</li>
              <li>Wasit memiliki hak dan kewajiban sesuai peraturan FIBA 2024.</li>
              <li>Jumlah wasit per pertandingan adalah 2 orang.</li>
              <li>Wasit tidak boleh mempunyai hubungan dengan kedua tim.</li>
            </ul>

            <h3>J. GANGGUAN</h3>
            <ul>
              <li>Gangguan di Q1: Pertandingan dan skor diulang.</li>
              <li>Gangguan di Q2 - Q4 (menit ke-5): Pertandingan dilanjutkan (skor & waktu terakhir).</li>
              <li>Gangguan di Q4 (kurang dari 5 menit): Pertandingan dianggap selesai.</li>
              <li>Batas waktu menunggu gangguan adalah 30 menit.</li>
              <li>Keputusan panitia tidak dapat diganggu gugat.</li>
            </ul>

            <h3>K. PROTES</h3>
            <ul>
              <li>Diajukan tertulis, maks 30 menit setelah laga, dengan uang jaminan Rp 1.000.000,- (Uang hangus).</li>
              <li>Pengaduan diselesaikan oleh panitia hakim.</li>
            </ul>

            <h3>L. SANKSI DENDA</h3>
            <ul>
              <li>Tim yang WO (tidak hadir) harus membayar denda Rp 100.000,-/pertandingan dan akan di-blacklist.</li>
            </ul>

            <h3>M. SANKSI PEMBUAT ONAR DAN PEMOGOKAN</h3>
            <ul>
              <li>Tim yang berbuat onar dikenakan sanksi diskualifikasi dan denda Rp 1.000.000,-.</li>
              <li>Tim yang mogok (setelah 10 menit peringatan) akan didiskualifikasi.</li>
            </ul>

            <h3>N. SANKSI PELAKU PENGANIAYAAN DAN PERKELAHIAN</h3>
            <ul>
              <li>Jika seorang pemain melakukan penganiayaan (pemain lawan/wasit), pemain dikeluarkan.</li>
              <li>Apabila penganiayaan mengakibatkan terjadinya baku hantam massal, satu atau kedua tim didiskualifikasi.</li>
              <li>Apabila official melakukan penganiayaan, official didiskualifikasi.</li>
              <li>Tim yang menolak lanjut bertanding karena poin di atas dianggap mogok dan didiskualifikasi.</li>
            </ul>

            <h3>O. HAL-HAL LAIN</h3>
            <ul>
              <li>Segala sesuatu yang belum tercantum akan diatur saat Technical Meeting.</li>
            </ul>

            <h3>Kontak Panitia (FAQ)</h3>
            <ul>
              {/* ✅ URUTAN KONTAK DIUBAH */}
              <li><b>Noer Sandy M. S.Pd</b>: 0899-7972-996 (WhatsApp)</li>
              <li><b>Satria</b>: 0831-2843-1096 (WhatsApp)</li>
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

        .download-button {
          display: inline-block;
          margin-top: 15px;
          margin-bottom: 10px;
          padding: 10px 20px;
          border: 2px solid #f5931c;
          color: #f5931c;
          background: transparent;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .download-button:hover {
          background: #f5931c;
          color: #223165;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(245, 147, 28, 0.2);
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

        .detail-rules > ul > li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 12px;
          font-size: 1rem;
          line-height: 1.7;
          color: #F0F0F0;
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
          color: #ffffff;
          font-weight: 600;
        }

        .detail-rules .sub-list {
          list-style: none;
          padding-left: 15px;
          margin-top: 10px;
          margin-bottom: 0;
        }
        
        .detail-rules .sub-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 0.95rem;
          color: #F0F0F0;
          line-height: 1.7;
        }

        .detail-rules .sub-list li::before {
          content: '○';
          color: #f5931c;
          font-size: 1.2rem;
          position: absolute;
          left: 0;
          top: 0px;
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
          .detail-rules > ul > li {
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