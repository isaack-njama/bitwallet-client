import { IonContent, IonPage } from '@ionic/react';

import Button from '../components/Button';
import FundingAddress from '../components/FundingAddress';
import { useEffect, useState } from 'react';

const FundingAddressPage: React.FC = () => {
  const [address, setAddress] = useState<string>('');

  return (
    <IonPage>
      <IonContent fullscreen slot='fixed'>
        <FundingAddress
          title='Deposit to this Bitcoin address'
          subtitle='Fees may apply.'
          address={address || 'No Address to display'}
        />
      </IonContent>
      <div style={{ display: 'flex' }}>
        <Button text='Share' icon={<img src='/public/share-outline.svg' />} />
        <Button text='Copy' />
      </div>
    </IonPage>
  );
};

export default FundingAddressPage;
