import React, { Component } from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controsl</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;