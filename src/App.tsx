import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonRouterOutlet>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </IonRouterOutlet>
    </Router>
  </IonApp>
);

export default App;