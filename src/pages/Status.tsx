import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';

const StatusPage: React.FC=()=>{
    return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" >
              <IonMenuButton />
            </IonButtons>
          <IonTitle>Order Status Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <h1>
              Stuff here
          </h1>
      </IonContent>
    </IonPage>
    )
};

export default StatusPage
