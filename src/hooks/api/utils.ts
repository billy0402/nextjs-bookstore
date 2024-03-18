import { ApiModule } from '@/enums/api-module';
import { useQueryList } from '@/hooks/api/crud';
import type { Author, Classification, Publisher, Tag } from '@/models/book';

const useApiUtils = () => {
  const authorList = useQueryList<Author[]>(
    ApiModule.authors,
    {},
    { refetchOnMount: false },
  );
  const publisherList = useQueryList<Publisher[]>(
    ApiModule.publishers,
    {},
    { refetchOnMount: false },
  );
  const classificationList = useQueryList<Classification[]>(
    ApiModule.classifications,
    {},
    { refetchOnMount: false },
  );
  const tagList = useQueryList<Tag[]>(
    ApiModule.tags,
    {},
    { refetchOnMount: false },
  );

  return {
    authorList,
    publisherList,
    classificationList,
    tagList,
  };
};

export default useApiUtils;
