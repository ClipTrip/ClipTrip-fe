import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAppBar from "@/locales/en/appbar.json";
import enAccessibility from "@/locales/en/accessibility.json";
import enButtonAction from "@/locales/en/buttonAction.json";
import enButtonChip from "@/locales/en/accessibility.json";
import enChip from "@/locales/en/accessibility.json";
import enHeadline from "@/locales/en/accessibility.json";
import enInfo from "@/locales/en/accessibility.json";
import enListItem from "@/locales/en/accessibility.json";
import enMenu from "@/locales/en/accessibility.json";
import enModal from "@/locales/en/accessibility.json";
import enNaviItem from "@/locales/en/accessibility.json";
import enTermsOfService from "@/locales/en/accessibility.json";
import enSectionTitle from "@/locales/en/accessibility.json";
import enSelectField from "@/locales/en/accessibility.json";
import enSearchField from "@/locales/en/accessibility.json";
import enTermsOfService2 from "@/locales/en/accessibility.json";
import enTextField from "@/locales/en/accessibility.json";

import koAppBar from "@/locales/ko/appbar.json";
import koAccessibility from "@/locales/ko/accessibility.json";
import koButtonAction from "@/locales/ko/buttonAction.json";
import koButtonChip from "@/locales/ko/accessibility.json";
import koChip from "@/locales/ko/accessibility.json";
import koHeadline from "@/locales/ko/accessibility.json";
import koInfo from "@/locales/ko/accessibility.json";
import koListItem from "@/locales/ko/accessibility.json";
import koMenu from "@/locales/ko/accessibility.json";
import koModal from "@/locales/ko/accessibility.json";
import koNaviItem from "@/locales/ko/accessibility.json";
import koTermsOfService from "@/locales/ko/accessibility.json";
import koSectionTitle from "@/locales/ko/accessibility.json";
import koSelectField from "@/locales/ko/accessibility.json";
import koSearchField from "@/locales/ko/accessibility.json";
import koTermsOfService2 from "@/locales/ko/accessibility.json";
import koTextField from "@/locales/ko/accessibility.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      appBar: enAppBar,
      accessibility: enAccessibility,
      buttonAction: enButtonAction,
      buttonChip: enButtonChip,
      chip: enChip,
      headline: enHeadline,
      info: enInfo,
      listItem: enListItem,
      menu: enMenu,
      modal: enModal,
      naviItem: enNaviItem,
      termsOfService: enTermsOfService,
      sectionTitle: enSectionTitle,
      selectField: enSelectField,
      searchField: enSearchField,
      termsOfService2: enTermsOfService2,
      textField: enTextField
    },
    ko: {
      appBar: koAppBar,
      accessibility: koAccessibility,
      buttonAction: koButtonAction,
      buttonChip: koButtonChip,
      chip: koChip,
      headline: koHeadline,
      info: koInfo,
      listItem: koListItem,
      menu: koMenu,
      modal: koModal,
      naviItem: koNaviItem,
      termsOfService: koTermsOfService,
      sectionTitle: koSectionTitle,
      selectField: koSelectField,
      searchField: koSearchField,
      termsOfService2: koTermsOfService2,
      textField: koTextField
    }
  },
  lng: "ko",
  fallbackLng: "en",
  ns: [
    "appBar",
    "accessibility",
    "buttonAction",
    "buttonChip",
    "chip",
    "headline",
    "info",
    "listItem",
    "menu",
    "modal",
    "naviItem",
    "termsOfService",
    "sectionTitle",
    "selectField",
    "searchField",
    "termsOfService2",
    "textField"
  ],
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
