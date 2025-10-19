import AppBar from '@/components/common/AppBar';
import FullPageLoading from '@/components/common/FullPageLoading';
import Headline from '@/components/common/Headline';
import Navigation from '@/components/common/Navigation';
import UrlInput from '@/components/pages/Home/UrlInput';
import VideoDetail from '@/components/pages/Home/VideoDetail';
import { useVideos } from '@/hooks/useVideo';
import type { VideosResponse } from '@/types/video';
import {
  clearIdempotencyKey,
  IDEMPOTENCY_KEY_BODY_STORAGE_KEY,
  IDEMPOTENCY_KEY_STORAGE_KEY,
} from '@/utils/idempotencyKey';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const Home = () => {
  const { t } = useTranslation(['appBar', 'headline']);
  const [videoData, setVideoData] = useState<VideosResponse | null>(null);
  const [analysisJobId, setAnalysisJobId] = useState<string | null>(null);
  const { mutateAsync, isPending, reset } = useVideos();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const savedJobId = sessionStorage.getItem(IDEMPOTENCY_KEY_STORAGE_KEY);
    if (savedJobId) {
      setAnalysisJobId(savedJobId);
    }
  }, []);

  useEffect(() => {
    if (!analysisJobId) return;

    const body = sessionStorage.getItem(IDEMPOTENCY_KEY_BODY_STORAGE_KEY);
    if (body) {
      handleSearch(JSON.parse(body).youtubeUrl);
    } else {
      setAnalysisJobId(null);
      clearIdempotencyKey();
    }
  }, [analysisJobId]);

  const handleSearch = async (url: string) => {
    if (isPending) return null;

    abortControllerRef.current = new AbortController();

    try {
      const response = await mutateAsync({
        youtubeUrl: url,
        signal: abortControllerRef.current.signal,
      });

      if (response.status === 200) {
        setVideoData(response.data);
        setAnalysisJobId(null);
        clearIdempotencyKey();
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'CanceledError') {
          toast.info('분석 대기를 중단했습니다.');
        } else {
          toast.error('분석에 실패했습니다.');
        }
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.');
      }

      setAnalysisJobId(null);
      clearIdempotencyKey();
    }
  };

  const handleCancelClientOnly = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    reset();

    setAnalysisJobId(null);
    clearIdempotencyKey();
  };

  if (videoData)
    return (
      <VideoDetail
        data={videoData.data}
        onBack={() => setVideoData(null)}
      />
    );

  return (
    <div className="notranslate relative h-dvh w-[360px] bg-[url('/bg.png')] bg-center">
      <AppBar title={t('appBar_navi-01')} />

      <div className='mt-[155px] flex flex-col items-center gap-[35px]'>
        <Headline
          title={t('headline:headline_title_home')}
          className='w-[250px] whitespace-pre'
          description={t('headline:headline_supportingText_home')}
          descriptionClassName='text-sy_label-normal'
        />

        <UrlInput
          onSearch={handleSearch}
          isPending={isPending || !!analysisJobId}
        />
        {(isPending || !!analysisJobId) && (
          <FullPageLoading>
            <div className='text-center'>
              <p className='text-white'>
                분석 결과를 실시간으로 받아오는 중...
              </p>
              <button
                onClick={handleCancelClientOnly}
                className='mt-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600'
              >
                중단하기
              </button>
            </div>
          </FullPageLoading>
        )}
      </div>

      <Navigation className='fixed bottom-0' />
    </div>
  );
};

export default Home;
