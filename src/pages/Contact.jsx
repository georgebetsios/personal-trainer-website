import React, { useEffect, useRef, useState } from "react";
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
    <div className="d-flex justify-content-center" style={{
      padding:0
    }}>
      <div
        className={`contact-section text-center ${visible ? "visible" : ""}`}
        ref={contactRef}
      >
        <h2 className="mb-3">Επικοινωνία</h2>
        <p>Συμπλήρωσε τη φόρμα για να κλείσεις ραντεβού:</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6fHX8KBFBOaf5pM9JmG2i7McY4zhMf2kkHc7uS7bznfECzA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Άνοιγμα Φόρμας
        </a>
      </div>
    </div>

  );
}

