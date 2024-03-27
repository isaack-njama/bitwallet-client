import Button from '../components/Button';
import TransactionList from '../components/TransactionList';

const TransactionDetails = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        overflowY: 'hidden',
      }}
    >
      <TransactionList
        placeholder='50,000 sats'
        fiatAmount='0 KES'
        fee='3 sats'
      />
      <Button text='Send payment' />
    </div>
  );
};

export default TransactionDetails;
