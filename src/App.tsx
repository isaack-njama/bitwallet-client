import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { arrowUp, cog, list } from 'ionicons/icons';
import Welcome from './pages/Welcome';
import Pay from './pages/Pay';
import Settings from './pages/Settings';
import Balance from './pages/Balance';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs> */}
      <IonRouterOutlet>
        <Route exact path='/welcome'>
          <Welcome />
        </Route>
        <Route exact path='/pay'>
          <Pay />
        </Route>
        <Route exact path='/settings'>
          <Settings />
        </Route>
        <Route path='/balance'>
          <Balance />
        </Route>
        <Route exact path='/'>
          <Redirect to='/welcome' />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
