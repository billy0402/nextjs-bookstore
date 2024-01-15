import { useRouter } from 'next/router';

import { useQueryDetail } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useBookDetailPageViewModel = () => {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const { data, error, isLoading } = useQueryDetail<Book>('books', id);

  return {
    data,
    error,
    isLoading,
  };
};

export default useBookDetailPageViewModel;
