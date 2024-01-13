import type { ApiModel } from '@/models/api';

export type Book = ApiModel & {
  name: string;
  price: number;
  introduction: string;
  imageUrl: string;
  authors: Author[];
  publisher: Publisher;
  classification: Classification;
  tags: Tag[];
};

export type Author = ApiModel & {
  name: string;
  email: string;
};

export type Publisher = ApiModel & {
  name: string;
  address: string;
};

export type Classification = ApiModel & {
  name: string;
};

export type Tag = ApiModel & {
  name: string;
};
