import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/Burgerbuilder/BurgerBuilder';
class App extends Component {

  state={
    ingredients:{
      salad:1,
      bacon:1,
      cheese:2,
      meat:2
    }
  }


  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout> 
      </div>
    );
  }
}

export default App;
