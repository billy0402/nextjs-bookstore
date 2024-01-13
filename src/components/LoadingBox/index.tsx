import { Flex, Spinner } from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

const LoadingBox = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Spinner size='xl' />
      </Flex>
    );
  }

  return children;
};

export default LoadingBox;
