import React from "react";
import styled from "styled-components";
import { GRAY100, GRAY600, BLACK } from "../colors";

const SwitcherContainer = styled.div`
  background-color: ${GRAY100};
  border-radius: 12px;
  padding: 2px;
  display: flex;
  overflow: auto;
`;

const SwitcherItem = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 4px 12px;
  white-space: nowrap;
  color: ${({ isSelected }) => (isSelected ? BLACK : GRAY600)};
  background: ${({ isSelected }) => (isSelected ? "white" : "transparent")};
  border-radius: ${({ isSelected }) => (isSelected ? "10px" : "inherit")};
  font-weight: ${({ isSelected }) => (isSelected ? "500" : "400")};
  box-shadow: ${({ isSelected }) =>
    isSelected &&
    "0px 3px 4px rgba(75, 75, 124, 0.05), 0px 0px 2px rgba(75, 75, 124, 0.2)"};
  cursor: ${({ isSelected }) => (isSelected ? "default" : "pointer")};
`;

export const RadioInputGroup = ({ items, selectedValue, name }) => {
  return (
    <SwitcherContainer>
      {items.map((item, i) => {
        return (
          <SwitcherItem
            key={i}
            isSelected={item.value === selectedValue ? true : false}
            name={name}
          >
            {item.label}
          </SwitcherItem>
        );
      })}
    </SwitcherContainer>
  );
};

export default RadioInputGroup;
