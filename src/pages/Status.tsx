import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/react';

const StatusPage: React.FC=()=>(
    
    <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start" >
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Example Page</IonTitle>
        </IonToolbar>
    </IonHeader>
  
    <IonToolbar>
      <IonTitle size="small">Small Title above a Default Title</IonTitle>
    </IonToolbar>
    <IonToolbar>
      <IonTitle>Default Title</IonTitle>
    </IonToolbar>
  
    <IonToolbar>
      <IonTitle size="large">Large Title</IonTitle>
    </IonToolbar>
    </IonPage>  

);

export default StatusPage
