import React from "react";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>
          <span className="wikrama-gradient">WIKRAMA</span>{" "}
          <span className="cup-highlight">CUP</span>
        </h2>
        <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquid vel alias.</p>
        
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
        >
          Daftar Sekarang
        </a>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .home-section {
          background: linear-gradient(-45deg, #223165, #000000, #f5931c, #f8bb28);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;

          color: #ffffff;
          min-height: calc(100vh - 74px); /* (Tinggi navbar 50px + padding 24px) */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .home-section::before,
        .home-section::after {
            content: '';
            position: absolute;
            background: rgba(248, 187, 40, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        }

        .home-section::before {
            width: 300px;
            height: 300px;
            top: 10%;
            left: -100px;
            animation: moveCircle1 20s infinite alternate;
        }

        .home-section::after {
            width: 200px;
            height: 200px;
            bottom: 5%;
            right: -80px;
            animation: moveCircle2 18s infinite alternate-reverse;
        }

        @keyframes moveCircle1 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(150px, 50px) scale(1.1); }
        }
        @keyframes moveCircle2 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-100px, -30px) scale(0.9); }
        }


        .home-content {
            z-index: 2;
        }

        .home-content h2 {
          font-size: 3.8rem;
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: 2px;
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.2);
          animation: fadeInSlideUp 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .wikrama-gradient {
            background: linear-gradient(45deg, #f8bb28, #f5931c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .cup-highlight {
            color: #ffffff;
        }

        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.5;
          animation: fadeInSlideUp 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .home-button {
          background: linear-gradient(90deg, #f5931c, #f8bb28);
          color: #223165;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 8px 25px rgba(245, 147, 28, 0.4);
          animation: fadeInScaleUp 1s ease-out forwards;
          animation-delay: 0.9s;
          opacity: 0;
          text-decoration: none;
        }

        .home-button:hover {
          background: linear-gradient(90deg, #f8bb28, #f5931c);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 35px rgba(248, 187, 40, 0.6);
        }

        @media (max-width: 768px) {
          .home-content h2 {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.1rem;
            padding: 0 15px;
          }
          .home-button {
            padding: 12px 25px;
            font-size: 1rem;
          }
          .home-section::before,
          .home-section::after {
              display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Home;