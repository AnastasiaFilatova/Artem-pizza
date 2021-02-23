import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import title from "./assets/title.png";
import icn_account from "./assets/icn_account.png";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  position: static;
  width: 350px;
  height: 56px;
  background: white;
  box-shadow: 0px 3px 4px rgba(46, 49, 55, 0.05),
    0px 0px 2px rgba(46, 49, 55, 0.15);
  margin: 0px 0px;
`;

export const NavPanel = () => {
  return (
    <NavContainer>
      <Link to="/">
        <img src={logo} alt="pizza logo" />
        <img src={title} alt="pizza logo title" />
      </Link>

      <Link to="/login">
        <img src={icn_account} alt="account image" />
      </Link>
    </NavContainer>
  );
};
