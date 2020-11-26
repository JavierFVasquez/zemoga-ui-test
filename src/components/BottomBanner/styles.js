import styled from "styled-components";

export const BottomBannerContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.banner.background};
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 40px;
  position: relative;
  .textcolor {
    color: ${({ theme }) => theme.text.secondary};
    ${({ theme }) => theme.breakpoints.mobile} {
      text-align: center;
    }
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    height: 130px;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const SubmitNameButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.text.secondary};
`;
export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 0.1;
`;
