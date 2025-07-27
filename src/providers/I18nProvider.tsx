import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return <>{children}</>;
};

export default I18nProvider;
