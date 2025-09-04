import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SidebarMenu.css";

export default function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navigate = useNavigate();
    const location = useLocation();

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
    }, [links]);

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
                        onClick={(e) => {
                            e.preventDefault();
                            if (location.pathname !== "/") {
                                // πήγαινε στην αρχική και κάνε scroll στο home
                                navigate("/", { state: { scrollTo: "home" } });
                            } else {
                                // είμαστε ήδη στο home -> κάνε smooth scroll
                                const section = document.getElementById("home");
                                if (section) section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
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
                        {links.map(({ href, label }) => {
                            const id = href.replace("#", "");
                            return (
                                <li className="nav-item px-2" key={href}>
                                    <a
                                        href={"#" + id}
                                        className={`nav-link ${activeSection === id ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault();

                                            if (location.pathname !== "/") {
                                                // Πηγαίνουμε στο home πρώτα
                                                navigate("/", { state: { scrollTo: id } });
                                            } else {
                                                // Είμαστε ήδη στο home, κάνουμε smooth scroll
                                                const section = document.getElementById(id);
                                                if (section) section.scrollIntoView({ behavior: "smooth" });
                                            }

                                        }}

                                    >
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
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
                    {links.map(({ href, label, icon }) => {
                        const id = href.replace("#", "");
                        return (
                            <li key={href}>
                                <a
                                    href={"#" + id}
                                    className={`nav-link ${activeSection === id ? "active" : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (location.pathname !== "/") {
                                            // Πηγαίνουμε στο home και περνάμε το section για scroll
                                            navigate("/", { state: { scrollTo: id } });
                                        } else {
                                            // Είμαστε ήδη στο home, κάνουμε smooth scroll
                                            const section = document.getElementById(id);
                                            if (section) section.scrollIntoView({ behavior: "smooth" });
                                        }
                                        setSidebarOpen(false); // κλείνει sidebar
                                    }}
                                >
                                    <i className={`bi ${icon} me-1`}></i>{label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

            </div>
            <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
                onClick={() => setSidebarOpen(false)}>
            </div>
        </>

    );
}
