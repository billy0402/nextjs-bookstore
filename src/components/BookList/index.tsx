import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

import type { Book } from '@/models/book';

type Props = {
  books: Book[] | undefined;
};

const BookList = ({ books }: Props) => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {books?.length ? (
        books?.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`}>
            <Card as='article' height='100%'>
              <CardBody as='section'>
                <Stack as='article' spacing='3'>
                  <section
                    className='image-container'
                    style={{ height: '200px' }}
                  >
                    <Image
                      src={
                        book.imageUrl ??
                        '/images/ngnl/Light_Novel_Volume_1_Cover.jpeg'
                      }
                      alt={book.name}
                      fill
                    />
                  </section>
                  <Heading size='md'>{book.name}</Heading>
                  <Text>{book.classification.name}</Text>
                  <Text>
                    {book.authors.map((author) => author.name).join('、')}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    $ {book.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Link>
        ))
      ) : (
        <Text>沒有相關書籍</Text>
      )}
    </SimpleGrid>
  );
};

export default BookList;
