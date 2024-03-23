import { IonText, IonTitle } from '@ionic/react';

import './Header.css';

interface HeaderProps {
  pageTitle: string;
  pageSubtitle: string;
  icon?: React.ReactElement;
}

const PageHeader: React.FC<HeaderProps> = ({
  pageTitle,
  pageSubtitle,
  icon,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <IonText style={{ display: 'flex', gap: '8px', margin: 'auto' }}>
        <h2>{pageTitle}</h2>
        {icon}
      </IonText>
      <IonText style={{ margin: 'auto' }}>
        <h4 style={{ color: 'red' }}>{pageSubtitle}</h4>
      </IonText>
    </div>
  );
};

export default PageHeader;
