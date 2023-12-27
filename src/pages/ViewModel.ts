import { useQueryBookList } from '@/hooks/api/book';

const HomePageViewModel = () => {
  const { data, isLoading } = useQueryBookList();

  return {
    data,
    isLoading,
  };
};

export default HomePageViewModel;
