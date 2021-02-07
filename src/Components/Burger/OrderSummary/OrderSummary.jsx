import React from 'react';
import Aux from '../../../Hoc/Aux';

const OrderSummary = ({ingredients}) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {ingredients[igKey]}
    </li>
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <h4>Continue to checkout</h4>
    </Aux>
  );
}

export default OrderSummary;
