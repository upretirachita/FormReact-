import React from "react";
import Option from "./Option";

const Select = props => {
  return (
    <div>
      <select
        name={props.name}
        value={props.value}
        onChange={e => {
          props.handleInputUser(e);
        }}
      />
      <Option value={props.value} />
    </div>
  );
};

export default Select;
