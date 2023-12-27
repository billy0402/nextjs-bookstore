import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import BookList from '.';

describe('BookList', () => {
  it('render book list', () => {
    const books = [
      {
        id: 1,
        created_at: new Date('2023-12-07T14:14:56.595649+08:00'),
        updated_at: new Date('2023-12-07T14:14:56.595716+08:00'),
        name: 'NO GAME NO LIFE 遊戲人生(01)',
        price: 93,
        introduction:
          '★2014年4月春季日本動畫化作品!!\r\n★漫畫由小說原作、角色設計的榎宮祐執筆，眾所期待的漫畫化登場!!\r\n\r\n空與白這對兄妹雖然是尼特族兼家裡蹲，\r\n然而在網路上卻是被奉為都市傳說的天才遊戲玩家。\r\n稱世界為「爛遊戲」的兩人，\r\n某一天突然被自稱為神的人物召喚到\r\n「用遊戲決定一切」的異世界——!?\r\n空與白這對廢人兄妹能否成為異世界的「人類救世主」呢？？',
        publisher: 1,
        classification: 1,
        authors: [1],
        tags: [1],
      },
    ];

    render(<BookList books={books} />);

    const items = screen.getAllByRole('listitem');

    expect(items.length).toBe(1);
  });
});
