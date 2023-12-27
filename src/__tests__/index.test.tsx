import { render, screen } from '@testing-library/react';

import wrapper from '@/__tests__/utils/react-query';
import HomePage from '@/pages/index.page';

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />, { wrapper });

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
