
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Portail de Recrutement</h1>
        <p>Veuillez remplir votre profil pour postuler au sein de notre exploitation agricole</p>
      </header>
      
      <main className="cv-main">
        <GeneralInfo />
        <Education />
        <Experience /> {/* <-- Dernier composant ajouté */}
      </main>
    </div>
  );
}

export default App;