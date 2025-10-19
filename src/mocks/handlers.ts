import { http, HttpResponse } from 'msw';
import { mockDb } from './state';
import { mockVideoResponse } from './mockData'; // 실제 데이터 구조를 가진 모의 데이터

export const handlers = [
  // 1. 영상 분석 요청을 처리하는 POST 핸들러
  http.post('/api/v1/videos', async ({ request }) => {
    const idempotencyKey = request.headers.get('Idempotency-Key');
    if (!idempotencyKey) return new HttpResponse(null, { status: 400 });

    // Case 1: 새로운 작업일 때 (202 Accepted)
    console.log(`[MSW] Mocking response: 202 Accepted (New Job)`);
    mockDb.set(idempotencyKey, { status: 'PROCESSING' });

    // 4초 뒤, '완료' 상태와 함께 모의 데이터를 저장
    setTimeout(() => {
      mockDb.set(idempotencyKey, {
        status: 'COMPLETED',
        result: mockVideoResponse,
      });
      console.log(mockDb);
    }, 4000);

    return HttpResponse.json({ jobId: idempotencyKey }, { status: 202 });
  }),

  // 2. SSE 연결을 처리하는 GET 핸들러
  http.get('/api/analysis-events/:jobId', ({ params }) => {
    const { jobId } = params;

    const stream = new ReadableStream({
      start(controller) {
        console.log(`[MSW] SSE connection opened for job ${jobId}.`);

        // 4초 뒤에 'completed' 이벤트와 함께 최종 데이터 전송
        const intervalId = setInterval(() => {
          if (mockDb.get(jobId as string)?.status !== 'COMPLETED') {
            console.log(`[MSW] SSE processing...`);
            return;
          }

          const completedData = mockDb.get(jobId as string)?.result;
          const eventString = `event: completed\ndata: ${JSON.stringify(completedData || {})}\n\n`;
          controller.enqueue(new TextEncoder().encode(eventString));
          controller.close(); // 스트림 종료
          console.log(`[MSW] SSE connection closed for job ${jobId}.`);
          clearInterval(intervalId);
        }, 1000);
      },
      cancel() {
        console.log(`[MSW] SSE connection cancelled for job ${jobId}.`);
      },
    });

    return new HttpResponse(stream, {
      headers: { 'Content-Type': 'text/event-stream' },
    });
  }),
];
