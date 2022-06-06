import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonIcon, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton,} from '@ionic/react';
import { useParams, useHistory, useRouteMatch } from 'react-router';
import { useState, useEffect } from 'react';
import './TabLogin.css';
import React from 'react';
import axios from 'axios';



const url = "http://localhost:5700/api";


const PageLogin: React.FC = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory();

  const user = {
    Login: login,
    Senha: password
  }


  let lista =  [{
    Login: '',
    Senha:'',
    Nome:'',
    Sobrenome: '',
    Email: '',
    Telefone: ''
  }];

  let userlogado; 

  axios.get(url)
  .then(response => {
    var listaUser = response.data.users;
    lista = listaUser;
  }).catch(error => error)
  

  function entrar(){
    for(var i = 0; i < lista.length; i ++){
      if(user.Login == lista[i].Login  && user.Senha == lista[i].Senha ){
        userlogado = lista[i];
        axios.put(url, userlogado) //ATUALIZA O USUÁRIO QUE ESTÁ LOGADO NA API DE USERS 
        .then().catch(error => console.log(error))
        history.push(`/tab2`)
      }
    }
  }
  
  /*history.push('/tab2')*/
  return (
    
    <IonPage className='homeBody'>


    <div id='login-container'>

    <img id="header"
     src="https://storage.googleapis.com/cubo-platform.appspot.com/startups/1603118064847-5jkf0ghb.png"width={250} height={250}>
       
     </img>

      <form onSubmit={entrar}>
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Login</IonLabel>
          <IonInput type='text' value={login} placeholder="Digite seu usuário." onIonChange={e => setLogin(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Senha</IonLabel>
          <IonInput type='password' value={password} placeholder="Digite sua senha." onIonChange={e => setPassword(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
        <IonButton color="primary" routerLink="/Senha">Esqueceu a senha?</IonButton>
          </IonItem>
          <IonItem class='ionItem'>
          <IonButton color="primary" routerLink="/Registro">Registrar</IonButton>
          </IonItem>
          <IonButton color="primary" type='submit'>Logar</IonButton>
        </form>

        <div id="footer">
          <p>Ecomp 2022.1</p>
        </div>
    </div>

    </IonPage>
  );
};

export default PageLogin;
