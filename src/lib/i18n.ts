import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enAppBar from "@/locales/en/appBar.json";
import enAccessibility from "@/locales/en/accessibility.json";
import enButtonAction from "@/locales/en/buttonAction.json";
import enButtonChip from "@/locales/en/buttonChip.json";
import enChip from "@/locales/en/chip.json";
import enHeadline from "@/locales/en/headline.json";
import enInfo from "@/locales/en/info.json";
import enListItem from "@/locales/en/listItem.json";
import enMenu from "@/locales/en/menu.json";
import enModal from "@/locales/en/modal.json";
import enNaviItem from "@/locales/en/naviItem.json";
import enTermsOfService from "@/locales/en/termsOfService.json";
import enSectionTitle from "@/locales/en/sectionTitle.json";
import enSelectField from "@/locales/en/selectField.json";
import enSearchField from "@/locales/en/searchField.json";
import enTermsOfService2 from "@/locales/en/termsOfService2.json";
import enTextField from "@/locales/en/textField.json";

import koAppBar from "@/locales/ko/appBar.json";
import koAccessibility from "@/locales/ko/accessibility.json";
import koButtonAction from "@/locales/ko/buttonAction.json";
import koButtonChip from "@/locales/ko/buttonChip.json";
import koChip from "@/locales/ko/chip.json";
import koHeadline from "@/locales/ko/headline.json";
import koInfo from "@/locales/ko/info.json";
import koListItem from "@/locales/ko/listItem.json";
import koMenu from "@/locales/ko/menu.json";
import koModal from "@/locales/ko/modal.json";
import koNaviItem from "@/locales/ko/naviItem.json";
import koTermsOfService from "@/locales/ko/termsOfService.json";
import koSectionTitle from "@/locales/ko/sectionTitle.json";
import koSelectField from "@/locales/ko/selectField.json";
import koSearchField from "@/locales/ko/searchField.json";
import koTermsOfService2 from "@/locales/ko/termsOfService2.json";
import koTextField from "@/locales/ko/textField.json";

const lang = document.documentElement.lang;

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
  lng: lang,
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
