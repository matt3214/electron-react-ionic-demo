import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonSplitPane, IonToolbar, IonTitle, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import { apps, flash, send, add, list, information } from 'ionicons/icons';
import Menu from './components/SideMenu';
import AddPage from './pages/Add';
import ListPage from './pages/List';
import StatusPage from './pages/Status';
import {AppPage} from './declarations';

const store = require('data-store')(({ path: process.cwd() + '/jobStore.json' }));

const appPages: AppPage[] = [
  {
    title: 'Order Creator',
    url: '/add',
    icon: add
  },
  {
    title: 'Order List',
    url: '/list',
    icon: list
  },
  {
    title: 'Status Page',
    url: '/status',
    icon: information
  }
];

let jobOrderList:any[] = [];

let pushOrder:any = (order:any)=>{
  jobOrderList.push(order.name);
}

let getOrderList = ()=>{
  return jobOrderList;
}



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
        <Route path="/status" render={()=><StatusPage/>} exact={true} />
        <Route path="/add" render={()=><AddPage addNewOrder={pushOrder}/>} exact={true} />
          <Route path="/list" render={()=><ListPage jobOrderList={jobOrderList}/>} exact={true} />
          <Route path="/" render={() => <Redirect to="/list" exact={true} /> } />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);
export default App