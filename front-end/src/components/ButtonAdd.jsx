import React from 'react';

import classes from './ButtonAdd.module.css';

function ButtonAdd({ adicionado, onHandleClick }) {
  return (
    <button
      onClick={onHandleClick}
      className={
        adicionado
          ? `${classes.buttonAdd} ${classes.active}`
          : classes.buttonAdd
      }
    >
      {adicionado ? '-' : '+'}
    </button>
  );
}

export default ButtonAdd;
