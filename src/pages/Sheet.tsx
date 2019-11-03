import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,  
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid, IonRow, IonCol
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import './Sheet.css';

const Sheet: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="end">
         <IonIcon icon={add} />
        </IonButtons>
          <IonTitle>Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>Name</IonCol>
            <IonCol>Raw</IonCol>
            <IonCol>Handicap</IonCol>
            <IonCol>Total</IonCol>
          </IonRow>
        </IonGrid>
        </IonHeader>
      
      </IonContent>
    </IonPage>
  );
};

export default Sheet;
