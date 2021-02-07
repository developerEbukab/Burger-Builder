import React from 'react';
import classes from "./BuildControls.module.scss";
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  {label: "Meat", type: "meat"},
]

const BuildControls = ({ingredientsAdded, ingredientsRemoved, disabled, price, purchasable, ordered}) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price : <strong>${price.toFixed(2)}</strong></p>
      {controls.map(({label, type}) => (
        <BuildControl 
          key={label}
          label={label}
          added={() => ingredientsAdded(type)}
          removed={() => ingredientsRemoved(type)}
          disabled={disabled[type]}
        />
      ))}
      <button
        disabled={!purchasable}
        onClick={ordered}
        className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
}

export default BuildControls;
