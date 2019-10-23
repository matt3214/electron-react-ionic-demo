import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonMenuButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import {OrderFulfillmentJob} from '../declarations'
type Props={
    jobOrderList:OrderFulfillmentJob[];
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
            {props.jobOrderList.length==0 ? <IonLabel>No Jobs, Add Jobs in the Add Jobs Page</IonLabel> : <IonLabel>Jobs are listed below: </IonLabel>}
            <IonList>
            {props.jobOrderList.map((job,i)=>
               <IonItem key={i}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>
                                {job.getReadableName()}
                            </IonCardTitle>
                            <IonCardSubtitle>
                            {//job.getProperty('deliveryAddress')
                            }
                            Card Subtitle
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonLabel> Address: </IonLabel>
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
