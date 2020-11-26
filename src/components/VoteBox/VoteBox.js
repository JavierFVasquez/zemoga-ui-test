import React, { useState } from "react";
import {
  VoteBoxContainer,
  VoteContainer,
  VoteUp,
  VoteDown,
  VoteUpIcon,
  VoteDownIcon,
  SendVoteButton,
} from "./styles";
import { useTranslation } from "react-i18next";
import VoteIcon from "../../assets/vote.png";
import Label from "../Globals/Label/Label";

const VoteBox = ({ person }) => {
  const { t } = useTranslation();
  const [vote, setVote] = useState("");
  return (
    <VoteBoxContainer>
      <VoteContainer>
        <VoteUp onClick={() => setVote("pro")} selected={vote === "pro"}>
          <VoteUpIcon src={VoteIcon} />
        </VoteUp>
        <VoteDown onClick={() => setVote("con")} selected={vote === "con"}>
          <VoteDownIcon src={VoteIcon} />
        </VoteDown>
        <SendVoteButton>
          <Label size={14} align={"center"}>
            {t("voteBox.vote")}
          </Label>
        </SendVoteButton>
      </VoteContainer>
    </VoteBoxContainer>
  );
};

export default VoteBox;
