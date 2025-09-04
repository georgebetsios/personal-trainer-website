import React, { useEffect, useRef, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonalForm from "./PersonalForm";
import "../styles/Contact.css";

export default function Contact() {
  const contactRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="contact-wrapper">
      <div
        className={`contact-section text-center ${visible ? "visible" : ""}`}
        ref={contactRef}
      >
        <h2 className="mb-4">Επικοινωνία</h2>
        <p>Συμπλήρωσε τη φόρμα για Personal:</p>
        <a
          href="/personal-trainer-website/personal-form"
          className="form-btn mb-4"
        >
          Φόρμα Personal
        </a>
        <p>Συμπλήρωσε τη φόρμα για Online:</p>
        <a
          href="/personal-trainer-website/online-form"
          className="form-btn"
        >
          Φόρμα Online
        </a>
      </div>
    </div>

  );
}

