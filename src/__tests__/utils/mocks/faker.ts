import { Faker, base, en, en_US, zh_TW } from '@faker-js/faker';

export const faker = new Faker({
  locale: [zh_TW, en_US, en, base],
});
