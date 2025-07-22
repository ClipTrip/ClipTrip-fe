import "i18next";
import appBar from "@/locales/ko/appBar.json";
import accessibility from "@/locales/ko/accessibility.json";
import buttonAction from "@/locales/ko/buttonAction.json";
import buttonChip from "@/locales/ko/buttonChip.json";
import chip from "@/locales/ko/chip.json";
import headline from "@/locales/ko/headline.json";
import info from "@/locales/ko/info.json";
import listItem from "@/locales/ko/listItem.json";
import menu from "@/locales/ko/menu.json";
import modal from "@/locales/ko/modal.json";
import naviItem from "@/locales/ko/naviItem.json";
import termsOfService from "@/locales/ko/termsOfService.json";
import sectionTitle from "@/locales/ko/sectionTitle.json";
import selectField from "@/locales/ko/selectField.json";
import searchField from "@/locales/ko/searchField.json";
import termsOfService2 from "@/locales/ko/termsOfService2.json";
import textField from "@/locales/ko/textField.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      appBar: typeof appBar;
      accessibility: typeof accessibility;
      buttonAction: typeof buttonAction;
      buttonChip: typeof buttonChip;
      chip: typeof chip;
      headline: typeof headline;
      info: typeof info;
      listItem: typeof listItem;
      menu: typeof menu;
      modal: typeof modal;
      naviItem: typeof naviItem;
      termsOfService: typeof termsOfService;
      sectionTitle: typeof sectionTitle;
      selectField: typeof selectField;
      searchField: typeof searchField;
      termsOfService2: typeof termsOfService2;
      textField: typeof textField;
    };
  }
}
