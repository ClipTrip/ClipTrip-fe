import AppBar from "@/components/common/AppBar";
import Headline from "@/components/common/Headline";
import Navigation from "@/components/common/Navigation";
import UrlInput from "@/components/pages/Home/UrlInput";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["appBar", "headline"]);

  return (
    <div className="relative w-[360px] h-dvh bg-[url('/bg.png')] bg-center">
      <AppBar title={t("appBar_navi-01")} />

      <div className="mt-[155px] flex flex-col items-center gap-[35px]">
        <Headline
          title={t("headline:headline_title_home")}
          className="w-[250px]"
          description={t("headline:headline_supportingText_home")}
          descriptionClassName="text-sy_label-normal"
        />

        <UrlInput />
      </div>

      <Navigation className="fixed bottom-0" />
    </div>
  );
};

export default Home;
