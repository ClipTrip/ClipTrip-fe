import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAppBar from '@/locales/en/appBar.json';
import enAccessibility from '@/locales/en/accessibility.json';
import enButtonAction from '@/locales/en/buttonAction.json';
import enButtonChip from '@/locales/en/buttonChip.json';
import enChip from '@/locales/en/chip.json';
import enHeadline from '@/locales/en/headline.json';
import enInfo from '@/locales/en/info.json';
import enListItem from '@/locales/en/listItem.json';
import enMenu from '@/locales/en/menu.json';
import enModal from '@/locales/en/modal.json';
import enNaviItem from '@/locales/en/naviItem.json';
import enTermsOfService from '@/locales/en/termsOfService.json';
import enSectionTitle from '@/locales/en/sectionTitle.json';
import enSelectField from '@/locales/en/selectField.json';
import enSearchField from '@/locales/en/searchField.json';
import enTermsOfService2 from '@/locales/en/termsOfService2.json';
import enTextField from '@/locales/en/textField.json';
import enCategory from '@/locales/en/category.json';
import enCalendar from '@/locales/en/calendar.json';
import enToast from '@/locales/en/toast.json';

import koAppBar from '@/locales/ko/appBar.json';
import koAccessibility from '@/locales/ko/accessibility.json';
import koButtonAction from '@/locales/ko/buttonAction.json';
import koButtonChip from '@/locales/ko/buttonChip.json';
import koChip from '@/locales/ko/chip.json';
import koHeadline from '@/locales/ko/headline.json';
import koInfo from '@/locales/ko/info.json';
import koListItem from '@/locales/ko/listItem.json';
import koMenu from '@/locales/ko/menu.json';
import koModal from '@/locales/ko/modal.json';
import koNaviItem from '@/locales/ko/naviItem.json';
import koTermsOfService from '@/locales/ko/termsOfService.json';
import koSectionTitle from '@/locales/ko/sectionTitle.json';
import koSelectField from '@/locales/ko/selectField.json';
import koSearchField from '@/locales/ko/searchField.json';
import koTermsOfService2 from '@/locales/ko/termsOfService2.json';
import koTextField from '@/locales/ko/textField.json';
import koCategory from '@/locales/ko/category.json';
import koCalendar from '@/locales/ko/calendar.json';
import koToast from '@/locales/ko/toast.json';

import jaAppBar from '@/locales/ja/appBar.json';
import jaAccessibility from '@/locales/ja/accessibility.json';
import jaButtonAction from '@/locales/ja/buttonAction.json';
import jaButtonChip from '@/locales/ja/buttonChip.json';
import jaChip from '@/locales/ja/chip.json';
import jaHeadline from '@/locales/ja/headline.json';
import jaInfo from '@/locales/ja/info.json';
import jaListItem from '@/locales/ja/listItem.json';
import jaMenu from '@/locales/ja/menu.json';
import jaModal from '@/locales/ja/modal.json';
import jaNaviItem from '@/locales/ja/naviItem.json';
import jaTermsOfService from '@/locales/ja/termsOfService.json';
import jaSectionTitle from '@/locales/ja/sectionTitle.json';
import jaSelectField from '@/locales/ja/selectField.json';
import jaSearchField from '@/locales/ja/searchField.json';
import jaTermsOfService2 from '@/locales/ja/termsOfService2.json';
import jaTextField from '@/locales/ja/textField.json';
import jaCategory from '@/locales/ja/category.json';
import jaCalendar from '@/locales/ja/calendar.json';
import jaToast from '@/locales/ja/toast.json';

import zhAppBar from '@/locales/zh/appBar.json';
import zhAccessibility from '@/locales/zh/accessibility.json';
import zhButtonAction from '@/locales/zh/buttonAction.json';
import zhButtonChip from '@/locales/zh/buttonChip.json';
import zhChip from '@/locales/zh/chip.json';
import zhHeadline from '@/locales/zh/headline.json';
import zhInfo from '@/locales/zh/info.json';
import zhListItem from '@/locales/zh/listItem.json';
import zhMenu from '@/locales/zh/menu.json';
import zhModal from '@/locales/zh/modal.json';
import zhNaviItem from '@/locales/zh/naviItem.json';
import zhTermsOfService from '@/locales/zh/termsOfService.json';
import zhSectionTitle from '@/locales/zh/sectionTitle.json';
import zhSelectField from '@/locales/zh/selectField.json';
import zhSearchField from '@/locales/zh/searchField.json';
import zhTermsOfService2 from '@/locales/zh/termsOfService2.json';
import zhTextField from '@/locales/zh/textField.json';
import zhCategory from '@/locales/zh/category.json';
import zhCalendar from '@/locales/zh/calendar.json';
import zhToast from '@/locales/zh/toast.json';

import type { LanguageCode } from '@/types/type';

export const setLanguage = (lang: LanguageCode) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('language', lang);
  window.dispatchEvent(new Event('languageChange'));
};

export const getLanguage = () =>
  localStorage.getItem('language') || document.documentElement.lang;

const lang = getLanguage();

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
      textField: enTextField,
      category: enCategory,
      calendar: enCalendar,
      toast: enToast,
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
      textField: koTextField,
      category: koCategory,
      calendar: koCalendar,
      toast: koToast,
    },
    ja: {
      appBar: jaAppBar,
      accessibility: jaAccessibility,
      buttonAction: jaButtonAction,
      buttonChip: jaButtonChip,
      chip: jaChip,
      headline: jaHeadline,
      info: jaInfo,
      listItem: jaListItem,
      menu: jaMenu,
      modal: jaModal,
      naviItem: jaNaviItem,
      termsOfService: jaTermsOfService,
      sectionTitle: jaSectionTitle,
      selectField: jaSelectField,
      searchField: jaSearchField,
      termsOfService2: jaTermsOfService2,
      textField: jaTextField,
      category: jaCategory,
      calendar: jaCalendar,
      toast: jaToast,
    },
    zh: {
      appBar: zhAppBar,
      accessibility: zhAccessibility,
      buttonAction: zhButtonAction,
      buttonChip: zhButtonChip,
      chip: zhChip,
      headline: zhHeadline,
      info: zhInfo,
      listItem: zhListItem,
      menu: zhMenu,
      modal: zhModal,
      naviItem: zhNaviItem,
      termsOfService: zhTermsOfService,
      sectionTitle: zhSectionTitle,
      selectField: zhSelectField,
      searchField: zhSearchField,
      termsOfService2: zhTermsOfService2,
      textField: zhTextField,
      category: zhCategory,
      calendar: zhCalendar,
      toast: zhToast,
    },
  },
  lng: lang,
  fallbackLng: 'en',
  ns: [
    'appBar',
    'accessibility',
    'buttonAction',
    'buttonChip',
    'chip',
    'headline',
    'info',
    'listItem',
    'menu',
    'modal',
    'naviItem',
    'termsOfService',
    'sectionTitle',
    'selectField',
    'searchField',
    'termsOfService2',
    'textField',
  ],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
