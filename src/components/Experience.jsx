import React, { useState } from 'react';

function Experience() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [experienceData, setExperienceData] = useState({
    companyName: '',
    jobTitle: '',
    responsibilities: '',
    dateStart: '',
    dateEnd: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData({
      ...experienceData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  // --- RENDU DYNAMIQUE ---
  
  if (isSubmitted) {
    return (
      <div className="experience-display" style={{ marginTop: '30px' }}>
        <h2>Expérience Pratique & Terrain</h2>
        <div className="info-content">
          <p><strong>Entreprise / Exploitation :</strong> {experienceData.companyName}</p>
          <p><strong>Poste occupé :</strong> {experienceData.jobTitle}</p>
          <p><strong>Missions & Responsabilités :</strong></p>
          <p style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #2e7d32' }}>
            {experienceData.responsibilities}
          </p>
          <p style={{ marginTop: '10px' }}><strong>Période :</strong> Du {experienceData.dateStart} au {experienceData.dateEnd}</p>
        </div>
        <button className="btn-edit" onClick={handleEdit}>Modifier</button>
      </div>
    );
  }

  return (
    <div className="experience-form-container" style={{ marginTop: '30px' }}>
      <h2>Expérience Pratique & Terrain</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Nom de l'entreprise ou exploitation</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={experienceData.companyName}
            onChange={handleChange}
            placeholder="Ex: Ferme Avicole de Thiès ou Exploitation Maraîchère"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Intitulé du poste</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={experienceData.jobTitle}
            onChange={handleChange}
            placeholder="Ex: Ouvrier agricole, Technicien d'élevage"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="responsibilities">Principales responsabilités et tâches effectuées</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            value={experienceData.responsibilities}
            onChange={handleChange}
            placeholder="Ex: Suivi de l'irrigation des vergers, distribution des rations alimentaires pour le bétail, gestion des stocks de semences..."
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateStart">Date de début</label>
          <input
            type="date"
            id="dateStart"
            name="dateStart"
            value={experienceData.dateStart}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateEnd">Date de fin</label>
          <input
            type="date"
            id="dateEnd"
            name="dateEnd"
            value={experienceData.dateEnd}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Experience;