import { IonContent, IonPage } from '@ionic/react';
import PageHeader from '../components/Header';
import Button from '../components/Button';
import ItemList from '../components/ItemList';

const Disclaimer: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PageHeader
            pageTitle='Deposit bitcoin to this address'
            pageSubtitle='Fees may apply.'
          />
        </div>
      </IonContent>
      <>
        <Button text='Share' />
        <Button text='Copy' />
      </>
    </IonPage>
  );
};

export default Disclaimer;
