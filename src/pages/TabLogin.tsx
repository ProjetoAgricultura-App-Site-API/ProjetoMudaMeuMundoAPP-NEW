import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonImg } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import './TabLogin.css';

const PageLogin: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(`login: ${login}`)
    console.log(`password: ${password}`)
  }, [login, password])

  
  
  return (
    <IonPage className='homeBody'>
        <div id='login-container'>
          <form action="">
            <IonItem>
                <IonLabel position="fixed">Login</IonLabel>
                <IonInput type='text' value={login} placeholder="Digite seu usuário" onIonChange={e => setLogin(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="fixed">Senha</IonLabel>
                <IonInput type='password' value={password} placeholder="Digite sua senha" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
            <a href="#" id="forgot-pass">Esqueceu a senha?</a>
            <div id="register-container">
            </div>
            </IonItem>
            <IonItem>
            <a href="#" id="forgot-pass">Registrar</a>
            <div id="register-container">
            </div>
            </IonItem>
            <IonButton color="primary" routerLink="/tab2">Logar</IonButton>
            </form>
        </div>
    </IonPage>
  );
};

export default PageLogin;
