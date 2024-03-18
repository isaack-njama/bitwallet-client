import BackButton from './BackButton';
import ItemList from './ItemList';
import ToggleButton from './ToggleButton';
import './ResponsibilityDisclaimer.css';
import { IonLabel } from '@ionic/react';

interface ContainerProps {
  title: string;
}

const ResponsibilityDisclaimer: React.FC<ContainerProps> = ({ title }) => {
  return (
    <div className='disclaimer-container'>
      <div className='disclaimer'>
        <BackButton text='Back' />
        <img src='/circle_arrow up.svg' width='80px' height='80px' />
        <IonLabel
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            width: '45%',
            color: '#0A0A0A',
          }}
        >
          {title}
        </IonLabel>
        <ItemList
          label='With bitcoin, you are your own bank. No one else has access to your private keys.'
          chevronIcon={<ToggleButton />}
        />
        <ItemList
          label='If you lose access to this app, and the backup we will help you create, your bitcoin cannot be recovered.'
          chevronIcon={<ToggleButton />}
        />
      </div>
    </div>
  );
};

export default ResponsibilityDisclaimer;
