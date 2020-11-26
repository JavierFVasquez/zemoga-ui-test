import React from "react";
import {
  PersonCardContainer,
  DescriptionContainer,
  VoteContainer,
  VoteUp,
  VoteDown,
  VoteUpIcon,
  VoteDownIcon,
} from "./styles";
import {
  VoteUp as VoteBoxUp,
  VoteDown as VoteBoxDown,
  VoteUpIcon as VoteBoxUpIcon,
  VoteDownIcon as VoteBoxDownIcon,
} from "../VoteBox/styles";
import { useTranslation } from "react-i18next";
import VoteIcon from "../../assets/vote.png";
import Label from "../Globals/Label/Label";
import VoteBox from "../VoteBox/VoteBox";

const PersonCard = ({ person }) => {
  const { t } = useTranslation();

  const totalVotes = person.pro + person.against;
  const percentagePro = (person.pro * 100) / totalVotes;
  const percentageAgainst = (person.against * 100) / totalVotes;

  return (
    <PersonCardContainer background={person.image}>
      <DescriptionContainer>
        <div className="relative">
          <div className="absolute">
            {percentagePro > percentageAgainst ? (
              <VoteBoxUp disabled>
                <VoteBoxUpIcon src={VoteIcon} />
              </VoteBoxUp>
            ) : (
              <VoteBoxDown disabled>
                <VoteBoxDownIcon src={VoteIcon} />
              </VoteBoxDown>
            )}
          </div>
          <Label size={45}>{person.name}</Label>
          <Label size={12}>
            <span className="bold">1 month ago</span>
            {t("in")}
            {person.section}
          </Label>
        </div>
        <Label size={16} weight={"300"}>{`${person.description}`}</Label>
        <VoteBox />
      </DescriptionContainer>
      <VoteContainer>
        <VoteUp percentage={percentagePro}>
          <VoteUpIcon src={VoteIcon} />
          <Label size={30} weight={"300"}>
            {Math.round(percentagePro)}
            <span className="percentage">%</span>
          </Label>
        </VoteUp>
        <VoteDown percentage={percentageAgainst}>
          <Label size={30} weight={"300"}>
            {Math.round(percentageAgainst)}
            <span className="percentage">%</span>
          </Label>
          <VoteDownIcon src={VoteIcon} />
        </VoteDown>
      </VoteContainer>
    </PersonCardContainer>
  );
};

export default PersonCard;
