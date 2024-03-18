import React from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <IonButton
        style={{
          '--border-radius': '5px',
          '--background': '#014441',
          width: '335px',
          height: '60px',
          fontSize: '21px',
          margin: 'auto',
          position: 'relative',
          transform: 'translateY(-50%)',
        }}
      >
        {text}
      </IonButton>
    </>
  );
};

export default Button;
