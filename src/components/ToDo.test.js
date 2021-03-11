import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import ToDo from './ToDo'

afterEach(cleanup)

describe('<ToDo />', () => {
  const todo = { id: 1, name: 'Go to the supermarket', complete: false }
  const component = render(
    <ToDo
      todo={todo}
      index={0}
      onClickStatus={() => ''}
      onRemoveClick={() => ''}
    />
  )

  test('renderoi komponentin', () => {
    const div = component.container.querySelector('.slide-in-left')
    expect(div).toHaveTextContent( 'supermarket' )
    expect(component.container).toHaveTextContent( 'X' )
  })
})