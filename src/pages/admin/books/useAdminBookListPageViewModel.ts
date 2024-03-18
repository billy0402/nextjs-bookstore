import { ApiModule } from '@/enums/api-module';
import { useQueryList } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useAdminBookListPageViewModel = () => {
  const { data, isLoading } = useQueryList<Book[]>(ApiModule.books);

  return {
    data,
    isLoading,
  };
};

export default useAdminBookListPageViewModel;
