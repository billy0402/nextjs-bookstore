import type { NextPage } from 'next';

import FormLayout from '@/components/FormLayout';
import LoadingBox from '@/components/LoadingBox';

import useAdminBookEditPageViewModel from './useAdminBookEditPageViewModel';

const AdminBookEditPage: NextPage = () => {
  const {
    config,
    data: book,
    isLoading,
    onSubmit,
  } = useAdminBookEditPageViewModel();

  return (
    <LoadingBox isLoading={isLoading}>
      <FormLayout {...config} detailData={book} onSubmit={onSubmit} />
    </LoadingBox>
  );
};

export default AdminBookEditPage;
