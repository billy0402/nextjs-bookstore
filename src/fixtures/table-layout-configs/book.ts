import type { TableLayoutConfig } from '@/components/TableLayout';

export const bookTableLayoutConfig: TableLayoutConfig = {
  title: '產品維護',
  subtitle: '書籍管理列表',
  tableConfigs: [
    {
      name: 'name',
      type: 'text',
      label: '書籍名稱',
      isShow: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      label: '建立時間',
      isShow: true,
    },
  ],
};
