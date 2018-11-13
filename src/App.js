import React from 'react';
import './App.css';

const todos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoName: '',
            todos: todos
        };
    }

    generateNewId() {
        return this.state.todos.length + 1;
    }

    onSubmit(event) {
        event.preventDefault();

        var newTodos = this.state.todos.slice();
        newTodos.push({
            id: this.generateNewId(),
            name: this.state.newTodoName,
            complete: false
        });

        this.setState({todos: newTodos, newTodoName: ''});
    }

    onClick(id) {
        var todoItems = this.state.todos.slice();
        for (let i = 0; i < this.state.todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        this.setState({
            todos: todoItems
        });
    }

    onChange(event) {
        this.setState({newTodoName: event.target.value});
    }
    onRemoveClick(id) {
        //implement this logic
        console.log('Remove Item!');
    }

    render() {
        return (
            <div className="">
                {this.todoItems()}
                <Bar
                    onSubmit={this.onSubmit.bind(this)}
                    newTodoName={this.state.newTodoName}
                    onInputChange={this.onChange.bind(this)}
                />
            </div>
        );
    }

    todoItems = () => {
        var retVal = [];

        for (let i = 0; i < this.state.todos.length; i++) {
            var todo = this.state.todos[i];
            retVal.push(
                <Hello
                    key={todo.id}
                    todo={todo}
                    onClick={this.onClick.bind(this)}
                    onRemoveClick={this.onRemoveClick.bind(this)}
                />
            );
        }
        return retVal;
    };
}

class Hello extends React.Component {
    render() {
        var color;
        var text;

        if (this.props.todo.complete === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'pink';
            text = 'Incomplete';
        }

        return (
            <div className="wrapper" style={{backgroundColor: color}}>
                <h3>{this.props.todo.name}</h3>
                <button
                    className="btn"
                    onClick={() => this.props.onClick(this.props.todo.id)}>
                    {text}
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        this.props.onRemoveClick(this.props.todo.id)
                    }>
                    Remove from list
                </button>
            </div>
        );
    }
}

class Bar extends React.Component {
    render() {
        return (
            <form
                className="wrapper"
                style={{'grid-template-columns': '7fr 2fr'}}
                onSubmit={this.props.onSubmit}>
                <input
                    placeholder="Add new todo"
                    value={this.props.newTodoName}
                    onChange={this.props.onInputChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default App;
