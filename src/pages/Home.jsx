import React from "react";
import "../styles/Home.css"

export default function Home() {
    return (
        <div className="home-section">
            <div
                className="home-container"
            >
                <h1 className="fw-bold mb-4 home-text ">
                    Γεια! Είμαι ο Δημήτρης, Personal Trainer
                </h1>

                <p className="mt-5 mb-4 home-text">
                    Προπόνηση με στόχο, σαφές πλάνο και αποτελέσματα που φαίνονται τόσο στο σώμα σου όσο και στην καθημερινότητά σου.
                </p>

                <ul className="home-list home-text">
                    <li>Εξειδικευμένα προγράμματα μυϊκής υπερτροφίας</li>
                    <li>Μυϊκή ενδυνάμωση</li>
                    <li>Στοχευμένη απώλεια λίπους με ασφαλή και αποτελεσματικό τρόπο</li>
                    <li>Βελτίωση κινητικότητας & ευλυγισίας (mobility – flexibility)</li>
                    <li>Εξατομικευμένη καθοδήγηση ανάλογα με τον στόχο και το επίπεδό σου</li>
                    <li>Ισορροπημένα προγράμματα για ενέργεια, απόδοση και ευεξία</li>
                </ul>

                <p className="home-text mt-4">
                    Θέτουμε στόχους που ταιριάζουν στο σώμα σου, στον χρόνο σου και στον τρόπο ζωής σου.
                    Κάθε προπόνηση έχει σκοπό να σε φέρει πιο κοντά στα αποτελέσματα που θέλεις –
                    σταδιακά, με συνέπεια και χωρίς υπερβολές.
                </p>

                <p className="fw-bold home-text last-motiv">
                    Η επιτυχία δεν είναι τυχαία, είναι μεθοδική.<br />
                </p>

                <p className="home-text motivate">
                    Trust the process.
                </p>


                <div className="home-text mt-4">
                    <a href="#contact" className="contact-btn">
                        Επικοινώνησε μαζί μου
                    </a>
                </div>


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
