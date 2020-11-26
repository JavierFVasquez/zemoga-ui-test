import React from "react";
import { BottomBannerContainer, SubmitNameButton, Background } from "./styles";
import Label from "../Globals/Label/Label";
import BackgroundImage from "../../assets/back.png";
import { useTranslation } from "react-i18next";

const BottomBanner = () => {
  const { t } = useTranslation();

  return (
    <BottomBannerContainer>
      <Background src={BackgroundImage} />
      <Label
        size={30}
        mobileSize={20}
        className="textcolor"
        weight={300}
        lineHeight={25}
      >
        {t("bottomBanner.text")}
      </Label>
      <SubmitNameButton>
        <Label size={18} mobileSize={13} className="textcolor" align={"center"}>
          {t("bottomBanner.button")}
        </Label>
      </SubmitNameButton>
    </BottomBannerContainer>
  );
};

export default BottomBanner;
