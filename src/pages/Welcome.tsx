import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import WelcomeContainer from '../components/WelcomeContainer';

import './Pay.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WelcomeContainer
          title='BitWallet'
          subtitle='A simple bitcoin wallet for your enjoyment.'
        />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
