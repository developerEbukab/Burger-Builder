import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import { CheckoutSummaryContainer } from "./CheckoutSummary.module.scss";

const CheckoutSummary = ({ingredients, checkoutCancelled, checkoutContinued}) => {
  return (
    <div className={CheckoutSummaryContainer}>
      <h1>We hope it taste well!</h1>
      <div style={{width: "100%", margin: "auto"}}>
        <Burger ingredients={ingredients}/>
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={checkoutContinued}>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;
