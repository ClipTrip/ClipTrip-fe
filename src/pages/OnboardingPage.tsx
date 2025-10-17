import ButtonActionFill from '@/components/common/ButtonActionFill';
import Headline from '@/components/common/Headline';
import Pagination from '@/components/common/Pagination';
import SelectLanguage from '@/components/pages/Onboarding/SelectLanguage';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ONBOARDING_IMG = [
  {
    src: '/illustration.png',
    alt: 'illustration',
    title: 'headline_title_onb-01',
  },
  {
    src: '/illustration_2.png',
    alt: 'illustration2',
    title: 'headline_title_onb-02',
  },
  {
    src: '/illustration_3.png',
    alt: 'illustration3',
    title: 'headline_title_onb-03',
  },
] as const;

const OnboardingPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [selectLanguage, setSelectLanguage] = useState(true);
  const { t } = useTranslation(['headline', 'buttonAction']);
  const navigate = useNavigate();

  const lang = document.documentElement.lang;

  const handleNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (!api) return;

    setTotalPage(api.scrollSnapList().length);
    setCurrentPage(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrentPage(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {selectLanguage ? (
        <SelectLanguage onSelect={() => setSelectLanguage(false)} />
      ) : (
        <Carousel
          setApi={setApi}
          className='notranslate w-[360px] pt-9'
          opts={{ watchDrag: true }}
        >
          <CarouselContent>
            {ONBOARDING_IMG.map(({ src, alt, title }) => (
              <CarouselItem key={src}>
                <div className='flex flex-col items-center'>
                  <img
                    src={src}
                    alt={alt}
                    className='mb-11 h-[384px] w-[360px] object-cover object-bottom'
                  />

                  <Headline
                    title={t(title)}
                    className={cn('w-[190px]', lang === 'en' && 'w-[200px]')}
                  />

                  <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    className='mb-[52px] mt-[18px]'
                  />

                  {currentPage !== totalPage && (
                    <ButtonActionFill
                      variant='neutral'
                      onClick={handleNext}
                    >
                      {t('buttonAction:button-action_next')}
                    </ButtonActionFill>
                  )}

                  {currentPage === totalPage && (
                    <>
                      <ButtonActionFill onClick={() => navigate('/login')}>
                        {t('buttonAction:button-action_start')}
                      </ButtonActionFill>
                      <button
                        onClick={() => navigate('/register')}
                        className='body_m-prominent text-sy_label-alternative h-12 w-[312px] cursor-pointer'
                      >
                        {t('buttonAction:button-action_signUp')}
                      </button>
                    </>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
};

export default OnboardingPage;
