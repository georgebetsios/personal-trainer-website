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
      text: "Προσωπική καθοδήγηση και ασκήσεις προσαρμοσμένες σε εσένα."
    },
    {
      title: "Online Coaching",
      text: "Ασκήσεις και παρακολούθηση μέσω βίντεο και εφαρμογών."
    },
    {
      title: "Συνεργασία με διατροφολόγο",
      text: "Υποστήριξη στη διατροφή για καλύτερα αποτελέσματα."
    }
  ];

  return (
    <div className="services-section-container">
      <h2 className="services-title text-center mb-4 mt-2">Υπηρεσίες</h2>
      <div className="services-section row justify-content-center">
        {services.map((service, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="service-card p-3" ref={el => cardsRef.current[i] = el}>
              <h5>{service.title}</h5>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

