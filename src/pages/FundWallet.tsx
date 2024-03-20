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
          <img
            src='/Fund wallet.svg'
            width='60px'
            height='60px'
            alt='Fund Wallet'
          />
          <PageHeader
            pageTitle='Fund your wallet'
            pageSubtitle='Deposit or buy bitcoin to get started'
          />
        </div>
        <ItemList label='Receive bitcoin' />
        <img
          src='/public/chevron-forward-outline.svg'
          width='30px'
          height='30px'
          alt='Chevron Forward'
        />
      </IonContent>
      <Button text='Next' />
    </IonPage>
  );
};

export default Disclaimer;
