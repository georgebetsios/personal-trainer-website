import React, { useState, useEffect } from "react";
import "./SidebarMenu.css";

export default function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { href: "#home", label: "Αρχική", icon: "bi-house-door-fill" },
        { href: "#about", label: "Σχετικά", icon: "bi-person-fill" },
        { href: "#services", label: "Υπηρεσίες", icon: "bi-briefcase-fill" },
        { href: "#contact", label: "Επικοινωνία", icon: "bi-envelope-fill" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; 
            links.forEach(({ href }) => {
                const id = href.replace("#", "");
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar navbar-dark fixed-top"
                style={{
                    backgroundColor: "#030303ff",
                    background: "linear-gradient(90deg, #0b0b0bff, #1d1f22ff)",
                    boxShadow: "0 0 5px rgba(146, 146, 146, 0.33)",
                    paddingTop: "0.4rem",
                    paddingBottom: "0.4rem"
                }}>
                <div className="container-fluid d-flex justify-content-between align-items-center" style={{ padding: "1rem" }}>
                    <a className="navbar-brand" href="#home"
                        style={{
                            fontSize: "2rem",
                            marginLeft: "1.5rem",
                            cursor: "pointer",
                            padding: "0 0 10px"
                        }}><img
                            src="./Personal_Trainer(2).png"          
                            alt="Logo"
                            style={{ 
                                height: "35px"

                            }} 
                        /></a>

                    <ul className="navbar-nav d-none d-md-flex flex-row">
                        {links.map(({ href, label }) => (
                            <li className="nav-item px-2" key={href}>
                                <a href={href} className={`nav-link ${activeSection === href.replace("#", "") ? "active" : ""}`}>{label}</a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="navbar-toggler d-md-none"
                        type="button"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>

            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>

                <ul className="sidebar-links">
                    {links.map(({ href, label, icon }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={`nav-link ${activeSection === href.replace("#", "") ? "active" : ""}`}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <i className={`bi ${icon} me-1`}></i>{label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
                onClick={() => setSidebarOpen(false)}>
            </div>
        </>

    );
}
