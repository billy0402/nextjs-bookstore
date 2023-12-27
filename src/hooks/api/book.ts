import { useQuery } from '@tanstack/react-query';

import { apiBookList } from '@/services/book';

export const useQueryBookList = () => {
  return useQuery({
    queryKey: ['bookList'],
    queryFn: apiBookList,
    select: (data) => data.data,
  });
};
