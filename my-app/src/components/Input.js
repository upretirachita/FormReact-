import React from "react";
import ErrorFeedback from "./ErrorFeedback";

const Input = props => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onBlur={e => {
          props.handleBlur(e);
        }}
        onChange={e => {
          props.handleInputUser(e);
        }}
      />
      <ErrorFeedback errormsg={props.errormsg} />
    </div>
  );
};

export default Input;
