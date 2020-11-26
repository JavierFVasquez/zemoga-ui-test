import styled, { css } from "styled-components";

export const HeroVoteBoxContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 100%;
  min-width: 400px;
  height: 450px;
  flex-direction: column;
  overflow: hidden;
  margin-top: 55px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.mobile} {
    min-width: 350px;
    height: 400px;
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 35px 30px;
  background: #00000077;
  justify-content: space-between;
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const VoteButton = css`
  display: flex;
  flex: 1;
  height: 85px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.mobile} {
    height: 65px;
  }
`;

export const VoteUp = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.secondaryTransparent};
`;
export const VoteDown = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.primaryTransparent};
`;
const VoteIcon = css`
  height: 35px;
  width: 35px;
  object-fit: contain;
  ${({ theme }) => theme.breakpoints.mobile} {
    height: 25px;
    width: 25px;
  }
`;

export const VoteUpIcon = styled.img`
  ${VoteIcon}
  transform: rotate(180deg);
`;
export const VoteDownIcon = styled.img`
  ${VoteIcon}
`;
