import { useQueryList } from '@/hooks/api/crud';
import type { Author, Classification, Publisher, Tag } from '@/models/book';

const useApiUtils = () => {
  const authorList = useQueryList<Author[]>(
    'authors',
    {},
    { refetchOnMount: false },
  );
  const publisherList = useQueryList<Publisher[]>(
    'publishers',
    {},
    { refetchOnMount: false },
  );
  const classificationList = useQueryList<Classification[]>(
    'classifications',
    {},
    { refetchOnMount: false },
  );
  const tagList = useQueryList<Tag[]>('tags', {}, { refetchOnMount: false });

  return {
    authorList,
    publisherList,
    classificationList,
    tagList,
  };
};

export default useApiUtils;
