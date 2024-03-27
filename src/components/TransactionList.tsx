import React from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

import PageHeader from '../components/Header';

import './TransactionList.css';

interface TransactionListProps {
  placeholder?: string;
  fiatAmount?: string;
  toAddress?: string;
  fee?: string;
}

const TransactionList: React.FC<TransactionListProps> = ({
  placeholder,
  fiatAmount,
  toAddress,
  fee,
}) => {
  return (
    <IonContent>
      <div style={{ textAlign: 'center', position: 'relative', top: '180px' }}>
        <img src='/Tx details.svg' width='60px' height='60px' />
        <PageHeader pageTitle='Send bitcoin' />
      </div>
      <div className='container'>
        <IonList
          inset={true}
          style={{ background: '#FFFFF0', height: '323px', margin: 'auto' }}
          className='list-container'
        >
          <IonItem>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <IonLabel style={{ color: '#777777' }}>Amount</IonLabel>
              <IonInput placeholder={placeholder} />
            </div>
            <div>
              <IonLabel style={{ color: '#0A0A0A' }}>{fiatAmount}</IonLabel>
            </div>
          </IonItem>
          <IonItem>
            <IonInput placeholder='Pick contact or enter address...' />
          </IonItem>
          <IonItem>
            <IonLabel>Fee</IonLabel>
            <IonLabel>~{fee}</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </IonContent>
  );
};

export default TransactionList;
