import { IonContent, IonHeader, IonInput, IonPage, IonDatetime, IonTitle, IonToolbar,IonButton, IonItem, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useParams, useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';

const url = "http://localhost:5700/api"

const Tab1: React.FC = () => {
  const url = "http://localhost:5700/api";
  const [Produto, setProduto] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const [listOfOptions, setListOfOptions]:any = useState([]);
  const data = document.getElementById("data");
  const [name, setname] = useState('')
  React.useEffect(() => {
    setname(window.location.href.split("?").slice(-1)[0])
  }, [])


  function procurarProduto(Produto:string){
    const fruitslist = ["abacate","abacaxi","caju","jaca", "melão"]
    console.log(Produto)
    const filteredFruitsList = fruitslist.filter((value) => {
        const lengthWord = Produto.length
        const newWord = value.slice(0, lengthWord)
        if (Produto.toLowerCase() == newWord.toLowerCase()){
            return value
        }
    })
    setListOfOptions(filteredFruitsList)
  }
  //AQUI DÁ PRA ADICIONAR O PRODUTO NA API FAZENDO UM POST
  function venderProduto(){
    axios.post(url, {
      //aqui ficaria o produto que quer adicionar. Pra filtrar onde adicionar pode usar a variável name (que é o login) da linha 17.
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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
            <input list='browsers' type='text' value={Produto} placeholder="Vender o que?" onChange={e => {setProduto(e.target.value!);procurarProduto(e.target.value)}}required>
            </input>
            <datalist id="browsers">
              {listOfOptions.map((value: string, index: number) => {
                return <option value={`${value}`}></option>
              })}
            </datalist>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Quantidade</IonLabel>
            <IonInput type='text' value={Quantidade} placeholder="Digite em KG." onIonChange={e => setQuantidade(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Data</IonLabel>
          <input type="date" id="data" required></input>
        </IonItem>

        <IonButton color="primary" type='submit' onClick={() => { venderProduto() }}>Vender!</IonButton>
        </form>
    </div>




        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
