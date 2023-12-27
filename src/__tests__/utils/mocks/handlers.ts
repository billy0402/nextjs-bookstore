import type { HttpHandler } from 'msw';
import { http, passthrough } from 'msw';

import db from '@/__tests__/utils/mocks/responses/book';
import { BASE_API_URL } from '@/fixtures/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function apiUrl(path: string) {
  return `${BASE_API_URL}${path}`;
}

export const handlers: HttpHandler[] = [
  ...db.book.toHandlers('rest', BASE_API_URL),
  // http.get(apiUrl('/books'), () => {
  //   return HttpResponse.json();
  // }),
  http.get('*', () => {
    return passthrough();
  }),
];
