import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import db from '@/__tests__/utils/mocks/responses/book';
import type { Book } from '@/models/book';

import BookList from '.';

describe('BookList', () => {
  it('render book list', () => {
    // @ts-ignore
    const books: Book[] = db.book.getAll();

    const { container } = render(<BookList books={books} />);

    const items = container.getElementsByClassName('chakra-card');

    expect(items.length).toBe(1);
  });
});
