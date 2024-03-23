import React, { useState } from 'react';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from '@ionic/react';

import './KeyboardInput.css';

interface InputProps {
  placeholder: string;
}

const KeyboardInput: React.FC<InputProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value: any) => {
    setInputValue(inputValue + value);
  };

  const handleBackspace = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  return (
    <IonContent>
      <IonGrid>
        <input
          type='number'
          value={inputValue}
          readOnly
          style={{
            textAlign: 'center',
            margin: '20px',
            width: '335px',
            height: '50px',
            background: 'none',
            color: '#0A0A0A',
            border: 'none',
          }}
          placeholder={placeholder}
        />
        <IonRow>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('1')}>1</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('2')}>2</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('3')}>3</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('4')}>4</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('5')}>5</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('6')}>6</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('7')}>7</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('8')}>8</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('9')}>9</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='4'>
            <IonButton onClick={handleBackspace}>X</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton onClick={() => handleButtonClick('0')}>0</IonButton>
          </IonCol>
          <IonCol size='4'>
            <IonButton>Done</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default KeyboardInput;
