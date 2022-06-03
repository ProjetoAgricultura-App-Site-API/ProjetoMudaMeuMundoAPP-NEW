import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonButton, IonImg } from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { useState, useEffect } from 'react';
import './TabLogin.css';
import axios from "axios";



const PageLogin: React.FC = () => {

  const url = "http://localhost:5700/api";
  const { name } = useParams<{ name: string; }>();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const history = useHistory();

  

  /*useEffect(() => {
    console.log(`login: ${login}`)
    console.log(`password: ${password}`)
    console.log(`nome: ${nome}`)
    console.log(`nome: ${sobrenome}`)
    console.log(`email: ${email}`)
    console.log(`telefone: ${telefone}`)
  }, [login, password,nome,sobrenome,email,telefone])*/

  let newuser = {
    Login: login,
    Senha: password,
    Nome: nome,
    Sobrenome: sobrenome,
    Email: email,
    Telefone: telefone
  }

  function user(){
    axios.post(url, newuser)
    .then(response => {
        console.log("USER CADASTRADO");
    })
    .catch(error => error)
  }

  function registrar(){
    console.log(newuser);
    user();
    alert("Usuario registrado com sucesso");
    history.push("/");
  }
  
  return (
    <IonPage className='homeBody'>
    <div id='login-container'>
      <form onSubmit={registrar}>
        <IonItem class='ionItem'>
          <IonLabel position="fixed">Login</IonLabel>
            <IonInput type='text' value={login} placeholder="Digite seu usuário." onIonChange={e => setLogin(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Nome</IonLabel>
            <IonInput type='text' value={nome} placeholder="Digite seu nome." onIonChange={e => setNome(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Sobrenome</IonLabel>
            <IonInput type='text' value={sobrenome} placeholder="Digite seu sobrenome." onIonChange={e => setSobrenome(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">Senha</IonLabel>
          <IonInput type='password' value={password} placeholder="Digite sua senha." onIonChange={e => setPassword(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">E-mail</IonLabel>
            <IonInput type='text' value={email} placeholder="Digite seu E-mail." onIonChange={e => setEmail(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonItem class='ionItem'>
          <IonLabel position="fixed">telefone</IonLabel>
            <IonInput type='text' value={telefone} placeholder="Digite seu Telefone." onIonChange={e => setTelefone(e.detail.value!)} clearInput required></IonInput>
        </IonItem>

        <IonButton color="primary" type='submit'>Registrar</IonButton>
        </form>
    </div>
    </IonPage>
  );
};

export default PageLogin;
