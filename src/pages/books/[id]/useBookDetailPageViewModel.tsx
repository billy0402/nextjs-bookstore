import { useRouter } from 'next/router';

import { ApiModule } from '@/enums/api-module';
import { useQueryDetail } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useBookDetailPageViewModel = () => {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const { data, error, isLoading } = useQueryDetail<Book>(ApiModule.books, id);

  return {
    data,
    error,
    isLoading,
  };
};

export default useBookDetailPageViewModel;
