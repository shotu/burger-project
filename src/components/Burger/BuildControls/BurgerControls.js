import React from 'react';
import classes  from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const  controls =[
  {label:'Salad', type:'salad'},
  {label:'Bacon', type: 'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'}
];

const buildControls = (props) => (

  <div className={classes.BuildControl}>
    {controls.map(ctrl =>{
      return<BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      added={() => props.ingredientsAdded(ctrl.type)}
      />
    })}
  </div>

);
export default buildControls;