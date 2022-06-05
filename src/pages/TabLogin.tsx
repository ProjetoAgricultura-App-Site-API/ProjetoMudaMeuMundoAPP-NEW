import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonImg } from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import './TabLogin.css';
import axios from 'axios';



const PageLogin: React.FC = () => {

  const url = "http://localhost:5700/api"
  const { name } = useParams<{ name: string; }>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const history = useHistory();

  const user = {
    Login: login,
    Senha: password
  }
 

  /*useEffect(() => {
    console.log(`login: ${login}`)
    console.log(`password: ${password}`)
  }, [login, password])*/


  function entrar(){
    let userValid = {
      Login: '',
      Senha: '',
      Nome: '',
      Sobrenome: '',
      Email: '',
      Telefone: ''
    }
    function getUser(){
      axios.get(url)
      .then(response => {
          var lista_app = response.data.users;
          for(var i = 0; i < lista_app.length; i++){
            if(user.Login == lista_app[i].Login && user.Senha == lista_app[i].Senha){
              userValid = lista_app[i];
              history.push("/tab2");
            }
          }
      }).catch(error => console.log(error))
    }
    getUser();
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
    </div>

    </IonPage>
  );
};

export default PageLogin;
