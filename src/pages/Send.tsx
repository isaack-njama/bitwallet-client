import Button from '../components/Button';
import KeyboardInput from '../components/KeyboardInput';
import TabBar from '../components/TabBar';

const Send = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <KeyboardInput placeholder='0 sats' />
      <div
        style={{ position: 'fixed', bottom: 0, display: 'flex', gap: '6px' }}
      >
        <Button text='Send' target='/transaction-details' />
      </div>
    </div>
  );
};

export default Send;
