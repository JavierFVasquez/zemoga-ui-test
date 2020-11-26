import styled, { css } from "styled-components";

export const PersonCardContainer = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  overflow: hidden;
  background-image: url("${({ background }) => background}");
  background-size: cover;
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 35px 40px;
  justify-content: space-around;
  padding-top: 280px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
    left: -45px;
    top: 10px;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const VoteButton = css`
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  .percentage {
    font-size: 20px;
  }
`;

export const VoteUp = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.secondaryTransparent};
  justify-content: flex-start;
  width: ${({ percentage }) => percentage}%;
`;
export const VoteDown = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.primaryTransparent};
  justify-content: flex-end;
  width: ${({ percentage }) => percentage}%;
`;
const VoteIcon = css`
  height: 25px;
  width: 25px;
  object-fit: contain;
  margin: 0 10px;
`;

export const VoteUpIcon = styled.img`
  ${VoteIcon}
  transform: rotate(180deg);
`;
export const VoteDownIcon = styled.img`
  ${VoteIcon}
`;
