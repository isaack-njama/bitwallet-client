import BackButton from './BackButton';
import ItemList from './ItemList';
import ToggleButton from './ToggleButton';
import './ResponsibilityDisclaimer.css';
import { IonLabel } from '@ionic/react';

interface ContainerProps {
  title: string;
  subtitle?: string;
  address: string;
}

const FundingAddress: React.FC<ContainerProps> = ({
  title,
  subtitle,
  address,
}) => {
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
          <img src='/QR Code.svg' width='250px' />
          <h4 style={{ color: '#0A0A0A' }}>{address}</h4>
        </>
      </div>
    </div>
  );
};

export default FundingAddress;
