import React from 'react';
import { IonContent, IonFab, IonText } from '@ionic/react';

import './BackButton.css';

interface BackButtonProps {
  icon?: React.ReactElement;
  text: string;
  target: string;
}

const BackButton: React.FC<BackButtonProps> = ({ icon, text, target }) => {
  return (
    <>
      <IonContent className='back-button'>
        <IonFab slot='fixed' vertical='top' horizontal='start' edge={true}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src='/chevron-back-outline.svg' />
            <a href={target} style={{ textDecoration: 'none' }}>
              <IonText className='backText'>{text}</IonText>
            </a>
          </div>
        </IonFab>
      </IonContent>
    </>
  );
};

export default BackButton;
