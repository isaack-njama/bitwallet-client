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
          <img src='/Button.svg' style={{ margin: 'auto' }} />
          <img src='/Button (1).svg' style={{ margin: 'auto' }} />
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
            Review your security settings to best protect your funds.
            <img
              src='/chevron-forward-outline.svg'
              style={{ width: '30px', height: '30px' }}
            />
          </IonCardContent>
        </IonCard>
        <IonList style={{ background: 'none' }}>
          <IonListHeader>
            <IonLabel style={{ margin: '60px', fontWeight: 'bold' }}>
              Latest transactions
            </IonLabel>
          </IonListHeader>
          <IonItem
            style={{ maxWidth: '540px', maxHeight: '76px', margin: 'auto' }}
          >
            <IonLabel
              style={{
                display: 'flex',
                gap: '54px',
                justifyContent: 'center',
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
                <h4>bc1q gx9g ... sfsy</h4>
                <h6>2 min ago</h6>
              </div>
              <h4 style={{ color: '#27AE60' }}>+50,000 sats</h4>
            </IonLabel>
          </IonItem>
        </IonList>
      </>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '360px',
          margin: '16px',
          cursor: 'pointer',
        }}
      >
        <IonToolbar>
          <img src='/Flip vertical.svg' style={{ marginLeft: '18px' }} />
          <IonTitle style={{ fontSize: '12px' }}>Send</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <img src='/Transactions.svg' style={{ marginLeft: '28px' }} />
          <IonTitle style={{ fontSize: '12px' }}>Balance</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <img src='/Gear.svg' style={{ marginLeft: '28px' }} />
          <IonTitle style={{ fontSize: '12px' }}>Settings</IonTitle>
        </IonToolbar>
      </div>
    </IonContent>
  );
};

export default LatestTransaction;
