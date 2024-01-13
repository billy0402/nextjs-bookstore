import { render, screen } from '@testing-library/react';

import { mockRouter } from '@/__tests__/utils/next-router';
import wrapper from '@/__tests__/utils/react-query';
import HomePage from '@/pages/index.page';

describe('HomePage', () => {
  it('renders a heading', () => {
    mockRouter.mockReturnValue({ route: '/' });

    render(<HomePage />, { wrapper });

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
