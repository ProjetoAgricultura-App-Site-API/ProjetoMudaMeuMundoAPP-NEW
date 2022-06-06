import { IonContent, IonHeader, IonInput, IonPage, IonDatetime, IonTitle, IonToolbar,IonButton, IonItem, IonLabel, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useParams, useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';



const Tab1: React.FC = () => {
  const urlUsers = "http://localhost:5700/api";
  const urlPRODS = "http://localhost:5600/api";
  const [Produto, setProduto] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const [listOfOptions, setListOfOptions]:any = useState([]);
  const [data, setData] = useState('');
  const history = useHistory();
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

  let lista =  {
    Login: '',
    Senha:'',
    Nome:'',
    Sobrenome: '',
    Email: '',
    Telefone: ''
  };


  axios.get(urlUsers)
  .then(response => {
    var listaUser = response.data.users;
    for(var i = 0; i < listaUser.length; i++){
      if(name == listaUser[i].Senha){
        lista = listaUser[i];
      }
    }
  }).catch(error => error)

  let formProduto = {
    Nome: lista.Nome,
    Sobrenome: lista.Sobrenome,
    Email: lista.Email,
    Numero: lista.Telefone,
    Produto: Produto,
    Quantidade: Quantidade,
    Data: data
  }



  //AQUI DÁ PRA ADICIONAR O PRODUTO NA API FAZENDO UM POST
  function venderProduto(){
    axios.post(urlPRODS, formProduto)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    
    <IonPage className='TelasInternas'>
      <IonHeader>
        <IonToolbar>
          <IonTitle id="TITULOTAB1">Vender Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonTitle id="TITULOTAB1" size="large">O que deseja vender hoje?</IonTitle>
      
        <div id='login-container'>
      <form onSubmit={venderProduto}>
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Item</IonLabel>
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
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required></input>
        </IonItem>

        
        <IonButton color="primary" type='submit'>Vender!</IonButton>
      </form>
    </div>



        <div id="botao-retornar">
        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
        </div>

        <div id="footer">
       <p>Ecomp 2022.1</p>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
