import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';
import React, { useState } from 'react';

import { OrderForm } from '../declarations';

type Props={
    addNewOrder:(order:OrderForm)=>void;
}

const AddPage: React.FC<Props>=(props)=>{
    let [address,setAddress] = useState('');
    let [packageSize,setPackageSize] = useState(0);
    let [nickname,setNickname] = useState('');
    let addOrder=()=>{
        let newOrder:OrderForm = {"nickname":nickname,"destinationAddress":address,"packageSize":packageSize};
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
                <IonLabel>Click to add an order to this address</IonLabel>
            </IonButton>
            <IonItem>
                <IonLabel position="floating">Address</IonLabel>
                <IonInput placeholder="Enter Street Address..." onIonChange={e=>setAddress((e.target as HTMLInputElement).value)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Package Size</IonLabel>
                <IonInput placeholder="cubic feet ( trunk space is usually about 20 cubic feet )..." type='number' onIonChange={e=>setPackageSize(parseInt((e.target as HTMLInputElement).value))}> </IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Nickname for the order</IonLabel>
                <IonInput placeholder="Boots and Pants, for example..." onIonChange={e=>setNickname((e.target as HTMLInputElement).value)}></IonInput>
            </IonItem>
        </IonContent>
    </IonPage>
    )
};

export default AddPage
