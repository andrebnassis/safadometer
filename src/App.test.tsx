import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppBar';

test('renders learn react link', () => {
  render(<p>learn react</p>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
