import { render, screen } from '@testing-library/react';

import db from '@/__tests__/utils/mocks/responses/book';
import { mockRouter } from '@/__tests__/utils/next-router';
import type { Book } from '@/models/book';

import HomePage from './index.page';
import useHomePageViewModel from './useHomePageViewModel';

jest.mock('./useHomePageViewModel');
const mockUseHomePageViewModel = jest.mocked(useHomePageViewModel);

describe('HomePage', () => {
  beforeEach(() => {
    mockRouter.mockReturnValue({ route: '/' });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loading box when data is loading', () => {
    mockUseHomePageViewModel.mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      nameRef: { current: null },
      search: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.getByTestId('loading-box')).toBeInTheDocument();
    expect(screen.queryByText('book-list')).not.toBeInTheDocument();
  });

  test('renders book list when data is loaded', () => {
    // @ts-ignore
    const books: Book[] = db.book.getAll();
    const firstBook = books[0];

    mockUseHomePageViewModel.mockReturnValue({
      data: books,
      error: null,
      isLoading: false,
      nameRef: { current: null },
      search: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.queryByText('loading-box')).not.toBeInTheDocument();
    expect(screen.getByTestId('book-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('book-item').length).toBe(books.length);
    expect(screen.getByText(firstBook.name)).toBeInTheDocument();
  });

  test('renders no data message when data is empty', () => {
    mockUseHomePageViewModel.mockReturnValue({
      data: [],
      error: null,
      isLoading: false,
      nameRef: { current: null },
      search: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.getByText('沒有相關書籍')).toBeInTheDocument();
  });

  test('renders error message when there is an error', () => {
    const error = new Error('Failed to fetch books');

    mockUseHomePageViewModel.mockReturnValue({
      data: undefined,
      error,
      isLoading: false,
      nameRef: { current: null },
      search: jest.fn(),
    });

    render(<HomePage />);

    expect(screen.getByText(error.message)).toBeInTheDocument();
  });
});
