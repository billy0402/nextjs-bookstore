import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import wrapper from '@/__tests__/utils/react-query';
import HomePage from '@/pages/index.page';

it('renders homepage unchanged', async () => {
  const { container } = render(<HomePage />, { wrapper });

  await waitForElementToBeRemoved(screen.getByText('LoadingBox'));

  expect(container).toMatchSnapshot();
});
