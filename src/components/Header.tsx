import { IonText, IonTitle } from '@ionic/react';

import './Header.css';

interface HeaderProps {
  pageTitle: string;
  pageSubtitle: string;
}

const PageHeader: React.FC<HeaderProps> = ({ pageTitle, pageSubtitle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <IonText>
        <h2>{pageTitle}</h2>
      </IonText>
      <IonText>
        <h4>{pageSubtitle}</h4>
      </IonText>
    </div>
  );
};

export default PageHeader;
