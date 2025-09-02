import React, { useEffect, useRef } from "react";
import "../styles/About.css";

export default function About() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const aboutCards = [
    {
      title: "Σπουδές",
      text: "Έχω αποφοιτήσει από το Τμήμα Επιστήμης Φυσικής Αγωγής & Αθλητισμού του Αριστοτελείου Πανεπιστημίου."
    },
    {
      title: "Σεμινάρια",
      text: "Έχω ολοκληρώσει τα σεμινάρια Personal Training Level 1 και Level 2 από την BODYfit Academy στη Θεσσαλονίκη, τα οποία με έχουν προετοιμάσει να παρέχω υψηλής ποιότητας υπηρεσίες προπόνησης."
    }
  ];

  return (
    <div className="about-section-container">
      <h2 className="about-title text-center mb-4 mt-4">Σxετικά με εμένα</h2>
      <div className="about-section">
        {aboutCards.map((card, i) => (
          <div className="about-card" key={i} ref={el => cardsRef.current[i] = el}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="home-image-container">
        <img
          src="./photo-profil.jpg"
          alt="Δημήτρης - Personal Trainer"
          className="home-image"
        />
      </div>
    </div>
  );
}


