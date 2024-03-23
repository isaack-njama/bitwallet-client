import { IonContent, IonPage } from '@ionic/react';

import Button from '../components/Button';
import FundingAddress from '../components/FundingAddress';

const FundingAddressPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <FundingAddress
          title='Deposit to this Bitcoin address'
          subtitle='Fees may apply.'
          address='bc1qv8prsqt80e9775llmujwat9yx78tgn6q2x0l3t'
        />
      </IonContent>
      <div style={{ display: 'flex' }}>
        <Button
          text='Share'
          icon={
            <img
              src='/public/share-outline.svg'
              style={{ background: 'red' }}
            />
          }
        />
        <Button text='Copy' />
      </div>
    </IonPage>
  );
};

export default FundingAddressPage;
