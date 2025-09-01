import React from "react";
import "../styles/Home.css"

export default function Home() {
    return (
        <div className="home-section">
            <div
                className="home-container"
            >
                <h1 className="fw-bold mb-4 home-text">
                    Γεια! Είμαι ο Δημήτρης, Personal Trainer
                </h1>
                <p className="lead mb-4 home-text">
                    Μαζί μετατρέπουμε τους στόχους σας σε αποτελέσματα!
                </p>
                <p className="mb-4 home-text">
                    Δύναμη, Υγεία, Ενέργεια – σε κάθε σας βήμα!
                </p>
                <div className="home-text ">
                    <a
                        href="#contact"
                        className="contact-btn"
                    >
                        Επικοινωνήστε μαζί μου
                    </a>
                </div>
                <p className="mb-5 mt-4 home-text">
                    Με πολυετή εμπειρία στον αθλητισμό, βοηθάω ανθρώπους να βελτιώσουν τη φυσική τους κατάσταση,
                    να ενισχύσουν την αυτοπεποίθησή τους και να κάνουν την αλλαγή που ονειρεύονται.
                </p>
                <p className="home-text">
                    Προσφέρω <strong>προσωπικές προπονήσεις</strong> και <strong>online coaching</strong>.
                    Επιπλέον, υπάρχει συνεργασία με διατροφολόγο για όσους θέλουν
                    υποστήριξη και στη διατροφή τους.
                </p>

                {/* <div className="d-flex justify-content-center mt-4 home-image home-text">
                    <img
                        src="./user.png"
                        alt="Δημήτρης - Personal Trainer"
                        className="img-fluid rounded-circle shadow-lg home-image"
                        style={{ maxHeight: "400px", width: "50%", objectFit: "cover" }}
                    />
                </div> */}
            </div>
        </div>


    );
}
