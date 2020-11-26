import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: column;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export const LayoutContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: white;
  font-family: "Lato", sans-serif;
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 25px;
  }
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
