import type { Book } from '@/models/book';
import instance from '@/services/utils/instance';

export async function apiBookList() {
  return instance.get<Book[]>('/books');
}
