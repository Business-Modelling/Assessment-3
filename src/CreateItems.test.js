import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CreateItems from './pages/items/CreateItems';
import CalculatorChange from './pages/CalculatorChange';

test('Component Create Item', async () => {
  render(<CreateItems />)

  expect(screen.getByText('Item Name')).toBeInTheDocument()
  expect(screen.getByText('Category')).toBeInTheDocument()
  expect(screen.getByText('Quantity Item')).toBeInTheDocument()
  expect(screen.getByText('Expiration Date')).toBeInTheDocument()
})

test('Return to Admin view from Create Item', async () => {
  const url = '/AdminAddItems'
  render(
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText(/Return/i)).toBeInTheDocument()
})

test('Enter data in input', async () => {
    const url = '/AdminAddItems'
  
    render(
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>,
    )
  
    userEvent.type(screen.getByLabelText("Item Name"), "tes")
    expect(screen.getByLabelText("Item Name")).toHaveValue("tes")
  })