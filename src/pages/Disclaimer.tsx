import { IonContent, IonPage } from '@ionic/react';

import Button from '../components/Button';
import ResponsibilityDisclaimer from '../components/ResponsibilityDisclaimer';

const Disclaimer: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <ResponsibilityDisclaimer title='Two things you must understand' />
      </IonContent>
      <Button text='Next' />
    </IonPage>
  );
};

export default Disclaimer;
