import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CreateItems from './pages/items/CreateItems';
import CalculatorChange from './pages/CalculatorChange';

test('Calculator input', async () => {
    render(<CalculatorChange />)
  
    expect(screen.getByText('Basket Value')).toBeInTheDocument()
    expect(screen.getByText('Amount Value')).toBeInTheDocument()
})

test('Calculator button calculate', async () => {
    render(<CalculatorChange />)

    expect(screen.getByText('Amount due: 0 €')).toBeInTheDocument()
})