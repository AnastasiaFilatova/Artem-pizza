import React from "react";

export const RadioInputGroup = ({ items, register, name }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <label key={i}>
            <input type="radio" name={name} value={item.value} ref={register} />
            {item.label}
          </label>
        );
      })}
    </>
  );
};

export default RadioInputGroup;
