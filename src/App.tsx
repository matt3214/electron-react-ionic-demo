import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/SideMenu';
import { appPages, CreationOrderEvent, OrderForm, OrderFulfillmentJob, JobManager } from './declarations';
import AddPage from './pages/Add';
import ListPage from './pages/List';
import StatusPage from './pages/Status';




//const store = require('data-store')(({ path: process.cwd() + '/jobStore.json' }));

if (!Date.now) {
  Date.now = function() { return new Date().getTime(); }
}




let man:JobManager = new JobManager();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/status" render={()=><StatusPage/>} exact={true} />
          <Route path="/add" render={()=><AddPage addNewOrder={man.pushOrder}/>} exact={true} />
          <Route path="/list" render={()=><ListPage jobOrderList={man.jobOrderList}/>} exact={true} />
          <Route path="/" render={() => <Redirect to="/list" exact={true} /> } />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);
export default App