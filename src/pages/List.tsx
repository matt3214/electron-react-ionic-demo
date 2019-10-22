import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const ListPage: React.FC=()=>{
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Order List</IonTitle>
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

export default ListPage
