import React from'react'
import { render, fireEvent, cleanup } from'@testing-library/react'
import'@testing-library/jest-dom/extend-expect'
import TodoContainer from'./ToDoContainer'

afterEach(cleanup)

describe('<ToDoContainer />', () => {
  test('status klikkaus testi', () => { 
    const component = render(
      <TodoContainer />
    )

    const button = component.container.querySelector('.status-btn')
    expect(button).toHaveTextContent('Incomplete')
    fireEvent.click(button)
  
    expect(button).toHaveTextContent('Complete')
  })

  test('status tuplaklikkaus testi', () => {
    const component = render(
      <TodoContainer />
    )

    const button = component.container.querySelector('.status-btn')
    expect(button).toHaveTextContent('Incomplete')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Complete')
    fireEvent.click(button)
    expect(button).toHaveTextContent('Incomplete')
  })

  test('remove klikkaus testi', () => {
    const component = render(
      <TodoContainer />
    )

    const allTodos = component.container.querySelectorAll('.wrapper')
    const button = component.container.querySelector('.remove-btn')
    fireEvent.click(button)
    setTimeout(() => {
      const newAllTodos = component.container.querySelectorAll('.wrapper')
      expect(newAllTodos.length).toBe(allTodos.length-1)
    }, 400) //todo poistetaan 400ms jälkeen
  })

  test('lisäys testi', () => {
    const component = render(
      <TodoContainer />
    )

    const allTodos = component.container.querySelectorAll('.wrapper')
    const button = component.container.querySelector('form .btn')
    fireEvent.click(button)
    const newAllTodos = component.container.querySelectorAll('.wrapper')
    expect(newAllTodos.length).toBe(allTodos.length+1)
  })

  test('kirjoitus ja lisäys testi', () => {
    const component = render(
      <TodoContainer />
    )
    const input = component.container.querySelector('input')
    const allTodos = component.container.querySelectorAll('.wrapper')
    const button = component.container.querySelector('form .btn')

    fireEvent.change(input, { target: { value: 'Recently typed todo' } })
    fireEvent.click(button)

    const newAllTodos = component.container.querySelectorAll('.wrapper')
    
    expect(newAllTodos.length).toBe(allTodos.length+1)
    expect(component.container).toHaveTextContent('Recently typed todo')
  })
})