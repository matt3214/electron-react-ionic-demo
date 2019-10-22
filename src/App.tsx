import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import { add, information, list } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/SideMenu';
import { AppPage } from './declarations';
import AddPage from './pages/Add';
import ListPage from './pages/List';
import StatusPage from './pages/Status';




//const store = require('data-store')(({ path: process.cwd() + '/jobStore.json' }));

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