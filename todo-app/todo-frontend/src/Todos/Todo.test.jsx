import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { expect, test } from 'vitest'

test('renders todo text and status correctly', () => {
  const todo = {
    text: 'Testing component in Docker build',
    done: false
  }

  render(<Todo todo={todo} />)

  expect(screen.getByText('Testing component in Docker build')).toBeInTheDocument()
  expect(screen.getByText('This todo is not done')).toBeInTheDocument()
})
