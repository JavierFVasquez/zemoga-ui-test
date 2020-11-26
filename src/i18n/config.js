import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es_co from "./es_co.json";
import en_us from "./en_us.json";

const resources = {
  es: {
    translation: es_co,
  },
  en: {
    translation: en_us,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
