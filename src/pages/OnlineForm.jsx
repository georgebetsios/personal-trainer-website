import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/OnlineForm.css";

export default function FormPage() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess("Το μήνυμά σας στάλθηκε!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSuccess("Σφάλμα κατά την αποστολή. Προσπαθήστε ξανά.");
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
              type="text"
              name="weight"
              placeholder="Βάρος (kg)"
              required
            />
            <input
              type="text"
              name="height"
              placeholder="Ύψος (m)"
              required
            />
          </div>

          <label>Ηλικία</label>
          <input type="number" name="age" min="10" max="100" />

          <label>
            Πόσους μήνες ηταν το περισσότερο που έκανες συνεχόμενα προπόνηση χωρίς διακοπή (διακοπή απο 7 μερες και άνω)*
          </label>
          <input type="text" name="training_streak" required />

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
          <input type="text" name="budget" />

          <label>Ακολουθείς κάποιο πλάνο διατροφής; *</label>
          <select name="diet_plan" required>
            <option value="">Επίλεξε...</option>
            <option value="Ναι">Ναι</option>
            <option value="Όχι">Όχι</option>
          </select>

          <button type="submit" className="submit-btn">Αποστολή</button>
        </form>

        {success && <p className="success-msg">{success}</p>}
      </div>
    </div>
  );
}
