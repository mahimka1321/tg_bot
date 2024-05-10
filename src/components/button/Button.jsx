import React from 'react';
import './Buttron.css';


const Button = (props) => {
  return (
    <Button {...props} className={'button' + props.className}/>
  );
}

export default Button;
