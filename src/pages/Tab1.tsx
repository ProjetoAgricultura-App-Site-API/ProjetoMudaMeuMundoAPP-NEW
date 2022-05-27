import { IonContent, IonHeader, IonInput, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <div>
      <IonInput>
        <IonTitle>Escreva a fruta/leguminosa desejada:</IonTitle>
      </IonInput>
      <IonSearchbar showCancelButton='always'></IonSearchbar>
      </div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vender Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
