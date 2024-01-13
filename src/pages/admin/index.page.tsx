import type { NextPage } from 'next';

import Link from 'next/link';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

const modules = [
  {
    name: '書籍',
    href: 'books',
    icon: '',
  },
];

const AdminHomePage: NextPage = () => {
  return (
    <>
      <Heading marginBottom='sm'>AdminHomePage</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {modules.map(({ name, href }) => (
          <Link key={name} href={`/admin/${href}`}>
            <Box
              color='white'
              bg='blue.500'
              fontSize='1.5rem'
              textAlign='center'
              padding='md'
              borderRadius='lg'
            >
              {name}
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AdminHomePage;
