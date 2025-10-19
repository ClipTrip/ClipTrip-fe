import type { JsonBodyType } from 'msw';

interface MockDbState {
  status: 'PROCESSING' | 'COMPLETED';
  result?: JsonBodyType;
}

export const mockDb = new Map<string, MockDbState>();
