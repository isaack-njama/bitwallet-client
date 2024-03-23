import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Welcome from './pages/Welcome';
import Disclaimer from './pages/Disclaimer';
import FundWallet from './pages/FundWalletPage';

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
import FundWalletPage from './pages/FundWalletPage';
import FundingAddressPage from './pages/FundingAddress';
import LatestTransaction from './pages/LatestTransaction';
import Send from './pages/Send';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/send'>
          <Send />
        </Route>
        <Route exact path='/transactions'>
          <LatestTransaction />
        </Route>
        <Route exact path='/funding-address'>
          <FundingAddressPage />
        </Route>
        <Route exact path='/fund-wallet'>
          <FundWalletPage />
        </Route>
        <Route exact path='/welcome'>
          <Welcome />
        </Route>
        <Route exact path='/disclaimer'>
          <Disclaimer />
        </Route>
        <Route exact path='/'>
          <Redirect to='/welcome' />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
