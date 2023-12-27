import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import db from '@/__tests__/utils/mocks/responses/book';
import type { Book } from '@/models/book';

import BookList from '.';

describe('BookList', () => {
  it('render book list', () => {
    // @ts-ignore
    const books: Book[] = db.book.getAll();

    render(<BookList books={books} />);

    const items = screen.getAllByRole('listitem');

    expect(items.length).toBe(1);
  });
});
