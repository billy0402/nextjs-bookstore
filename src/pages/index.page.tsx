import type { NextPage } from 'next';

import { Button, Flex, Heading, Input } from '@chakra-ui/react';

import BookList from '@/components/BookList';
import LoadingBox from '@/components/LoadingBox';
import { enterEvent } from '@/helpers/evnet';

import useHomePageViewModel from './useHomePageViewModel';

const HomePage: NextPage = () => {
  const { data, error, isLoading, nameRef, search } = useHomePageViewModel();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Heading as='h1'>Book Store</Heading>
      <Flex paddingY='sm'>
        <Input
          ref={nameRef}
          placeholder='請輸入書名'
          onKeyDown={(e) => enterEvent(e, search)}
        />
        <Button colorScheme='blue' onClick={search}>
          搜尋
        </Button>
      </Flex>
      <LoadingBox isLoading={isLoading}>
        <BookList books={data} />
      </LoadingBox>
    </>
  );
};

export default HomePage;
