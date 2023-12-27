import { renderHook, waitFor } from '@testing-library/react';

import wrapper from '@/__tests__/utils/react-query';
import type { Book } from '@/models/book';

import { BASE_API_URL } from '@/fixtures/constants';
import { useQueryBookList } from './book';

describe('query book', () => {
  test('receives a mocked response to a REST API request', async () => {
    const response = await fetch(`${BASE_API_URL}/books`);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(((await response.json()) as Book[])[0].name).toBe(
      'NO GAME NO LIFE 遊戲人生(01)',
    );
  });

  test('success query book', async () => {
    const { result } = renderHook(() => useQueryBookList(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.[0].name).toBe('NO GAME NO LIFE 遊戲人生(01)');
  });
});
