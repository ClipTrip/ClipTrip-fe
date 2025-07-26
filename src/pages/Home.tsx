import AppBar from "@/components/common/AppBar";
import Headline from "@/components/common/Headline";
import Navigation from "@/components/common/Navigation";
import UrlInput from "@/components/pages/Home/UrlInput";
import VideoDetail from "@/components/pages/Home/VideoDetail";
import { useVideos } from "@/hooks/useVideo";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["appBar", "headline"]);
  const [showVideoDetail, setShowVideoDetail] = useState(true);
  const { mutateAsync, isPending, data: resData } = useVideos();

  const handleVideoSuccess = (success: boolean) => setShowVideoDetail(success);

  const handleSearch = async (url: string) => {
    if (isPending) return null;

    await mutateAsync({ youtubeUrl: url }, { onSuccess: () => handleVideoSuccess(true) });
  };

  if (showVideoDetail && resData)
    return <VideoDetail data={resData.data} onBack={() => handleVideoSuccess(false)} />;

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

        <UrlInput onSearch={handleSearch} isPending={isPending} />
      </div>

      <Navigation className="fixed bottom-0" />
    </div>
  );
};

export default Home;
