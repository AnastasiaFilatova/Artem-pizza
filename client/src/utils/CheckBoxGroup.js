import React from "react";

export const CheckBoxGroup = ({ items, register, name }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <label key={i}>
            <input
              ref={register}
              type="checkbox"
              value={item.slug}
              name={name}
            />
            {item.name}
          </label>
        );
      })}
    </>
  );
};

export default CheckBoxGroup;
