import BackButton from './BackButton';
import ItemList from './ItemList';
import ToggleButton from './ToggleButton';
import './ResponsibilityDisclaimer.css';
import { IonLabel } from '@ionic/react';

interface ContainerProps {
  title: string;
  subtitle?: string;
}

const FundWallet: React.FC<ContainerProps> = ({ title, subtitle }) => {
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
        <ItemList
          label='Receive bitcoin'
          chevronIcon={
            <img
              src='/chevron-forward-outline.svg'
              style={{
                backgroundColor: '#0A0A0A',
                width: '40px',
                background: 'none',
              }}
            ></img>
          }
          target='/funding-address'
        />
      </div>
    </div>
  );
};

export default FundWallet;
