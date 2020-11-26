import styled, { css } from "styled-components";

export const VoteBoxContainer = styled.div`
  display: flex;
`;
export const VoteContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const VoteButton = css`
  display: flex;
  height: 35px;
  width: 35px;
  margin: 0 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({ selected, theme }) =>
    selected ? `2px solid ${theme.background}` : "none"};
`;

export const VoteUp = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.secondary};
`;
export const VoteDown = styled.button`
  ${VoteButton}
  background-color: ${({ theme }) => theme.primary};
`;
export const SendVoteButton = styled.button`
  margin-left: 10px;
  height: 40px;
  width: 100px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.background};
`;
const VoteIcon = css`
  height: 20px;
  width: 20px;
  object-fit: contain;
`;

export const VoteUpIcon = styled.img`
  ${VoteIcon}
  transform: rotate(180deg);
`;
export const VoteDownIcon = styled.img`
  ${VoteIcon}
`;
