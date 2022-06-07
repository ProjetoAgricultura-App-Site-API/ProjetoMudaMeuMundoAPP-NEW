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
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle id="TITULOTAB2">O que deseja fazer hoje?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='homeBody'>
        <IonHeader collapse="condense">
        </IonHeader>
      
        <div id='menu-container'>
          <img id="ImagemTab2" src="https://www.mudameumundo.com.br/wp-content/uploads/2021/02/logo-footer.png"></img>

          <div id="botoes">
            <IonButton color="success" id='botaoinicio' routerLink={`/tab1?${name}`}>
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077976.png" id='imagem'/>
            </IonButton>
            <IonButton color="warning" id='botaoinicio2' routerLink={`/tab3?${name}`}>
              <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"/>
            </IonButton>
          </div>
          <h1 id='titulobotao1'>VENDER</h1>
          <h1 id='titulobotao2'>PERFIL</h1>

          <IonTitle id="TituloInferior">Você faz um amanhã melhor!</IonTitle>

            

        </div>

        <div id="footer">
        <p>Made with love and code! Ecomp 22.1</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
