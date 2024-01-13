import type { FormLayoutConfig } from '@/components/FormLayout';

export const bookFormLayoutConfig: FormLayoutConfig = {
  title: '書籍維護',
  routerName: 'books',
  fieldConfigs: [
    {
      name: 'id',
      type: 'hidden',
      label: 'ID',
    },
    {
      name: 'name',
      type: 'text',
      label: '書名',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      label: '價格',
      required: true,
    },
    {
      name: 'introduction',
      type: 'text',
      label: '簡介',
      required: true,
    },
    // {
    //   name: 'imageUrl',
    //   type: 'text',
    //   label: '圖片',
    //   required: true,
    // },
    {
      name: 'authors',
      type: 'tags',
      label: '作者',
      required: true,
    },
    {
      name: 'publisherId',
      type: 'select',
      label: '出版社',
      required: true,
    },
    {
      name: 'classificationId',
      type: 'select',
      label: '分類',
      required: true,
    },
    {
      name: 'tags',
      type: 'tags',
      label: '標籤',
      required: true,
    },
  ],
};
