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
      text: "Απόφοιτος ΤΕΦΑΑ με ειδίκευση στο personal training και το functional bodybuilding. Έχω παρακολουθήσει πληθώρα σεμιναρίων που καλύπτουν διάφορες πτυχές του fitness, όπως strength & conditioning, sleep coaching, advanced hypertrophy techniques, καθώς και σεμινάρια για προπόνηση σε ειδικούς πληθυσμούς. Εξελίσσομαι συνεχώς και παραμένω ενημερωμένος για τις νέες τάσεις και μεθόδους σε έναν χώρο που αλλάζει διαρκώς, ώστε να μπορώ να προσφέρω πάντα σύγχρονη και ολοκληρωμένη καθοδήγηση σε όσους συνεργάζομαι."
    }
  ];

  return (
    <div className="about-section-container">
      <h2 className="about-title text-center mb-4 mt-4">
        <span className="underline-1"></span>
        <span className="title">Σxετικά με εμένα</span>
        <span className="underline-2"></span>
      </h2>
      <div className="about-section">
        {aboutCards.map((card, i) => (
          <div className="about-card" key={i} ref={el => cardsRef.current[i] = el}>
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


