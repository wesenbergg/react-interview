import React from 'react'
import Bar from './Bar'
import '@testing-library/jest-dom/extend-expect'
import { render, waitFor } from '@testing-library/react'

describe('<Bar />', () => {
  test('Sovellus toimii', async () => {
    const component = render(
      <Bar />
    )
    component.rerender(<Bar />)

    expect(component.container).toHaveTextContent("Add new todo") //tarkista: renderöidään komponentti
  })
})