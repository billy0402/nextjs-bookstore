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
  id: primaryKey(faker.string.uuid),
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
    imageUrl: faker.image.url,
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
const titles = [
  '聽說遊戲玩家兄妹要征服幻想世界',
  '遊戲玩家兄妹似乎盯上獸耳娘的國家了',
  '遊戲玩家兄妹的另一半似乎消失了……？',
  '遊戲玩家兄妹遭遇現實戀愛遊戲而逃之夭夭了',
  '遊戲玩家兄妹似乎討厭繼承破關紀錄',
  '聽說遊戲玩家夫妻向世界挑戰了',
  '聽說遊戲玩家兄妹要顛覆定理',
  '聽說遊戲玩家們將會接續布局',
  '聽說遊戲玩家兄妹要休息一回合',
  '遊戲玩家兄妹似乎被迫為過去付出代價',
  '遊戲玩家兄妹似乎必須成為情侶才能離開',
  '遊戲玩家兄妹似乎要挑戰「魔王」了',
];
titles.forEach((title, index) => {
  db.book.create({
    name: `NO GAME NO LIFE 遊戲人生 ${index + 1} ${title}`,
    imageUrl: `/images/ngnl/Light_Novel_Volume_${index + 1}_Cover.jpeg`,
    authors: [author],
    publisher,
    classification,
    tags: [tag],
  });
});

export default db;
