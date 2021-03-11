import React from 'react'
import App from './App'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

describe('<App />', () => {
  test('Sovellus toimii', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    expect(component.container).toHaveTextContent("To-To-Doo") //tarkista: renderöidään sovellus
  })
})