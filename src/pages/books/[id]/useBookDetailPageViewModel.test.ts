import type { RenderHookResult } from '@testing-library/react';
import { renderHook, waitFor } from '@testing-library/react';

import type { AxiosError } from 'axios';
import { HttpStatusCode } from 'axios';

import db from '@/__tests__/utils/mocks/responses/book';
import { mockRouter } from '@/__tests__/utils/next-router';
import wrapper from '@/__tests__/utils/react-query';
import type { Book } from '@/models/book';

import useBookDetailPageViewModel from './useBookDetailPageViewModel';

describe('useBookDetailPageViewModel', () => {
  let viewModel: RenderHookResult<
    ReturnType<typeof useBookDetailPageViewModel>,
    Parameters<typeof useBookDetailPageViewModel>
  >;

  beforeEach(() => {
    // @ts-ignore
    const book: Book = db.book.getAll()[0];
    mockRouter.mockReturnValue({
      route: '/books/[id]',
      query: { id: book.id },
    });
    viewModel = renderHook(() => useBookDetailPageViewModel(), {
      wrapper,
    });
  });

  it('should initialize with empty values and no error', () => {
    // Arrange
    const { result } = viewModel;

    // Assert
    expect(result.current.data).toEqual(undefined);
    expect(result.current.error).toEqual(null);
    expect(result.current.isLoading).toEqual(true);
  });

  it('should get book', async () => {
    // Arrange
    const { result } = viewModel;
    // @ts-ignore
    const book: Book = db.book.getAll()[0];

    await waitFor(() => expect(result.current.data).not.toBe(undefined));

    // Assert
    expect(JSON.stringify(result.current.data)).toEqual(JSON.stringify(book));
    expect(result.current.error).toEqual(null);
    expect(result.current.isLoading).toEqual(false);
  });

  it('should get book when book is not found', async () => {
    // Arrange
    mockRouter.mockReturnValue({
      route: '/books/[id]',
      query: { id: 'uuid-is-not-exist' },
    });
    const { result } = viewModel;

    await waitFor(() => expect(result.current.isLoading).not.toBe(true));

    // Assert
    expect(result.current.data).toEqual(undefined);
    expect((result.current.error as AxiosError)?.response?.status).toEqual(
      HttpStatusCode.NotFound,
    );
    expect(result.current.isLoading).toEqual(false);
  });
});
