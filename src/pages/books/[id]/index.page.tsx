import type { NextPage } from 'next';
import Link from 'next/link';

const BookDetailPage: NextPage = () => {
  return (
    <article>
      <h1>BookDetailPage</h1>
      <Link href='/'>Back to list</Link>
    </article>
  );
};

export default BookDetailPage;
