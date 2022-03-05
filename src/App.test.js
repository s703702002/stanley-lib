import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

test('test App', async () => {
  render(<App />)

  const button = screen.getByTestId('main-btn')

  userEvent.click(button)
  expect(button).toHaveTextContent('count is: 1')

  userEvent.click(button)
  expect(button).toHaveTextContent('count is: 2')
  
  userEvent.click(button)
  expect(button).toHaveTextContent('count is: 3')
})
