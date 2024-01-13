import { createStandaloneToast } from '@chakra-ui/react';
import { QueryCache, QueryClient } from '@tanstack/react-query';

import { theme } from '@/fixtures/theme';

const { toast } = createStandaloneToast({ theme });

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast({
        status: 'error',
        title: 'Oops! Something went wrong!',
        description: error.message,
      });
    },
  }),
});
