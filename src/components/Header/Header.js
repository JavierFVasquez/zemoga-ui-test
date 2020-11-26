import React from "react";
import { HeaderContainer, LayoutContainer, Title, Menu } from "./styles";

const Header = ({ title, children }) => {
  return (
    <HeaderContainer>
      <LayoutContainer>
        <Title>{title}</Title>
        <Menu>{children}</Menu>
      </LayoutContainer>
    </HeaderContainer>
  );
};

export default Header;
