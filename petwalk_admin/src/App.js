import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './config/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  


  return (
    <Router>
        <Switch>
          {routes.map((route,index)=>
          <RouteWithSubRoutes key={index}{...route} />
          )}
        </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route){
  //console log para ver que rutas me esta renderizando 
  //console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes}{...props} />}
    />
  )
}

export default App;
