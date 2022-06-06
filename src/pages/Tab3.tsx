import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const url = "http://localhost:5700/api"



const Tab3: React.FC = () => {

  const [name,setname] = useState('')
  React.useEffect(() => {
    setname(window.location.href.split("?").slice(-1)[0])
  }, [])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil do Agricultor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonTitle>Seja muito bem vindo, {name} !</IonTitle>
        <IonHeader collapse="condense">
        </IonHeader>

        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
      </IonContent>
    </IonPage>

  );
};

export default Tab3;
