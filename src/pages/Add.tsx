import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';


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
            <IonInput value="custom">

            </IonInput>
        </IonContent>
    </IonPage>
    )
};

export default AddPage
