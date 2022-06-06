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
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonTitle size="large">O que deseja fazer hoje?</IonTitle>

      <IonButton color="success">Ver pedidos do dia</IonButton>

      <img src="https://www.mudameumundo.com.br/wp-content/uploads/2021/02/logo-footer.png"></img>
      
      <IonButton color="success" routerLink={`/tab1?${name}`}>Vender</IonButton>

      <IonButton color="warning" routerLink={`/tab3?${name}`}>Perfil do usuário</IonButton>

      <IonTitle size="small">Lembre-se, você faz um amanhã melhor!</IonTitle>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
