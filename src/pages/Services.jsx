import React from "react";

export default function Services() {
  return (
    <div className="container">
      <h2 className="mb-3">Services</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Personal Training</h5>
            <p>Προσωπική καθοδήγηση και ασκήσεις προσαρμοσμένες σε εσένα.</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Nutrition Advice</h5>
            <p>Διατροφικά πλάνα για απώλεια βάρους ή αύξηση μυϊκής μάζας.</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Online Coaching</h5>
            <p>Ασκήσεις και παρακολούθηση μέσω βίντεο και εφαρμογών.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
