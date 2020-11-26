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
import { voteTypes } from "../../redux/reducers/people.reducer";

const VoteBox = ({ person, onVote }) => {
  const { t } = useTranslation();
  const [vote, setVote] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <VoteBoxContainer>
      <VoteContainer>
        {!hasVoted && (
          <>
            <VoteUp
              data-testid="voteup"
              onClick={() => setVote(voteTypes.pro)}
              selected={vote === voteTypes.pro}
            >
              <VoteUpIcon src={VoteIcon} />
            </VoteUp>
            <VoteDown
              onClick={() => setVote(voteTypes.against)}
              selected={vote === voteTypes.against}
            >
              <VoteDownIcon src={VoteIcon} />
            </VoteDown>
          </>
        )}
        <SendVoteButton
          data-testid="send-vote"
          onClick={() => {
            vote &&
              onVote({
                id: person.id,
                type: vote,
              });
            setVote("");
            setHasVoted(!!vote);
          }}
        >
          <Label size={14} mobileSize={11} align={"center"}>
            {hasVoted ? t("voteBox.voteAgain") : t("voteBox.vote")}
          </Label>
        </SendVoteButton>
      </VoteContainer>
    </VoteBoxContainer>
  );
};

export default VoteBox;
