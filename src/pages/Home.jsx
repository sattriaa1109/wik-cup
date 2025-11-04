import React from "react";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Welcome to WIKCUP</h2>
        <p>Your gateway to exciting competitions!</p>
        <button className="home-button">Get Started</button>
      </div>

      <style>{`
        .home-section {
          background-color: #223165;
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
        }
        .home-content h2 {
          font-size: 2.5rem;
          color: #f8bb28;
          margin-bottom: 12px;
        }
        .home-content p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .home-button {
          background-color: #f5931c;
          color: #000000;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .home-button:hover {
          background-color: #f8bb28;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

export default Home;
