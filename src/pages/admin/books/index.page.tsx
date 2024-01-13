import type { NextPage } from 'next';

import LoadingBox from '@/components/LoadingBox';
import TableLayout from '@/components/TableLayout';
import { bookTableLayoutConfig } from '@/fixtures/table-layout-configs/book';

import useAdminBookListPageViewModel from './useAdminBookListPageViewModel';

const config = bookTableLayoutConfig;

const AdminBookListPage: NextPage = () => {
  const { data, isLoading } = useAdminBookListPageViewModel();

  return (
    <LoadingBox isLoading={isLoading}>
      {data && <TableLayout {...config} listData={data} />}
    </LoadingBox>
  );
};

export default AdminBookListPage;
