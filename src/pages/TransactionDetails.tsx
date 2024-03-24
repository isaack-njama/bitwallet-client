import Button from '../components/Button';
import PageHeader from '../components/Header';
import ItemList from '../components/ItemList';
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
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src='/public/Tx details.svg' width='60px' height='60px' />
        <PageHeader pageTitle='Send bitcoin' />
      </div>
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
