import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import './TabLogin.css';

const TabTrocaSenha: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mudança de Senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonTitle size="large">Alteração de Senha</IonTitle>
      
        <IonHeader collapse="condense">
          <IonTitle size="small">Seja muito bem vindo!</IonTitle>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default TabTrocaSenha;
