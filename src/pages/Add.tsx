import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonMenuButton, IonButtons } from '@ionic/react'


type Props={
    addNewOrder:(order:any)=>void;
}

const AddPage: React.FC<Props>=(props)=>{
    let addOrder=()=>{
        let newOrder = {"name":"New Order"};
        props.addNewOrder(newOrder);
    }

    return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start" >
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Add New Order</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonButton onClick={addOrder}>
                <IonLabel>Click to do something!</IonLabel>
            </IonButton>
        </IonContent>
    </IonPage>
    )
};

export default AddPage
