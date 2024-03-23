import { IonContent, IonPage } from '@ionic/react';

import Button from '../components/Button';
import FundWallet from '../components/FundWallet';

const FundWalletPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <FundWallet
          title='Fund your wallet'
          subtitle='Deposit or buy bitcoin to get started.'
        />
      </IonContent>
      <Button text='Do this later' target='/transactions' />
    </IonPage>
  );
};

export default FundWalletPage;
