import { useQueryList } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useAdminBookListPageViewModel = () => {
  const { data, isLoading } = useQueryList<Book[]>('books');

  return {
    data,
    isLoading,
  };
};

export default useAdminBookListPageViewModel;
