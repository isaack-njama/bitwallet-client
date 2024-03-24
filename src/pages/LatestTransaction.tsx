import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import PageHeader from '../components/Header';

import './LatestTransaction.css';

const LatestTransaction = () => {
  return (
    <IonContent fullscreen>
      <>
        <div style={{ display: 'flex', gap: '60px', margin: '60px' }}>
          <img
            src='/Button.svg'
            style={{ margin: 'auto', cursor: 'pointer' }}
          />
          <img
            src='/Button (1).svg'
            style={{ margin: 'auto', cursor: 'pointer' }}
          />
        </div>
        <PageHeader
          pageTitle='Your balance'
          pageSubtitle='50,000 sats'
          icon={<img src='/Visible.svg' />}
        />
        <IonCard>
          <IonCardContent
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '335px',
              maxHeight: '72px',
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            <img src='/Circle arrow up.svg' />
            <IonLabel style={{ fontSize: '18px' }}>
              Review your security settings to best protect your funds.
            </IonLabel>
            <img
              src='/chevron-forward-outline.svg'
              style={{ width: '30px', height: '30px' }}
            />
          </IonCardContent>
        </IonCard>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '24px',
          }}
        >
          <IonLabel style={{ fontWeight: 'bold' }}>
            Latest transactions
          </IonLabel>
        </div>
        <IonCard>
          <IonCardContent
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'space-between',
            }}
          >
            <img src='/Item left accessory.svg' />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '335px',
                maxHeight: '76px',
              }}
            >
              <h4 style={{ fontSize: '18px' }}>bc1q gx9g ... sfsy</h4>
              <h6>2 min ago</h6>
            </div>
            <h4 style={{ color: '#27AE60' }}>+50,000 sats</h4>
          </IonCardContent>
        </IonCard>
      </>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: '240px',
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
          cursor: 'pointer',
        }}
      >
        <IonToolbar>
          <a href='/send' style={{ textDecoration: 'none', color: '#0A0A0A' }}>
            <img src='/Flip vertical.svg' style={{ marginLeft: '18px' }} />
            <IonTitle style={{ fontSize: '12px' }}>Send</IonTitle>
          </a>
        </IonToolbar>
        <IonToolbar>
          <a
            href='/balance'
            style={{ textDecoration: 'none', color: '#0A0A0A' }}
          >
            <img src='/Transactions.svg' style={{ marginLeft: '28px' }} />
            <IonTitle style={{ fontSize: '12px' }}>Balance</IonTitle>
          </a>
        </IonToolbar>
        <IonToolbar>
          <a
            href='/settings'
            style={{ textDecoration: 'none', color: '#0A0A0A' }}
          >
            <img src='/Gear.svg' style={{ marginLeft: '28px' }} />
            <IonTitle style={{ fontSize: '12px' }}>Settings</IonTitle>
          </a>
        </IonToolbar>
      </div>
    </IonContent>
  );
};

export default LatestTransaction;
