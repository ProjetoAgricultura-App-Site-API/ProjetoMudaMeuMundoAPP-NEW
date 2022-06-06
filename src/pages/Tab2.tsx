import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [name,setname] = useState('')
  React.useEffect(() => {
    setname(window.location.href.split("=").slice(-1)[0])
  }, [])

  return (
    <IonPage className='paginaInicial'>
      <IonHeader>
        <IonToolbar>
          <IonTitle id="TITULOTAB1">Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonTitle id="TITULOTAB2"size="large">O que deseja fazer hoje?</IonTitle>

      <img id="ImagemTab2" src="https://www.mudameumundo.com.br/wp-content/uploads/2021/02/logo-footer.png"></img>
      
      <div id="botoes">
        <IonButton color="success" routerLink={`/tab1?${name}`}>Vender</IonButton>

        <IonButton color="warning" routerLink={`/tab3?${name}`}>Perfil</IonButton>
      </div>

      <IonTitle id="TituloInferior">Lembre-se, você faz um amanhã melhor!</IonTitle>


      <div id="footer">
       <p>Ecomp 2022.1</p>
      </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
