import { checkPropTypes } from 'prop-types';
import React from 'react';
import Aux from '../../../Hoc/Aux/Aux.js';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ingredients, purchaseContinued, purchaseCancelled, price}) => {
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
      <p><strong>Total Price: ${price.toFixed()}</strong></p>
      <h4>Continue to checkout</h4>
      <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default OrderSummary;
