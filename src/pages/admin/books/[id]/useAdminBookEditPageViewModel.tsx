import { useRouter } from 'next/router';

import { bookFormLayoutConfig } from '@/fixtures/form-layout-configs/book';
import { queryClient } from '@/helpers/query-client';
import {
  useQueryCreate,
  useQueryDetail,
  useQueryUpdate,
} from '@/hooks/api/crud';
import useApiUtils from '@/hooks/api/utils';
import type { Author, Book, Tag } from '@/models/book';

const config = bookFormLayoutConfig;

const useAdminBookEditPageViewModel = () => {
  const router = useRouter();

  const { id } = router.query as { id: string };

  const bookDetail = useQueryDetail<Book>('books', id, {
    enabled: id !== 'create',
  });

  const { authorList, publisherList, classificationList, tagList } =
    useApiUtils();

  const createMutation = useQueryCreate<Book>('books', {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['books', variables.id], data);
      // router.push('/admin/books');
    },
  });
  const editMutation = useQueryUpdate<Book>('books', id, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['books', variables.id], data);
      // router.push('/admin/books');
    },
  });

  const authorsField = config.fieldConfigs.find(
    (fieldConfig) => fieldConfig.name === 'authors',
  )!;
  authorsField.options = authorList.data;

  const publisherField = config.fieldConfigs.find(
    (fieldConfig) => fieldConfig.name === 'publisherId',
  )!;
  publisherField.options = publisherList.data?.map((publisher) => publisher.id);
  publisherField.displayOptions = publisherList.data?.map(
    (publisher) => publisher.name,
  );

  const classificationField = config.fieldConfigs.find(
    (fieldConfig) => fieldConfig.name === 'classificationId',
  )!;
  classificationField.options = classificationList.data?.map(
    (classification) => classification.id,
  );
  classificationField.displayOptions = classificationList.data?.map(
    (classification) => classification.name,
  );

  const tagsField = config.fieldConfigs.find(
    (fieldConfig) => fieldConfig.name === 'tags',
  )!;
  tagsField.options = tagList.data;

  const onSubmit = (data: any) => {
    const formatData = {
      ...data,
      authorIds: data.authors?.map((author: Author) => author.id),
      tagIds: data.tags?.map((tag: Tag) => tag.id),
    };

    if (formatData.id) {
      editMutation.mutate(formatData);
      return;
    }
    createMutation.mutate(formatData);
  };

  return {
    config,
    data: bookDetail.data
      ? {
          ...bookDetail.data,
          authors: bookDetail.data.authors,
          publisherId: bookDetail.data.publisher.id,
          classificationId: bookDetail.data.classification.id,
          tags: bookDetail.data.tags,
        }
      : undefined,
    isLoading:
      bookDetail.isLoading ||
      authorList.isLoading ||
      publisherList.isLoading ||
      classificationList.isLoading ||
      tagList.isLoading ||
      createMutation.isPending ||
      editMutation.isPending,
    onSubmit,
  };
};

export default useAdminBookEditPageViewModel;
