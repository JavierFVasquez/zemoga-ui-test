import React from "react";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroFather,
  MenuItem,
  HeroFooter,
  Left,
  Right,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HeroVoteBox from "../HeroVoteBox/HeroVoteBox";
import Chip from "../Chip/Chip";
import Label from "../Globals/Label/Label";

const Hero = ({ person }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleRedirect = (to) => {
    history.push(to);
  };

  return (
    <HeroFather background={person.image}>
      <Header title={t("title")}>
        <MenuItem onClick={() => handleRedirect("/pastTrials")}>
          {t("menu.pastTrials")}
        </MenuItem>
        <MenuItem onClick={() => handleRedirect("/howItWorks")}>
          {t("menu.howItWorks")}
        </MenuItem>
        <MenuItem onClick={() => handleRedirect("/logInSignUp")}>
          {t("menu.logInSignUp")}
        </MenuItem>
      </Header>
      <HeroContainer>
        <HeroVoteBox person={person} />
      </HeroContainer>
      <HeroFooter>
        <Left>
          <Label size={13}>{t("closingIn")}</Label>
        </Left>
        <Chip />
        <Right>
          <Label size={36} className="textcolor">
            22
            <span className="light"> {t("days")}</span>
          </Label>
        </Right>
      </HeroFooter>
    </HeroFather>
  );
};

export default Hero;
