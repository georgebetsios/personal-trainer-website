import React from "react";

export default function Contact() {
    return (
        <div className="container">
            <h2 className="mb-3">Contact</h2>
            <p>Συμπλήρωσε τη φόρμα για να κλείσεις ραντεβού:</p>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf6fHX8KBFBOaf5pM9JmG2i7McY4zhMf2kkHc7uS7bznfECzA/viewform?fbclid=PAVERFWAMb1B5leHRuA2FlbQIxMQABpyBQORvMdBCIEOROdPXQuyCe2CkkpFUJkgJ_91StgEhOWmg8EyGuNU6YKbQW_aem_YPZLvEod3V4QAUsQZ0wOZA"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Google Form"
            >
                Loading…
            </iframe>
        </div>
    );
}
