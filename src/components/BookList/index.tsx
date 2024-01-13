import Link from 'next/link';

import type { Book } from '@/models/book';

type Props = {
  books: Book[] | undefined;
};

const BookList = ({ books }: Props) => {
  return (
    <ul>
      {books?.map((book) => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`}>{book.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
