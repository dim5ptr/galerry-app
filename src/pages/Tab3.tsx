// Tab3.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, IonIcon } from '@ionic/react';
import { call, mail, pin } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="ion-no-padding" >
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol size="12">
              <IonCard className="app-info-card ion-animatable" color="primary">
                <IonCardContent>
                  <h3><b>Tentang Aplikasi</b></h3>
                  <p>Aplikasi Gallery ini memungkinkan Anda untuk menjelajahi dan menikmati foto-foto menakjubkan yang diambil oleh berbagai pengguna. Anda juga dapat mengambil foto sendiri menggunakan fitur kamera dan menyimpannya ke penyimpanan internal perangkat Anda.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol size="12" className="ion-text-center">
              <IonCard className="ion-animatable" style={{ textAlign: 'center' }} color="primary">
                <div className="logo-container">
                  <IonAvatar>
                    <img alt="Siluet kepala seseorang" src="/public/pp.jpg" style={{ width: '100%', maxWidth: '150px', margin: '0 auto' }} />
                  </IonAvatar>
                </div>
                <IonCardContent>
                  <h2>Dimas Setiya Putra</h2>
                  <p>Software Engineer</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
