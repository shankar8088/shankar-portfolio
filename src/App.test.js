import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  const nameElement = screen.getByText(/Shankar/i);
  expect(nameElement).toBeInTheDocument();
});

// This test is now obsolete due to layout changes. You can remove or update it as needed.
