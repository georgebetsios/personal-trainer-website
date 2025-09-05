import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "../styles/OnlineForm.css";

export default function FormPage() {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        setLoading(false);

        if (location.pathname !== "/") {
          navigate("/", { state: { scrollTo: "home" } });
        } else {
          const section = document.getElementById("home");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }
      },
      (error) => {
        console.log(error.text);
        setError("Σφάλμα κατά την αποστολή. Προσπαθήστε ξανά.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="form-page-background">
      <div className="form-page-container">
        <h2>Φόρμα για Online</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="hidden" name="form_type" value="Online" />

          <label>Ονοματεπώνυμο *</label>
          <input type="text" name="full_name" pattern="[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ\s]+" required />

          <label>Instagram</label>
          <input type="text" name="instagram" />

          <label>Τηλέφωνο *</label>
          <input type="tel" name="phone" required />

          <label>Email *</label>
          <input type="email" name="email" required />

          <label>Βάρος / Ύψος *</label>
          <div className="weight-height-container">
            <input
              type="number"
              name="weight"
              placeholder="Βάρος (kg)"
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Ύψος (m)"
              step="0.01"
              required
            />
          </div>

          <label>Ηλικία</label>
          <input type="number" name="age" min="10" max="100" />

          <label>
            Πόσους μήνες ηταν το περισσότερο που έκανες συνεχόμενα προπόνηση χωρίς διακοπή (διακοπή απο 7 μερες και άνω)*
          </label>
          <input type="text" name="training_streak" required placeholder="π.χ. 5" />

          <label>Πόσες φορές την εβδομάδα κάνεις προπόνηση με βάρη;</label>
          <select name="weights_per_week">
            <option value="">Επίλεξε...</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label>Πόσες φορές κάνεις αερόβιο την εβδομάδα;</label>
          <input type="text" name="cardio_per_week" placeholder="π.χ. 2" />

          <label>Ποιος είναι ο στόχος σου;</label>
          <textarea name="goal" rows="3" />

          <label>Πόσα χρήματα υπολογίζεις να ξοδέψεις μηνιαίως;</label>
          <input type="number" name="budget" />

          <label>Ακολουθείς κάποιο πλάνο διατροφής; *</label>
          <select name="diet_plan" required>
            <option value="">Επίλεξε...</option>
            <option value="Ναι">Ναι</option>
            <option value="Όχι">Όχι</option>
          </select>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <div className="loader"></div> : 'Αποστολή'}
          </button>
          <button className="exit-btn"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {

                navigate("/", { state: { scrollTo: "contact" } });
              } else {

                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }
            }}>Έξοδος</button>
        </form>

        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
}
