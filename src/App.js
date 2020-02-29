import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import { HashRouter, Route, Switch, } from "react-router-dom";
import Main from './Containers/TableVeiw/Main/Main';
import DetailVeiw from "./Containers/DetailVeiw/DetailVeiw"

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Layout>
            <Switch>
                <Route path ="/" exact component = {Main} />
                <Route path = "/user/:userid"  exact component = {DetailVeiw} />
                <Route render = {() => <h2>404 ! Page not Found!!!</h2>} />
            </Switch>
          </Layout>
      </div>
    </HashRouter>
    
  );
}

export default App;
