import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import { HashRouter, Route} from "react-router-dom";
import Main from './Containers/TableVeiw/Main/Main';
import DetailVeiw from "./Containers/DetailVeiw/DetailVeiw"

function App() {
  return (
    <HashRouter>
        <div className="App">
          <Layout>
                <Route path ="/" exact component = {Main} />
                <Route path = "/users/:userid"  exact component = {DetailVeiw} />
          </Layout>
      </div>
    </HashRouter>
    
  );
}

export default App;
