import React from "react";
import { BannerContainer, LayoutContainer, CloseButton } from "./styles";
import Label from "../Globals/Label/Label";
import CloseIcon from "../../assets/close.png";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <LayoutContainer>
        <Label size={21} mobileSize={17} className="textcolor" weight={300}>
          {t("banner.speakOutBeHeard")}
        </Label>
        <Label size={37} mobileSize={25} className="textcolor" weight={"bold"}>
          {t("banner.beCounted")}
        </Label>
      </LayoutContainer>
      <Label
        size={15}
        mobileSize={11}
        className="textcolor"
        weight={300}
        lineHeight={25}
      >
        {t("banner.description")}
      </Label>
      <CloseButton src={CloseIcon} />
    </BannerContainer>
  );
};

export default Banner;
