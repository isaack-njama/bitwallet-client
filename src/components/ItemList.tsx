import { IonLabel, IonList, IonItemDivider, IonItemGroup } from '@ionic/react';

import './ItemList.css';

interface ItemListProps {
  label: string;
  chevronIcon?: React.ReactElement;
}

const ItemList: React.FC<ItemListProps> = ({ label, chevronIcon }) => {
  return (
    <IonList style={{ background: 'none' }}>
      <IonItemGroup style={{ background: 'none' }}>
        <IonItemDivider
          className='ion-item-divider'
          style={{ color: '#777777', maxWidth: '80%' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IonLabel
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '40px',
                maxWidth: '40%',
                margin: 'auto',
              }}
            >
              {label}
            </IonLabel>
            {chevronIcon}
          </div>
        </IonItemDivider>
      </IonItemGroup>
    </IonList>
  );
};

export default ItemList;
