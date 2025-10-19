import { v4 as uuidv4 } from 'uuid';

export const IDEMPOTENCY_KEY_STORAGE_KEY = 'idempotencyKey';
export const IDEMPOTENCY_KEY_BODY_STORAGE_KEY = 'idempotencyKey-body';

export const getOrCreateIdempotencyKey = (body?: unknown) => {
  let key = sessionStorage.getItem(IDEMPOTENCY_KEY_STORAGE_KEY);
  if (!key) {
    key = uuidv4();
    sessionStorage.setItem(IDEMPOTENCY_KEY_STORAGE_KEY, key);
    if (body) {
      sessionStorage.setItem(
        IDEMPOTENCY_KEY_BODY_STORAGE_KEY,
        JSON.stringify(body)
      );
    }
  }
  return key;
};

export const clearIdempotencyKey = () => {
  sessionStorage.removeItem(IDEMPOTENCY_KEY_STORAGE_KEY);
  sessionStorage.removeItem(IDEMPOTENCY_KEY_BODY_STORAGE_KEY);
};
