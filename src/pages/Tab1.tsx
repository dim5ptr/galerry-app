// Tab1.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container" >
          <IonCard className="welcome-card" color="primary">
            <IonCardContent>
              <h1 className="welcome-title">Selamat datang</h1>
              <p className="welcome-text">Temukan keindahan dunia melalui foto-foto menakjubkan yang Anda ambil dengan aplikasi ini.</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
