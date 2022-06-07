import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,IonItem,IonLabel ,IonInput } from '@ionic/react';
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
          <IonTitle id="TITULOTAB2">Seu Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='homeBody'>
        <IonHeader collapse="condense">
        </IonHeader>
      
        <div id='login-container'>
          <img src="https://img.freepik.com/free-vector/farmer-using-technology-digital-agriculture_53876-113813.jpg" id='header' width={180} height={180}/>

            <IonItem class='ionItem'>
              <IonLabel position="fixed">Nome:</IonLabel>
                <p>Teste</p> 
            </IonItem>

            <IonItem class='ionItem'>
              <IonLabel position="fixed">Email:</IonLabel>
              <p>Teste</p> 
            </IonItem>

            <IonItem class='ionItem'>
              <IonLabel position="fixed">Numero:</IonLabel>
              <p>Teste</p> 
            </IonItem>

            
            <div id="botoestab3">
              <IonButton color="danger" onClick={Sair}>Deslogar</IonButton>       
            </div>

        </div>



        <div id="botao-retornar">
          <IonButton color="success" routerLink='/tab2'>Retornar</IonButton>
        </div>

        <div id="footer">
        <p>Made with love and code! Ecomp 22.1</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
