import { useRef } from 'react';

import { useRouter } from 'next/router';

import { cleanUpQuery } from '@/helpers/query';
import { useQueryList } from '@/hooks/api/crud';
import type { Book } from '@/models/book';

const useHomePageViewModel = () => {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);

  const { data, error, isLoading } = useQueryList<Book[]>(
    'books',
    router.query,
  );

  const search = () => {
    router.push({
      pathname: router.pathname,
      query: cleanUpQuery({ ...router.query, name: nameRef.current?.value }),
    });
  };

  return {
    data,
    error,
    isLoading,
    nameRef,
    search,
  };
};

export default useHomePageViewModel;
