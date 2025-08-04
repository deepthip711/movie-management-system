import { render, screen } from '@testing-library/react';
import App from './App';

// Option 1: Test for the main heading
test('renders the main title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Movie Production and Management System/i);
  expect(titleElement).toBeInTheDocument();
});

// Option 2: Test for the "Add Movie" button
// test('renders the add movie button', () => {
//   render(<App />);
//   const addButtonElement = screen.getByText(/Add Movie/i);
//   expect(addButtonElement).toBeInTheDocument();
// });

// Option 3: Test for a specific text
// test('renders a specific text', () => {
//   render(<App />);
//   const textElement = screen.getByText(/This is a movie management system/i);
//   expect(textElement).toBeInTheDocument();
// });

// Option 4: Basic test: Component renders without crashing
// test('renders the app component', () => {
//   render(<App />);
// });
