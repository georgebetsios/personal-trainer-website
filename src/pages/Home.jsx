import React from "react";
import "../styles/Home.css"

export default function Home() {
    return (
        <div
            className="container text-center py-3 mt-4 home-section"
            style={{
                color: "white",
                position: "relative"
            }}
        >
            <h1 className="display-4 fw-bold mb-3 home-text" style={{ animationDelay: "0.2s" }}>
                Γεια! Είμαι ο Δημήτρης, Personal Trainer
            </h1>
            <p className="lead mb-2 home-text" style={{ animationDelay: "0.4s" }}>
                Μετατρέπω στόχους σε αποτελέσματα!
            </p>
            <p className="mb-4 fst-italic home-text" style={{ animationDelay: "0.6s" }}>
                Δύναμη, Υγεία, Ενέργεια – Μαζί θα τα καταφέρουμε!
            </p>
            <div className="home-text" style={{ animationDelay: "0.8s" }}>
                <a
                    href="/contact"
                    className="contact-btn"
                    style={{ fontWeight: "600" }}
                >
                    Κλείστε συνεδρία
                </a>
            </div>
            <p className="mt-4 home-text" style={{ animationDelay: "1s" }}>
                Με χρόνια εμπειρίας στον αθλητισμό και τη διατροφή, βοηθάω ανθρώπους να πετύχουν τους στόχους τους.
            </p>
            <p className="home-text" style={{ animationDelay: "1.2s" }}>
                Προσωπικές προπονήσεις, online coaching και προγράμματα διατροφής για κάθε επίπεδο.
            </p>

            <div className="d-flex justify-content-center mt-4 home-image">
                <img
                    src="/user.png"
                    alt="Δημήτρης - Personal Trainer"
                    className="img-fluid rounded-circle shadow-lg home-image"
                    style={{ maxHeight: "400px", width: "50%", objectFit: "cover" }}
                />
            </div>
        </div>

    );
}
