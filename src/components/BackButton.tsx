import React from 'react';
import { IonContent, IonFab, IonText } from '@ionic/react';

import './BackButton.css';

interface BackButtonProps {
  icon?: React.ReactElement;
  text: string;
}

const BackButton: React.FC<BackButtonProps> = ({ icon, text }) => {
  return (
    <>
      <IonContent className='back-button'>
        <IonFab slot='fixed' vertical='top' horizontal='start' edge={true}>
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => alert('Hello')}
          >
            <img src='/chevron-back-outline.svg' />
            <IonText className='backText'>{text}</IonText>
          </div>
        </IonFab>
      </IonContent>
    </>
  );
};

export default BackButton;
