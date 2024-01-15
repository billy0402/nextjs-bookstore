import { HttpStatusCode } from 'axios';
import type { HttpHandler } from 'msw';
import { HttpResponse, http, passthrough } from 'msw';

import db from '@/__tests__/utils/mocks/responses/book';
import { BASE_API_URL } from '@/fixtures/constants';

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

export function mockErrorHandler(
  url: string,
  statusCode = HttpStatusCode.InternalServerError,
) {
  return http.get(
    apiUrl(url),
    () => new HttpResponse(undefined, { status: statusCode }),
  );
}
