import React from 'react';
import { IonButton } from '@ionic/react';

interface ButtonProps {
  text: string;
  icon?: React.ReactElement;
  target?: string;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ text, target }) => {
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
        <a style={{ textDecoration: 'none', color: '#FFFFF0' }} href={target}>
          {text}
        </a>
      </IonButton>
    </>
  );
};

export default Button;
