import { useQuery } from '@tanstack/react-query';

import { ApiModule } from '@/enums/api-module';
import { apiBookDetail, apiBookList } from '@/services/book';

const moduleName = ApiModule.books;
const bookQueryKeys = {
  list: (query: { [key: string]: any } = {}) =>
    [moduleName, 'list', query] as const,
  detail: (id: string) => [moduleName, 'detail', id] as const,
};

export const useQueryBookList = (query: { [key: string]: any } = {}) => {
  return useQuery({
    queryKey: bookQueryKeys.list(query),
    queryFn: () => apiBookList(query),
  });
};

export const useQueryBookDetail = (id: string) => {
  return useQuery({
    queryKey: bookQueryKeys.detail(id),
    queryFn: () => apiBookDetail(id),
  });
};
