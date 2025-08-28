import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SidebarMenu.css";

export default function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);


    return (
        <>
            <nav className="navbar navbar-dark fixed-top shadow-sm"
                style={{
                    background: "linear-gradient(90deg, #4b6cb7, #182848)",
                    paddingTop: "0.4rem",
                    paddingBottom: "0.4rem"
                }}>
                <div className="container d-flex justify-content-between align-items-center" style={{ padding: "1rem" }}>
                    <NavLink className="navbar-brand" to="/"
                        style={{
                            fontSize: "2rem",
                            marginLeft: "1.5rem",
                            cursor: "default"
                        }}>Δημήτρης</NavLink>

                    <ul className="navbar-nav d-none d-md-flex flex-row">
                        {["/", "/about", "/services", "/contact"].map((path, i) => {
                            const label = ["Αρχική", "Σχετικά", "Υπηρεσίες", "Επικοινωνία"][i];
                            return (
                                <li className="nav-item px-2" key={path}>
                                    <NavLink 
                                        to={path} 
                                        className="nav-link">
                                        {label}
                                    </NavLink>
                                </li>
                            )
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
                    {["/", "/about", "/services", "/contact"].map((path, i) => {
                        const label = ["Αρχική", "Σχετικά", "Υπηρεσίες", "Επικοινωνία"][i];
                        const icon = ["bi-house-door-fill", "bi-person-fill", "bi-briefcase-fill", "bi-envelope-fill"][i];
                        return (
                            <li key={path}>
                                <NavLink 
                                    to={path} 
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <i className={`bi ${icon} me-1`}></i>{label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`} onClick={() => setSidebarOpen(false)}></div>
        </>

    );
}
