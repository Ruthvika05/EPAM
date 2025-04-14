import React from 'react';

function Button(props) {
  return (
    <button onClick={props.toggleColor}>
      Toggle Background
    </button>
  );
}

export default Button;
