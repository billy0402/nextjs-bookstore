import type { NextPage } from 'next';

import DI from '@/DI/ioc';
import BookList from '@/components/BookList';
import LoadingBox from '@/components/LoadingBox';

const HomePage: NextPage = () => {
  const { data, isLoading } = DI.resolve('homePageViewModel');

  return (
    <>
      <h1>Hello, world!</h1>
      <LoadingBox isLoading={isLoading}>
        <BookList books={data} />
      </LoadingBox>
    </>
  );
};

export default HomePage;
