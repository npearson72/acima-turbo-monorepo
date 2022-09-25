import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { fileTray, personCircle, barChart } from 'ionicons/icons';
import { TodosPage, ProgressPage, AccountPage } from './pages';
import './App.scss';

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/todos">
              <TodosPage />
            </Route>
            <Route exact path="/progress">
              <ProgressPage />
            </Route>
            <Route path="/account">
              <AccountPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/todos" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="todos" href="/todos">
              <IonIcon icon={fileTray} />
              <IonLabel>Todos</IonLabel>
            </IonTabButton>
            <IonTabButton tab="progress" href="/progress">
              <IonIcon icon={barChart} />
              <IonLabel>Progress</IonLabel>
            </IonTabButton>
            <IonTabButton tab="account" href="/account">
              <IonIcon icon={personCircle} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
