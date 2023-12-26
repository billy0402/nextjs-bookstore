import HomePage from '@/pages/index.page';
import { render } from '@testing-library/react';

it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />);
  expect(container).toMatchSnapshot();
});
