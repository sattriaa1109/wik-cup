import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-decoration left"></div>

          <div 
            className="navbar-logo" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="/wikcup-logo.png" alt="Wikcup Logo" className="logo-image" />
            <h1>
              WIKCUP<span className="highlight">4</span>
            </h1>
          </div>

          <div className={`navbar-links-container ${isMenuOpen ? "open" : ""}`}>
            <ul className="navbar-menu">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/kompetisi" onClick={() => setIsMenuOpen(false)}>Kompetisi</Link></li>
            </ul>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5ApVLMORQ1lkBOekNI-82ZT0lc66GXibAGBU0_mJatFK-5Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-button"
            >
              Daftar Sekarang
            </a>
          </div>

          <div className="navbar-decoration right"></div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes moveLines {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInDot {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .navbar {
          background: linear-gradient(-45deg, #223165, #000000, #f5931c, #f8bb28);
          background-size: 400% 400%;
          color: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          animation: slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                     gradientMove 15s ease infinite;
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background: repeating-linear-gradient(
            45deg,
            rgba(245, 147, 28, 0.1),
            rgba(245, 147, 28, 0.1) 1px,
            transparent 1px,
            transparent 20px
          );
          background-size: 40px 40px;
          animation: moveLines 25s linear infinite;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 60px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          border: 0;
        }

        .navbar-decoration {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          pointer-events: none;
          z-index: 3;
        }

        .navbar-decoration.left {
          left: -40px;
        }

        .navbar-decoration.right {
          right: -40px;
        }

        .navbar-decoration::before,
        .navbar-decoration::after {
          content: '';
          width: 8px;
          height: 8px;
          background-color: rgba(245, 147, 28, 0.3);
          border-radius: 50%;
          opacity: 0;
          animation: fadeInDot 1.5s ease-out 1s forwards;
        }

        .navbar-decoration::after {
          animation-delay: 1.2s;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.3s ease;
          user-select: none;
          z-index: 1001;
          border: 0;
          margin: 0;
          padding: 0;
        }

        .navbar-logo:hover {
          transform: scale(1.03);
        }
        
        .logo-image {
          height: 50px;
          width: auto;
          border: 0;
          margin: 0;
          padding: 0;
        }

        .navbar-logo h1 {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #ffffff;
          text-shadow: none;
          transition: text-shadow 0.3s ease;
          margin: 0;
          padding: 0;
          border: 0;
        }

        .navbar-logo h1:hover {
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .navbar-logo .highlight {
          color: #ffffff;
        }

        .navbar-links-container {
          display: flex;
          align-items: center;
          gap: 40px;
          margin: 0;
          padding: 0;
          border: 0;
        }

        .navbar-menu {
          list-style: none;
          display: flex;
          gap: 40px;
          margin: 0;
          padding: 0;
          border: 0;
        }

        .navbar-menu li {
          margin: 0;
          padding: 0;
          border: 0;
        }

        .navbar-menu a {
          text-decoration: none;
          color: #ffffff;
          font-weight: 600;
          font-size: 1.05rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0 0 5px 0;
          cursor: pointer;
          display: block;
          margin: 0;
          border: 0;
        }
        
        .navbar-menu a::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: #f5931c;
          bottom: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease-out;
        }

        .navbar-menu a:hover {
          color: #f5931c;
        }

        .navbar-menu a:hover::after {
          transform: scaleX(1);
        }

        .navbar-button {
          background-color: #f5931c;
          color: #223165;
          border: none;
          padding: 10px 20px;
          margin: 0;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .navbar-button:hover {
          background-color: #f8bb28;
          color: #000000;
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(245, 147, 28, 0.6); 
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-wrap: wrap; 
            padding: 16px 24px;
          }
          
          .navbar-logo {
            width: 100%;
          }

          .navbar-links-container {
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .navbar-links-container.open {
            max-height: 500px;
            padding-top: 24px;
          }

          .navbar-menu {
            flex-direction: column;
            gap: 24px;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          
          .navbar-menu a {
            font-size: 1.2rem;
          }

          .navbar-button {
            align-self: flex-start;
            margin-top: 24px;
          }

          .navbar-decoration {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;  