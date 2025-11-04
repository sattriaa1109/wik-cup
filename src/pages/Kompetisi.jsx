import React from "react";
import { Link } from "react-router-dom";

function Kompetisi() {
  return (
    <section id="kompetisi" className="kompetisi-section">
      <h2 className="section-title">Kompetisi Kami</h2>
      <div className="kompetisi-container">
        <div className="kompetisi-card">
          <div className="card-header">
            <h3>Basket</h3>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet...</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform" target="_blank" rel="noopener noreferrer" className="card-button">Daftar Sekarang</a>
          </div>
        </div>

        <div className="kompetisi-card">
          <div className="card-header">
            <h3>Gitar Akustik</h3>
          </div>
          <div className="card-body">
            <p>Sed ut perspiciatis unde omnis...</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform" target="_blank" rel="noopener noreferrer" className="card-button">Daftar Sekarang</a>
          </div>
        </div>

        <div className="kompetisi-card">
          <div className="card-header">
            <h3>Nyanyi</h3>
          </div>
          <div className="card-body">
            <p>At vero eos et accusamus et iusto...</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform" target="_blank" rel="noopener noreferrer" className="card-button">Daftar Sekarang</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .kompetisi-section {
          background: linear-gradient(-45deg, #223165, #000000, #f5931c, #f8bb28);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;

          color: #ffffff;
          /* --- PADDING DIUBAH --- */
          padding: 80px 20px 0 20px; /* padding-bottom dihapus (jadi 0) */
          text-align: center;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 60px;
          
          /* --- WARNA DIUBAH --- */
          color: #ffffff;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          /* Hapus background-clip & text-fill */
        }

        .kompetisi-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .kompetisi-card {
          background-color: #223165;
          border-radius: 15px;
          overflow: hidden;
          width: 320px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .kompetisi-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(245, 147, 28, 0.4);
        }

        .card-header {
          background-color: #f5931c;
          padding: 20px;
        }

        .card-header h3 {
          color: #223165;
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0;
        }

        .card-body {
          padding: 30px;
        }

        .card-body p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.8);
        }

        .card-button {
          display: inline-block;
          background-color: #ffffff;
          color: #223165;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 700;
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .card-button:hover {
          background-color: #f8bb28;
          color: #000000;
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          .kompetisi-container {
            flex-direction: column;
            align-items: center;
          }
          .kompetisi-card {
            width: 90%;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}

export default Kompetisi;