import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import CPII from '../CPII/CPII.jsx';
import CPIV from '../CPIV/CPIV.jsx';
import CPIII from '../CPIII/CPIII.jsx'
import Cadastro from '../Cadastro/Cadastro.jsx' 
import CPI from '../CPI/CPI.jsx';
import { Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
    <div>
        <main>
        <Switch>
          <Route exact path ="/">
            <Header />
            <Inicio/>

          </Route>
          <Route exact path="/CPI">
            <Header />
            <CPI/>

          </Route>
          <Route exact path="/CPII">
            <Header />
            <CPII/>

          </Route>
          <Route exact path="/CPIII">
            <Header />
            <CPIII/>

          </Route>
          <Route exact path="/CPIV">
            <Header />
            <CPIV/>

          </Route>
          <Route exact path="/cadastro">

            <Cadastro/>

          </Route>
        
        </Switch>

        </main>
    </div>
  </div>
  );
}

export default App;
