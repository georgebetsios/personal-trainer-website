import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import "../styles/OnlineForm.css";

export default function FormPage() {
  const form = useRef();
  const navigate = useNavigate();
  const [hasProblem, setHasProblem] = useState("");
  const [dietPlan, setDietPlan] = useState("");
  const [dietWilling, setDietWilling] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formElement = form.current;
    const dietValue = dietPlan === "Ναι" ? "Ναι" : dietWilling === "Ναι" ? "Είμαι διατεθειμένος" : "Δεν είμαι διατεθειμένος";

    const healthProblem = formElement.health_problem.value;
    const healthDetails = formElement.health_details?.value || "";

    let hiddenInput = formElement.querySelector('input[name="health_info"]');
    if (!hiddenInput) {
      hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "health_info";
      formElement.appendChild(hiddenInput);
    }

    let hiddenDietInput = form.current.querySelector('input[name="diet_info"]');
    if (!hiddenDietInput) {
      hiddenDietInput = document.createElement("input");
      hiddenDietInput.type = "hidden";
      hiddenDietInput.name = "diet_info";
      form.current.appendChild(hiddenDietInput);
    }

    hiddenInput.value = healthProblem === "Ναι" ? healthDetails : "Όχι";

    hiddenDietInput.value = dietValue;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ONLINE,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        // console.log(result.text);
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
        <h2>Online Form</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <label>Όνομα *</label>
          <input type="text" name="first_name" pattern="[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ\s]+" required />

          <label>Επώνυμο *</label>
          <input type="text" name="last_name" pattern="[A-Za-zΑ-Ωα-ωΆ-Ώά-ώ\s]+" required />

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

          <label>Ηλικία *</label>
          <input type="number" name="age" min="10" max="100" required />

          <label>Έχεις πρόσβαση σε γυμναστήριο; *</label>
          <select name="gym_access" required>
            <option value="">Επίλεξε...</option>
            <option value="Ναι">Ναι</option>
            <option value="Όχι">Όχι</option>
          </select>

          <label>Πόσο χρόνο διαθέτεις για κάθε προπόνηση; *</label>
          <input type="text" name="workout_duration" required placeholder="π.χ. 45 λεπτά" />

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
          <input type="number" name="cardio_per_week" placeholder="π.χ. 2" />

          <label>Πόσες ώρες κοιμάσαι κατά μέσο όρο;</label>
          <input type="number" name="number_of_sleep" placeholder="π.χ. 8" />

          <label>Ποιος είναι ο στόχος σου; *</label>
          <select name="goal" required>
            <option value="">Επίλεξε...</option>
            <option value="Απώλεια βάρους">Απώλεια βάρους</option>
            <option value="Αύξηση μυϊκής μάζας">Αύξηση μυϊκής μάζας</option>
            <option value="Γενική φυσική κατάσταση">Γενική φυσική κατάσταση</option>
            <option value="Αύξηση αντοχής">Αύξηση αντοχής</option>
            <option value="Δύναμη">Δύναμη</option>
            <option value="Επανένταξη μετά από τραυματισμό">Επανένταξη μετά από τραυματισμό</option>
          </select>

          <label>Σε τι χρονικό διάστημα θα ήθελες να τον πετύχεις;</label>
          <input type="text" name="time_goal" placeholder="π.χ 6 μήνες" />

          <label>Έχεις κάποια πάθηση ή τραυματισμό που πρέπει να γνωρίζω; *</label>
          <select
            name="health_problem"
            value={hasProblem}
            onChange={(e) => setHasProblem(e.target.value)}
            required
          >
            <option value="">Επίλεξε...</option>
            <option value="Ναι">Ναι</option>
            <option value="Όχι">Όχι</option>
          </select>

          {hasProblem === "Ναι" && (
            <div>
              <label>Αν ναι τι:</label>
              <textarea name="health_details" rows="3" required />
            </div>
          )}

          <label>Πόσα χρήματα υπολογίζεις να ξοδέψεις μηνιαίως;</label>
          <input type="number" name="budget" />

          <label>Ακολουθείς κάποιο πλάνο διατροφής; *</label>
          <select
            name="diet_plan"
            value={dietPlan}
            onChange={(e) => setDietPlan(e.target.value)}
            required
          >
            <option value="">Επίλεξε...</option>
            <option value="Ναι">Ναι</option>
            <option value="Όχι">Όχι</option>
          </select>

          {dietPlan === "Όχι" && (
            <div>
              <label>Είσαι διατεθειμένος να ακολουθήσεις κάποιο πλάνο διατροφής;</label>
              <select className="select-width"
                name="diet_willing"
                value={dietWilling}
                onChange={(e) => setDietWilling(e.target.value)}
                required
              >
                <option value="">Επίλεξε...</option>
                <option value="Ναι">Ναι</option>
                <option value="Όχι">Όχι</option>
              </select>
            </div>
          )}

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
