import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonMenuButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonNote } from '@ionic/react';
import {OrderFulfillmentJob} from '../declarations'
type Props={
    jobOrderList:OrderFulfillmentJob[];
}

let onClick = (job:OrderFulfillmentJob)=>{
    console.log(job.getReadableName());
    job.toStorage();
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
            {props.jobOrderList.length==0 ? <IonNote>No Jobs, Add Jobs in the Add Jobs Page</IonNote> : <></>}
            <IonList>
            {props.jobOrderList.map((job,i)=>
               <IonItem key={i}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>
                                {job.getReadableName()}
                            </IonCardTitle>
                            <IonCardSubtitle>
                                {job.getPropByName('orderStatus')}
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonLabel> Address: {job.getPropByName('destinationAddress')}</IonLabel>
                            <IonButton onClick={e=>onClick(job)}>
                                Click to debug
                            </IonButton>
                        </IonCardContent>
                        
                    </IonCard>
                    
               </IonItem>
            )}
            </IonList>
        </IonContent>
    </IonPage>
    )
};

export default ListPage
