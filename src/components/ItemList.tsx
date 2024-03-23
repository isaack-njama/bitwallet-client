import { IonLabel, IonList, IonItemDivider, IonItemGroup } from '@ionic/react';

import './ItemList.css';

interface ItemListProps {
  label?: string;
  chevronIcon?: React.ReactElement | string;
  target?: string;
}

const ItemList: React.FC<ItemListProps> = ({ label, chevronIcon, target }) => {
  return (
    <IonList style={{ background: 'none' }}>
      <IonItemGroup style={{ background: 'none' }}>
        <IonItemDivider
          className='ion-item-divider'
          style={{ color: '#777777', maxWidth: '100%' }}
        >
          <div
            style={{
              display: 'flex',
              gap: '100px',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <IonLabel
              style={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '50%',
                margin: 'auto',
                color: '#0A0A0A',
              }}
            >
              {label}
            </IonLabel>
            <a href={target}>{chevronIcon}</a>
          </div>
        </IonItemDivider>
      </IonItemGroup>
    </IonList>
  );
};

export default ItemList;
