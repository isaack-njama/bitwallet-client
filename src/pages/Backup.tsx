import { IonContent, IonPage } from '@ionic/react';

import Button from '../components/Button';
import ResponsibilityDisclaimer from '../components/ResponsibilityDisclaimer';

const Backup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <img src='/backup.svg' />
        <ResponsibilityDisclaimer title='Two things you must understand' />
      </IonContent>
      <Button text='Do this later' />
    </IonPage>
  );
};

export default Backup;
