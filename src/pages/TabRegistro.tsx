import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonImg } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import './TabLogin.css';

const PageLogin: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    console.log(`login: ${login}`)
    console.log(`password: ${password}`)
    console.log(`login: ${nome}`)
    console.log(`login: ${email}`)
  }, [login, password,nome,email])

  
  
  return (
    <IonPage className='homeBody'>
    <div id='login-container'>
      <form action="">
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Login</IonLabel>
            <IonInput type='text' value={login} placeholder="Digite seu usuário." onIonChange={e => setLogin(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Nome</IonLabel>
            <IonInput type='text' value={login} placeholder="Digite seu nome." onIonChange={e => setNome(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Senha</IonLabel>
          <IonInput type='password' value={password} placeholder="Digite sua senha." onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">E-mail</IonLabel>
            <IonInput type='text' value={login} placeholder="Digite seu E-mail." onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonButton color="primary" routerLink="/">Registrar</IonButton>
        </form>
    </div>
    </IonPage>
  );
};

export default PageLogin;
