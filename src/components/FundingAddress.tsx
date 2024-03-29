import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

import BackButton from './BackButton';
import { IonLabel } from '@ionic/react';

interface ContainerProps {
  title: string;
  subtitle?: string;
  address: string;
}

const FundingAddress: React.FC<ContainerProps> = ({ title, subtitle }) => {
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAddress = async () => {
      let body = {
        phrase:
          'screen always funny riot garment emerge canvas insane chuckle ice decade cigar',
      };

      try {
        const response = await fetch(
          'http://localhost:8080/api/get_wallet_address',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          },
        );
        const data = await response.json();
        console.log('JSON data: ', data);
        setAddress(data.address);
      } catch (error) {
        console.error('Error fetching wallet address: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAddress();
  }, []);

  return (
    <div className='disclaimer-container'>
      <div className='disclaimer'>
        <BackButton text='Back' target='/disclaimer' />
        <img src='/Fund wallet.svg' width='80px' height='80px' />
        <IonLabel
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#0A0A0A',
          }}
        >
          {title}
        </IonLabel>
        <IonLabel style={{ fontSize: '18px', color: '#777777' }}>
          {subtitle}
        </IonLabel>
        <>
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              width: '250px',
            }}
          >
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={address}
              viewBox={`0 0 256 256`}
            />
          </div>
          <h4 style={{ color: '#0A0A0A' }}>{address}</h4>
        </>
      </div>
    </div>
  );
};

export default FundingAddress;
