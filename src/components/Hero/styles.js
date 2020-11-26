import styled from "styled-components";

export const HeroFather = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("${({ background }) => background}");
  background-size: cover;
  position: relative;
`;

export const HeroContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const HeroFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  height: 52px;
  width: 100%;
  flex-direction: row;
  .textcolor {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const MenuItem = styled.li`
  margin-left: 20px;
  color: white;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 14px;
  }
`;
export const Left = styled.div`
  height: 100%;
  width: 35%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;
export const Right = styled.div`
  height: 100%;
  width: 65%;
  background: linear-gradient(
    90deg,
    rgba(235, 235, 235, 1) 0%,
    rgba(235, 235, 235, 0.4) 100%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
`;
