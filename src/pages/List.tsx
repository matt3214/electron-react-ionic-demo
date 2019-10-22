import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonMenuButton, IonButtons } from '@ionic/react';

type Props={
    jobOrderList:{}[];
}

const ListPage: React.FC<Props>=(props)=>{
    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" >
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Order List</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
            {props.jobOrderList.map((job,i)=>
               <IonItem key={i}>
                    <IonLabel>
                        {job}
                    </IonLabel>
               </IonItem>
            )}
            </IonList>
        </IonContent>
    </IonPage>
    )
};

export default ListPage
