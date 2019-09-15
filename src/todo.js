import React from 'react';
import { addTodoForm, removeTodoForm } from './actions/todo.action';
import { connect } from 'react-redux';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor == ');

    }

    componentWillMount() {
        console.log('Will mount');
    }

    componentDidMount() {
        console.log('Did mount');
    }

    handleAddForm = () => {
        const { _addTodoForm } = this.props;
        const { todo } = this.state;
        _addTodoForm(todo);
    }

    handleDeleteForm = (e, item) => {
        const { _removeTodoForm } = this.props;
        _removeTodoForm(item);
    }
    handleTodo = (e) => {
        this.setState({
            todo: e.target.value,
        })
    }

    render() {
        const { todoList } = this.props;
        console.log('r2', todoList);
        return (
            <div className="Todo">
                <div>
                    <div>My todo list!<br /><br /><br />
                        <input type="text" id="name" onChange={this.handleTodo} />
                        <button onClick={this.handleAddForm}>Add</button><br />
                    </div>
                    <br /><br /><br />
                    {todoList.map((list, index) => (
                        <div className="listItem" key={index}>
                            <div className="listName">{list}</div>
                            <div className="listButton"><button onClick={(e) => this.handleDeleteForm(e, index)}>Delete</button></div>
                        </div>
                    ))}
                </div >
            </div >
        )
    }
}

// Get store to the Componemt
const mapStoreToProps = (store) => ({
    todoList: store.todoList,
});

// To dispatch Specific Action written in action.js File
const mapDispatchToProps = (dispatch) => ({
    _addTodoForm: (todo) => {
        dispatch(addTodoForm(todo))
    },
    _removeTodoForm: (item) => {
        dispatch(removeTodoForm(item));
    },
});

export default connect(mapStoreToProps, mapDispatchToProps)(Todo);
