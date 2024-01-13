import { useRouter } from 'next/router';

import { useQueryDetail } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useBookDetailPageViewModel = () => {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const { data, isLoading } = useQueryDetail<Book>('books', id);

  return {
    data,
    isLoading,
  };
};

export default useBookDetailPageViewModel;
