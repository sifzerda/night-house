import '../App.css';
import { useState } from 'react';

function ContactForm() {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "708713b1-69b5-418e-90fc-b7a87b692e53");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setResult("There was an error submitting your message");
    }
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="confirmation-message">
          <p>Thank you for your message!</p>
        </div>
      ) : (
        <div>
          {result === "Form Submitted Successfully" ? (
            <div className="success-message">
              <p>{result}</p>
            </div>
          ) : result === "Sending...." ? (
            <div className="sending-message">
              <p>{result}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="wider-form">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name or contact reference..."
                  id="name"
                  name="name"
                  className="contact-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email address..."
                  id="email"
                  name="email"
                  className="contact-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Enter your message here"
                  id="message"
                  name="message"
                  className="contact-form-input"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit Form</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default ContactForm;