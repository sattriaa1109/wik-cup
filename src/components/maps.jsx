import React from "react";

function Maps() {
  return (
    <section id="lokasi" className="maps-section">
      <h2 className="section-title">Lokasi Kami</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0139230514087!2d106.84130407499401!3d-6.645191993349406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c89505b4c37d%3A0x307fc4a38e65fa2b!2sSMK%20Wikrama%20Bogor!5e0!3m2!1sen!2sid!4v1762262010406!5m2!1sen!2sid"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '15px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .maps-section {
          background: linear-gradient(-45deg, #223165, #000000, #f5931c, #f8bb28);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          
          /* --- PADDING DIUBAH --- */
          padding: 80px 20px 80px 20px; /* padding-top ditambah agar ada jarak dari atas */
          text-align: center;
        }

        .maps-section .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 60px;
          
          /* --- WARNA DIUBAH --- */
          color: #ffffff;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          /* Hapus background-clip & text-fill */
        }

        .map-container {
          max-width: 900px;
          height: 400px;
          margin: 0 auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}

export default Maps;