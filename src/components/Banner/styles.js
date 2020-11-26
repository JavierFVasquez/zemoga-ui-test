import styled from "styled-components";

export const BannerContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.banner.background};
  margin-top: 40px;
  padding: 0 40px;
  .textcolor {
    color: ${({ theme }) => theme.text.secondary};
  }
`;
export const LayoutContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`;
export const CloseButton = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  cursor: pointer;
  margin-left: 25px;
`;
