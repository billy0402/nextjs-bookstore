import type { RenderHookResult } from '@testing-library/react';
import { renderHook, waitFor } from '@testing-library/react';

import type { AxiosError } from 'axios';
import { HttpStatusCode } from 'axios';

import { mockErrorHandler } from '@/__tests__/utils/mocks/handlers';
import db from '@/__tests__/utils/mocks/responses/book';
import { server } from '@/__tests__/utils/mocks/server';
import { mockRouter } from '@/__tests__/utils/next-router';
import wrapper from '@/__tests__/utils/react-query';
import type { Book } from '@/models/book';

import useHomePageViewModel from './useHomePageViewModel';

describe('useHomePageViewModel', () => {
  let viewModel: RenderHookResult<
    ReturnType<typeof useHomePageViewModel>,
    Parameters<typeof useHomePageViewModel>
  >;

  beforeEach(() => {
    mockRouter.mockReturnValue({ route: '/' });
    viewModel = renderHook(() => useHomePageViewModel(), { wrapper });
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
    const books: Book = db.book.getAll();

    await waitFor(() => expect(result.current.isLoading).not.toBe(true));

    // Assert
    expect(JSON.stringify(result.current.data)).toEqual(JSON.stringify(books));
    expect(result.current.error).toEqual(null);
    expect(result.current.isLoading).toEqual(false);
  });

  it('should show error when get list error', async () => {
    // Arrange
    server.use(mockErrorHandler('/books'));
    viewModel = renderHook(() => useHomePageViewModel(), { wrapper });
    const { result } = viewModel;

    await waitFor(() => expect(result.current.isLoading).not.toBe(true));

    // Assert
    expect(result.current.data).toEqual(undefined);
    expect((result.current.error as AxiosError)?.response?.status).toEqual(
      HttpStatusCode.InternalServerError,
    );
    expect(result.current.isLoading).toEqual(false);
  });

  it('should get empty list when book name can not be found', async () => {
    // Arrange
    mockRouter.mockReturnValue({
      route: '/',
      query: { name: 'name-is-not-exist' },
    });
    const { result } = viewModel;

    await waitFor(() => expect(result.current.isLoading).not.toBe(true));

    // Assert
    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toEqual(false);
  });
});
