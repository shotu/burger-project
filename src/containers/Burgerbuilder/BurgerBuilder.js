import React, { Component } from 'react'

import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BurgerControls';

const INGREDIENTS_PRICES ={
  salad:0.5,
  bacon:0.4,
  cheese:0,
  meat:0
}
class BurgerBuilder extends Component{
  state={
    ingredients:{
      salad:5,
      bacon:5,
      cheese:5,
      meat:5
    },
    totalPrice:4
  }

  addIngredientHandler=(type)=>{
    console.log("=-=-=-=-=-=-=",type)
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients ={
      ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type]; 
    const oldPrice = this.state.totalPrice;
    const newPrice= oldPrice+priceAddition;
    console.log(newPrice)
    console.log(updatedIngredients)
    this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
    

  }

  deleteIngredientHandler = (type)=>{

  }

  render(){ 
    return (
      <Aux>
        <Burger ingredients={ this.state.ingredients}/>
        <BuildControls ingredientsAdded ={this.addIngredientHandler}> </BuildControls>
      </Aux>
    ); 
  }

}

export default BurgerBuilder; 