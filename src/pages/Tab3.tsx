import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from 'react';
import {useHistory} from 'react-router';
import { useState } from 'react';
import axios from 'axios';


const url = "http://localhost:5700/api"



const Tab3: React.FC = () => {
  const history = useHistory()
  const [name,setname] = useState('')
  React.useEffect(() => {
    setname(window.location.href.split("?").slice(-1)[0])
  }, [])

  let noUser = {
    Login: '',
    Senha:'',
    Nome:'',
    Sobrenome: '',
    Email: '',
    Telefone: ''
  };
  
  function Sair(){ //APAGA OS DADOS DE QUEM TÁ LOGADO APÓS SAIR DO APP
    axios.put(url, noUser).then().catch(error => console.log(error))
    history.push('/');
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle id="TITULOTAB1">Perfil do Agricultor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonTitle id="TITULOTAB3"> Olá, {name} !</IonTitle>
        <IonHeader collapse="condense">
        </IonHeader>

        <div id="botoestab3">
        <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>

        <IonButton color="danger" onClick={Sair}>Deslogar</IonButton>
        </div>

        <div id="footer">
       <p>Ecomp 2022.1</p>
      </div>
      </IonContent>
    </IonPage>

  );
};

export default Tab3;
