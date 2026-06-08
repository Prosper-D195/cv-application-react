import React, { useState } from 'react';

function Education() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [educationData, setEducationData] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateStart: '',
    dateEnd: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData({
      ...educationData,
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
      <div className="education-display" style={{ marginTop: '30px' }}>
        <h2>Parcours Scolaire & Formations</h2>
        <div className="info-content">
          <p><strong>Établissement / École :</strong> {educationData.schoolName}</p>
          <p><strong>Intitulé du diplôme / Formation :</strong> {educationData.titleOfStudy}</p>
          <p><strong>Période :</strong> Du {educationData.dateStart} au {educationData.dateEnd}</p>
        </div>
        <button className="btn-edit" onClick={handleEdit}>Modifier</button>
      </div>
    );
  }

  return (
    <div className="education-form-container" style={{ marginTop: '30px' }}>
      <h2>Parcours Scolaire & Formations</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="schoolName">Nom de l'établissement</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={educationData.schoolName}
            onChange={handleChange}
            placeholder="Ex: Centre de Formation Pratique en Élevage"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="titleOfStudy">Intitulé du diplôme ou de la formation</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={educationData.titleOfStudy}
            onChange={handleChange}
            placeholder="Ex: CAP en Agriculture ou BTS Agronomie"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateStart">Date de début</label>
          <input
            type="date"
            id="dateStart"
            name="dateStart"
            value={educationData.dateStart}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateEnd">Date de fin (ou prévue)</label>
          <input
            type="date"
            id="dateEnd"
            name="dateEnd"
            value={educationData.dateEnd}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Education;