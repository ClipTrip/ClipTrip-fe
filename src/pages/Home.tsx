import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <h1 className="font-family-brand">{t("welcome")}</h1>
      <p>{t("description")}</p>
      <button onClick={() => i18n.changeLanguage("en")}>영어로</button>
      <button onClick={() => i18n.changeLanguage("ko")}>한국어로</button>
    </div>
  );
};

export default Home;
