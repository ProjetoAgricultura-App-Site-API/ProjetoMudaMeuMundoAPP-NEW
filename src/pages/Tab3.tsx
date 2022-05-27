import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import './TabLogin.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil do Agricultor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonTitle size="small">Seja muito bem vindo, Placeholder !</IonTitle>
      
        <IonHeader collapse="condense">
          <IonTitle size="small">Seja muito bem vindo, Placeholder !</IonTitle>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
