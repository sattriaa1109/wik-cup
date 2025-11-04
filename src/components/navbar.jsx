import React from "react";

function Navbar() {
    Return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-logo">
            <div className="logo-dot"></div>
            <h1>
            WIK<span className="highlight">CUP</span>
            </h1>
        </div>

        <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#kompetisi">Kompetisi</a></li>
            <li><a href="#peraturan">Peraturan Umum</a></li>
        </ul>

        <button className="navbar-button">Daftar Sekarang</button>
        </div>
    </nav>

    <style>{`
        .navbar {
        background-color: #000000;
        color: #ffffff;
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 60px;
        max-width: 1200px;
        margin: 0 auto;
        }

        .navbar-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        }

        .logo-dot {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #f5931c;
        }

        .navbar-logo h1 {
        font-size: 1.8rem;
        font-weight: 800;
        letter-spacing: 1px;
        color: #f8bb28;
        }

        .navbar-logo .highlight {
        color: #ffffff;
        }

        .navbar-menu {
        list-style: none;
        display: flex;
        gap: 40px;
        }

        .navbar-menu a {
        text-decoration: none;
        color: #ffffff;
        font-weight: 600;
        font-size: 1.05rem;
        transition: color 0.3s ease;
        }

        .navbar-menu a:hover {
        color: #f5931c;
        }

        .navbar-button {
        background-color: #f5931c;
        color: #223165;
        border: none;
        padding: 10px 20px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        }

        .navbar-button:hover {
        background-color: #f8bb28;
        color: #000000;
        transform: scale(1.05);
        }

        @media (max-width: 768px) {
        .navbar-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 16px 24px;
        }

        .navbar-menu {
            flex-direction: column;
            gap: 16px;
            width: 100%;
        }

        .navbar-button {
            align-self: flex-start;
        }
        }
    `}</style>
    </>
);
}

export default Navbar;
