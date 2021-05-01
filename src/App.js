import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Recientes from "./Components/Recientes";
import Artistas from "./Components/Artistas";
import Albums from "./Components/Albums";
import Error from "./Components/Error";
import SideBar from "./Components/partes/SideBar";
import Canciones from "./Components/Canciones";

import './asserts/css/maquetacion.css'
import React from "react";

const routes = [
  { path: '/', name: 'Inicio', Component: Recientes },
  { path: '/recientes', name: 'Inicio', Component: Recientes },
  //{ path: '/artistas', name: 'Inicio', Component: Artistas },
  { path: '/artistas', name: 'Inicio', Component: Recientes },
  //{ path: '/albums', name: 'Inicio', Component: Albums },
  { path: '/albums', name: 'Inicio', Component: Recientes },
  //{ path: '/canciones', name: 'Canciones', Component: Canciones },
  { path: '/canciones', name: 'Canciones', Component: Recientes },
  { path: '/estaciones', name: 'Estaciones', Component: Recientes },
  { name: 'Error', Component: Error },
]


function App() {
  return (
    <div className="App">
      <Router>


        <Switch>
          {
            routes.map(({ path, name, Component }, index) => {
              return (
                <Route key={index} exact path={path}>
                  <div id="contenidoTotal">
                    <div id="sideBar">
                      <SideBar path={path} tituloPagina={name} />
                    </div>
                    <div id="contenidoPrincipal">
                      <Component />
                    </div>
                  </div>
                </Route>
              )
            })
          }


          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
