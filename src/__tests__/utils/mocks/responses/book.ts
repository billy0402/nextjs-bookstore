import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import type { ModelDefinitionValue } from '@mswjs/data/lib/glossary';

import { faker } from '@/__tests__/utils/mocks/faker';
import type { ApiModel } from '@/models/api';
import type {
  Author,
  Book,
  Classification,
  Publisher,
  Tag,
} from '@/models/book';

export type Model<T> = { [key in keyof T]: ModelDefinitionValue };

const baseModel: Model<ApiModel> = {
  id: primaryKey(faker.string.numeric),
  createdAt: faker.date.past,
  updatedAt: faker.date.past,
};

const db = factory<{
  book: Model<Book>;
  author: Model<Author>;
  publisher: Model<Publisher>;
  classification: Model<Classification>;
  tag: Model<Tag>;
}>({
  book: {
    ...baseModel,
    name: String,
    price: faker.commerce.price,
    introduction: faker.lorem.paragraph,
    authors: manyOf('author'),
    publisher: oneOf('publisher'),
    classification: oneOf('classification'),
    tags: manyOf('tag'),
  },
  author: {
    ...baseModel,
    name: faker.person.fullName,
    email: faker.internet.email,
  },
  publisher: {
    ...baseModel,
    name: faker.company.name,
    address: faker.location.streetAddress,
  },
  classification: {
    ...baseModel,
    name: String,
  },
  tag: {
    ...baseModel,
    name: String,
  },
});

const author = db.author.create();
const classification = db.classification.create({ name: '輕小說' });
const publisher = db.publisher.create({ name: '東立' });
const tag = db.tag.create({ name: '幻奇冒險' });
db.book.create({
  name: 'NO GAME NO LIFE 遊戲人生(01)',
  authors: [author],
  publisher,
  classification,
  tags: [tag],
});

export default db;
