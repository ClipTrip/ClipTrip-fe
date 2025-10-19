import type { VideosResponse } from '@/types/video';

export const mockVideoResponse: VideosResponse = {
  httpStatusCode: 200,
  message: '영상 분석 및 장소 추출에 성공했습니다.',
  resultType: 'SUCCESS',

  data: {
    videoResponse: {
      videoId: 101,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg',
      summary:
        '이 영상은 서울의 맛집과 명소를 탐방하는 내용을 담고 있습니다. 첫 번째 장소인 광화문에서 시작하여, 유명한 한식당을 방문하고, 마지막으로 남산 타워의 야경을 즐기는 코스입니다.',
    },
    scheduleInfoResponse: {
      id: 202,
      name: '서울 미식 여행',
      description:
        '유튜브 영상 속 장소를 따라가는 하루짜리 서울 맛집 투어입니다.',
      placeList: [
        {
          placeId: 301,
          placeName: '토속촌 삼계탕',
          roadAddress: '서울 종로구 자하문로5길 5',
          phone: '02-737-7444',
          type: 'RESTAURANT',
          longitude: 126.9722,
          latitude: 37.579,
          translatedPlaceName: 'Tosokchon Samgyetang',
          translatedRoadAddress: '5, Jahamun-ro 5-gil, Jongno-gu, Seoul',
          language: 'KOREAN',
          kakaoPlaceId: '8038896',
          bookmarkedIdList: [1, 5, 12],
        },
        {
          placeId: 302,
          placeName: 'N서울타워',
          roadAddress: '서울 용산구 남산공원길 105',
          phone: '02-3455-9277',
          type: 'TOURIST_ATTRACTION',
          longitude: 126.9882,
          latitude: 37.5512,
          translatedPlaceName: 'N Seoul Tower',
          translatedRoadAddress: '105, Namsangongwon-gil, Yongsan-gu, Seoul',
          language: 'KOREAN',
          kakaoPlaceId: '8038896',
          bookmarkedIdList: [],
        },
        {
          placeId: 303,
          placeName: '스타벅스 경복궁역점',
          roadAddress: '서울 종로구 사직로 130',
          phone: '1522-3232',
          type: 'CAFE',
          longitude: 126.9734,
          latitude: 37.5768,
          translatedPlaceName: null,
          translatedRoadAddress: null,
          language: 'KOREAN',
          kakaoPlaceId: '26569943',
          bookmarkedIdList: [22],
        },
      ],
    },
  },
};
