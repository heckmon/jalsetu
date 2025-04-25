import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import SmartIrrigationGuide from './pages/SmartIrrigationGuide';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonRouterOutlet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/smartig" element={<SmartIrrigationGuide />} />
        </Routes>
      </IonRouterOutlet>
    </Router>
  </IonApp>
);
export default App;