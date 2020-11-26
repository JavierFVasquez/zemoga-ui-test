import styled from "styled-components";
import colors from "../../styles/colors";
import Label from "../../components/Globals/Label/Label";

export const MainContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .textcolor {
  }
`;

export const Content = styled.div`
  width: 85%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const People = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  justify-items: stretch;
  align-items: stretch;
`;

export const SectionTitle = styled(Label)`
  color: ${({ theme }) => theme.text.secondary};
  margin: 40px 0;
`;
