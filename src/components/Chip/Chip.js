import React from "react";
import { ChipContainer, Top, Bottom, TopChip, BottomChip } from "./styles";
const Chip = () => {
  return (
    <ChipContainer>
      <Top />
      <TopChip />
      <BottomChip />
      <Bottom />
    </ChipContainer>
  );
};

export default Chip;
