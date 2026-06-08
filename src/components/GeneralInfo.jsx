import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
  // 1. État pour savoir si les données sont soumises ou non
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. État pour stocker les informations saisies
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  // 3. Fonction pour mettre à jour l'état à chaque saisie dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Met à jour dynamiquement la bonne propriété (fullName, email ou phone)
    });
  };

  // 4. Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitted(true); // Bascule en mode affichage
  };

  // 5. Fonction appelée pour retourner à l'édition
  const handleEdit = () => {
    setIsSubmitted(false); // Bascule en mode formulaire
  };

  // --- RENDU DYNAMIQUE ---
  
  // Si le formulaire est soumis, on affiche les données textuelles et le bouton "Modifier"
  if (isSubmitted) {
    return (
      <div className="general-info-display">
        <h2>Informations Générales</h2>
        <div className="info-content">
          <p><strong>Nom complet :</strong> {formData.fullName}</p>
          <p><strong>Adresse e-mail :</strong> {formData.email}</p>
          <p><strong>Téléphone :</strong> {formData.phone}</p>
        </div>
        <button className="btn-edit" onClick={handleEdit}>Modifier</button>
      </div>
    );
  }

  // Sinon, on affiche le formulaire de saisie standard
  return (
    <div className="general-info-form-container">
      <h2>Informations Générales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nom complet</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Soumettre</button>
      </form>
    </div>
  );
}

export default GeneralInfo;