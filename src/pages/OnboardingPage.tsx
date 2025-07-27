import ButtonActionFill from "@/components/common/ButtonActionFill";
import Headline from "@/components/common/Headline";
import Pagination from "@/components/common/Pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ONBOARDING_IMG = [
  { src: "/illustration.png", alt: "illustration", title: "headline_title_onb-01" },
  { src: "/illustration_2.png", alt: "illustration2", title: "headline_title_onb-02" },
  { src: "/illustration_3.png", alt: "illustration3", title: "headline_title_onb-03" }
] as const;

const OnboardingPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const { t, i18n } = useTranslation(["headline", "buttonAction"]);
  const navigate = useNavigate();

  const lang = document.documentElement.lang;

  const handleNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setTotalPage(api.scrollSnapList().length);
    setCurrentPage(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentPage(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Carousel setApi={setApi} className="pt-9 w-[360px]" opts={{ watchDrag: true }}>
      <CarouselContent>
        {ONBOARDING_IMG.map(({ src, alt, title }) => (
          <CarouselItem key={src}>
            <div className="flex flex-col items-center ">
              <img
                src={src}
                alt={alt}
                className="w-[360px] h-[384px] object-cover object-bottom mb-11"
              />

              <Headline
                title={t(title)}
                className={cn("w-[190px]", lang === "en" && "w-[200px]")}
              />

              <Pagination
                totalPage={totalPage}
                currentPage={currentPage}
                className="mt-[18px] mb-[52px]"
              />

              {currentPage !== totalPage && (
                <ButtonActionFill variant={"neutral"} onClick={handleNext}>
                  {t("buttonAction:button-action_next")}
                </ButtonActionFill>
              )}

              {currentPage === totalPage && (
                <>
                  <ButtonActionFill onClick={() => navigate("/login")}>
                    {t("buttonAction:button-action_start")}
                  </ButtonActionFill>
                  <button className="body_m-prominent w-[312px] h-12 cursor-pointer text-sy_label-alternative">
                    {t("buttonAction:button-action_signUp")}
                  </button>
                </>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default OnboardingPage;
