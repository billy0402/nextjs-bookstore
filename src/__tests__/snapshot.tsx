import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { mockRouter } from '@/__tests__/utils/next-router';
import wrapper from '@/__tests__/utils/react-query';
import HomePage from '@/pages/index.page';

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders homepage unchanged', async () => {
  mockRouter.mockReturnValue({ route: '/' });

  const { container } = render(<HomePage />, { wrapper });

  await waitForElementToBeRemoved(screen.getByText('Loading...'));

  expect(container).toMatchSnapshot();
});
