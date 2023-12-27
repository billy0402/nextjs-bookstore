import { ApiModel } from '@/models/api';

export type Book = ApiModel & {
  name: string;
  price: number;
  introduction: string;
  publisher: number;
  classification: number;
  authors: number[];
  tags: number[];
};
