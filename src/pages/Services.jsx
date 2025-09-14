import React, { useEffect, useRef } from "react";
import "../styles/Services.css";

export default function Services() {
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

  const services = [
    {
      title: "Personal Training",
      text: "Προσωπική καθοδήγηση με ασκήσεις πλήρως προσαρμοσμένες στο σώμα σου και στο επίπεδό σου."
    },
    {
      title: "Online Coaching",
      text: "Πρόγραμμα άσκησης προσαρμοσμένο στο επίπεδο και τους στόχους σας, με σαφείς οδηγίες και παρακολούθηση της προόδου σου."
    },
    {
      title: "Συνεργασία με διατροφολόγο",
      text: "Ολοκληρωμένη υποστήριξη στη διατροφή σου για ενίσχυση της απόδοσης στην προπόνηση και στην καθημερινότητά."
    }
  ];

  return (
    <div className="services-section-container">
      <h2 className="services-title text-center mb-4 mt-4">
        <span className="underline"></span>
        <span className="title">Υπηρεσίες</span>
        <span className="underline"></span>
      </h2>
      <div className="services-section">
        {services.map((service, i) => (
          <div
            className="service-card p-3"
            key={i}
            ref={el => cardsRef.current[i] = el}
          >
            <h5>{service.title}</h5>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

