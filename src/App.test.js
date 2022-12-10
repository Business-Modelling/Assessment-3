import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

test('App Home Page', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText(/Total price/i)).toBeInTheDocument()
})

test('App Navigation Bar', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText(/Admin/i)).toBeInTheDocument()
})

test('Navigate to change calculator page', async () => {
  render(<App />, {wrapper: BrowserRouter})

  userEvent.click(screen.getByText(/Calculator/i))

  expect(screen.getByText(/Basket Value/i)).toBeInTheDocument()
})

test('Navigate to Admin Login', async () => {
  render(<App />, {wrapper: BrowserRouter})

  userEvent.click(screen.getByText(/Admin/i))

  expect(screen.getByText(/Username/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const badRoute = '/badRoute'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByText(/404/i)).toBeInTheDocument()
})

test('Wrong Admin information', () => {
  const badRoute = '/AdminLogin'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  )

  userEvent.click(screen.getByText(/Login/i))
  expect(screen.getByText(/Username or password incorrect/i)).toBeInTheDocument()
})

test('Admin Login', async () => {
  const url = '/AdminLogin'

  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )

  userEvent.type(screen.getByLabelText("Username"), "Admin")
  userEvent.type(screen.getByLabelText("Password"), "Admin")
  expect(screen.getByLabelText("Username")).toHaveValue("Admin")
  expect(screen.getByLabelText("Password")).toHaveValue("Admin")
})

test('Admin Home Page', () => {
  const url = '/AdminHome'

  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByText(/Add items/i)).toBeInTheDocument()
})

test('Admin Add Items', () => {
  const url = '/AdminHome'

  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )

  userEvent.click(screen.getByText(/Add items/i))
  expect(screen.getByText(/Item Name/i)).toBeInTheDocument()
})

test('Admin View All Items', () => {
  const url = '/AdminHome'

  render(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  )

  userEvent.click(screen.getByText(/View all items/i))
  expect(screen.getByText(/Return/i)).toBeInTheDocument()
})