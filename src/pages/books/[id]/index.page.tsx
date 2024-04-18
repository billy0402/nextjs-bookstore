import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

import LoadingBox from '@/components/LoadingBox';

import useBookDetailPageViewModel from './useBookDetailPageViewModel';

const BookDetailPage: NextPage = () => {
  const { data: book, error, isLoading } = useBookDetailPageViewModel();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <LoadingBox isLoading={isLoading}>
      <Link href='/'>
        <Button colorScheme='blue' marginBottom='sm'>
          &lt;&lt; 返回
        </Button>
      </Link>
      <Card padding='md'>
        <CardBody>
          <Stack spacing='3'>
            <section className='image-container' style={{ height: '200px' }}>
              <Image
                src={book?.imageUrl ?? '/images/ngnl/Unknown.jpg'}
                alt={book?.name ?? 'book cover'}
                fill
              />
            </section>
            <Heading size='md'>{book?.name}</Heading>
            <Text>{book?.introduction}</Text>
            <Text>{book?.classification.name}</Text>
            <HStack spacing={4}>
              {book?.tags.map((tag) => (
                <Tag key={tag.id} variant='solid' colorScheme='teal'>
                  {tag.name}
                </Tag>
              ))}
            </HStack>
            <Text>{book?.authors.map((author) => author.name).join('、')}</Text>
            <Text color='blue.600' fontSize='2xl'>
              $ {book?.price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </LoadingBox>
  );
};

export default BookDetailPage;
