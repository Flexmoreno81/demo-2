
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Filtering functionality', () => {
  test('When selecting the filters, test to see if the filter are being applied', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'Pizza' } });
    const item = await screen.findByText('Pizza');
    expect(item).toBeInTheDocument();
  });

  test('Assess the search functionality for filtering recipes based on dietary restrictions (e.g., gluten-free, vegan)', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'gluten-free' } });
    const item = screen.queryByText('Pizza');
    expect(item).not.toBeInTheDocument(); // Assuming 'Pizza' is not gluten-free
  });
});
