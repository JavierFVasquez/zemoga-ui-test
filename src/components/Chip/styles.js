import styled from "styled-components";

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -8px;
`;
export const Top = styled.div`
  height: 18px;
  width: 8px;
  background-color: ${({ theme }) => theme.banner.background};
`;
export const Bottom = styled.div`
  height: 18px;
  width: 8px;
  background-color: ${({ theme }) => theme.banner.background};
`;

export const TopChip = styled.div`
  height: 0;
  width: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid ${({ theme }) => theme.banner.background};
  border-bottom: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.banner.background};
`;
export const BottomChip = styled.div`
  height: 0;
  width: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid ${({ theme }) => theme.banner.background};
  border-bottom: 4px solid ${({ theme }) => theme.banner.background};
  border-top: 4px solid transparent;
`;
