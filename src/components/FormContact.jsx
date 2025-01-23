import React, { useState } from 'react';

function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    // Remettre les champs à zéro après soumission (facultatif)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mt-5">
        <form onSubmit={handleSubmit}>
        {/* Champ Nom */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>

        {/* Champ Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>

        {/* Champ Numéro de Téléphone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Numéro de Téléphone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>

        {/* Champ Sujet */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Sujet</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet de votre message"
            required
          />
        </div>

        {/* Champ Message */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Votre message"
            required
          />
        </div>

        {/* Bouton Soumettre */}
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>

      {/* Message de confirmation après soumission */}
      {submitted && (
        <div className="alert alert-success mt-3">
          Merci pour votre message ! Nous vous répondrons bientôt.
        </div>
      )}
    </div>
  );
}

export default FormContact;