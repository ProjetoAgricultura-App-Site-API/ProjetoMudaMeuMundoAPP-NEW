import { IonContent, IonHeader, IonInput, IonPage, IonDatetime, IonTitle, IonToolbar,IonButton, IonItem, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useParams, useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios";

const Tab1: React.FC = () => {
  const url = "http://localhost:5700/api";
  const [Produto, setProduto] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const data = document.getElementById("data");

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vender Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonTitle size="large">O que deseja vender hoje?</IonTitle>
      
        <div id='login-container'>
      <form>
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Produto</IonLabel>
            <IonInput type='text' value={Produto} placeholder="Vender o que?" onIonChange={e => setProduto(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Quantidade</IonLabel>
            <IonInput type='text' value={Quantidade} placeholder="Digite em KG." onIonChange={e => setQuantidade(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Data</IonLabel>
          <input type="date" id="data" required></input>
        </IonItem>

        <IonButton color="primary" type='submit'>Vender!</IonButton>
        </form>
    </div>




        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
