import React from "react";
import { Container, Text } from "./styles";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>{t("not_found")}</Text>
    </Container>
  );
};

export default NotFound;
