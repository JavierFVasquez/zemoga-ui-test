import React from "react";
import {
  HeroVoteBoxContainer,
  DescriptionContainer,
  VoteContainer,
  VoteUp,
  VoteDown,
  VoteUpIcon,
  VoteDownIcon,
} from "./styles";
import { useTranslation } from "react-i18next";
import VoteIcon from "../../assets/vote.png";
import Label from "../Globals/Label/Label";

const HeroVoteBox = ({ person }) => {
  const { t } = useTranslation();

  return (
    <HeroVoteBoxContainer>
      <DescriptionContainer>
        <div>
          <Label size={16} mobileSize={12} weight={"300"}>
            {t("voteBox.whatsYourOpinion")}
          </Label>
          <Label size={60} mobileSize={40}>{`${person.name}?`}</Label>
        </div>
        <Label
          size={21}
          mobileSize={15}
          weight={"300"}
        >{`${person.description}`}</Label>
        <Label size={14} mobileSize={10}>
          {t("voteBox.moreInfo")}
        </Label>
        <Label size={20} mobileSize={15}>
          {t("voteBox.whatsYourVerdict")}
        </Label>
      </DescriptionContainer>
      <VoteContainer>
        <VoteUp>
          <VoteUpIcon src={VoteIcon} />
        </VoteUp>
        <VoteDown>
          <VoteDownIcon src={VoteIcon} />
        </VoteDown>
      </VoteContainer>
    </HeroVoteBoxContainer>
  );
};

export default HeroVoteBox;
