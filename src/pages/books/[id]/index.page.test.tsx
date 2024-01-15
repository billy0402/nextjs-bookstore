import { render, screen } from '@testing-library/react';

import db from '@/__tests__/utils/mocks/responses/book';
import { mockRouter } from '@/__tests__/utils/next-router';
import type { Book } from '@/models/book';

import BookDetailPage from './index.page';
import useBookDetailPageViewModel from './useBookDetailPageViewModel';

jest.mock('./useBookDetailPageViewModel');
const mockUseBookDetailPageViewModel = jest.mocked(useBookDetailPageViewModel);

describe('BookDetailPage', () => {
  beforeEach(() => {
    mockRouter.mockReturnValue({ route: '/books/[id]', query: { id: '1' } });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loading box when data is loading', () => {
    mockUseBookDetailPageViewModel.mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
    });

    render(<BookDetailPage />);

    expect(screen.getByTestId('loading-box')).toBeInTheDocument();
  });

  it('renders book detail when data is loaded', () => {
    // @ts-ignore
    const book: Book = db.book.getAll()[0];

    mockUseBookDetailPageViewModel.mockReturnValue({
      data: book,
      error: null,
      isLoading: false,
    });

    render(<BookDetailPage />);

    expect(screen.getByText(book.name)).toBeInTheDocument();
    expect(screen.getByText(book.introduction)).toBeInTheDocument();
    expect(screen.getByText(book.classification.name)).toBeInTheDocument();
    book.tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
    book.authors.forEach((author) => {
      expect(screen.getByText(author.name)).toBeInTheDocument();
    });
    expect(screen.getByText(`$ ${book.price}`)).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const error = new Error('Failed to fetch book');

    mockUseBookDetailPageViewModel.mockReturnValue({
      data: undefined,
      error,
      isLoading: false,
    });

    render(<BookDetailPage />);

    expect(screen.getByText('Failed to fetch book')).toBeInTheDocument();
  });
});
