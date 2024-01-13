import { Container } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
  return (
    <Container as='article' maxWidth='100%' padding='md'>
      {children}
    </Container>
  );
};

export default ClientLayout;
