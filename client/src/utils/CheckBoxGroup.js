import React from "react";
import styled from "styled-components";
import { BLACK, GREEN, GRAY200 } from "../colors";

const CheckBoxContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: scroll;
`;

const CheckBoxItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  backround: white;
  border: 2px solid #00a896;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 12px;
  margin: 20px 8px 0 0;
`;

const ItemNameContainer = styled.div`
  white-space: nowrap;
  margin: 8px 0px;
  color: ${BLACK};
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const ItemPriceContainer = styled.div`
  white-space: nowrap;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${BLACK};
  width: 34px;
  display: inline-block;
  margin: 0 30px;
`;

const PriceAndCheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckBoxInputContainer = styled.div`
  display: inline-block;
  background: white;
  border: 2px solid ${GRAY200};
  box-sizing: border-box;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  color: ${({ isChecked }) => (isChecked ? GREEN : GRAY200)};
`;

export const CheckBoxGroup = ({ items, register, name }) => {
  return (
    <CheckBoxContainer>
      {items.map((item, i) => {
        return (
          <CheckBoxItemContainer>
            <img
              src={`${process.env.REACT_APP_API_SERVER}` + `/${item.thumbnail}`}
              alt={item.name}
              style={{ margin: "-25px 0 0 0" }}
            />
            <ItemNameContainer>{item.name}</ItemNameContainer>
            <PriceAndCheckBoxContainer>
              <ItemPriceContainer>{item.price} ₽</ItemPriceContainer>
              <CheckBoxInputContainer
                ref={register}
                value={item.slug}
                name={name}
              ></CheckBoxInputContainer>
            </PriceAndCheckBoxContainer>
          </CheckBoxItemContainer>
        );
      })}
    </CheckBoxContainer>
  );
};

export default CheckBoxGroup;
