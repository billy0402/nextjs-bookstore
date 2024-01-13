import { Container } from '@chakra-ui/react';

import useApiUtils from '@/hooks/api/utils';

type Props = {
  children?: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  useApiUtils();

  return (
    <Container as='article' maxWidth='100%' padding='md'>
      {children}
    </Container>
  );
};

export default AdminLayout;
