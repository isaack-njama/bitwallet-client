import { IonToggle } from '@ionic/react';

const ToggleButton: React.FC = () => {
  return (
    <>
      <IonToggle
        aria-label='keys-toggle'
        style={{
          '--handle-height': '45px',
          '--track-background': '#979797',
          '--track-background-checked': '#014441',
          '--handle-background-checked': '#FFF',
        }}
      />
    </>
  );
};

export default ToggleButton;
