import React from 'react';



const ErrorFeedback = props => (
    <p className={props.errormsg ? 'invalid' : 'valid'}>{props.errormsg}</p>
  );

  export default ErrorFeedback;