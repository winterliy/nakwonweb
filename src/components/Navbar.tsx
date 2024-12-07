// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-around",
        padding: "1rem",
        backgroundColor: "#333",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "1.2rem",
    },
};

export default Navbar;