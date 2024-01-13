import type { Book } from '@/models/book';
import instance from '@/services/utils/instance';

export async function apiBookList(query: { [key: string]: any } = {}) {
  return instance.get<null, Book[]>('/books', { params: query });
}

export async function apiBookDetail(id: string) {
  return instance.get<null, Book>(`/books/${id}`);
}
