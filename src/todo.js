import React from 'react';
import { addTodoForm, removeTodoForm, searchCountryName } from './actions/todo.action';
import { connect } from 'react-redux';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor == ');
        this.state = {
            countries: [],
        }
    }

    componentWillMount() {
        console.log('Will mount');
    }

    componentDidMount() {
        console.log('Did mount');
        // fetch
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => this.setState({ countries: data }));
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
    handleCountrySearch = (e) => {
        this.setState({
            countryname: e.target.value,
        })
    }
    handleCountryName = () => {
        const { _searchCountryName } = this.props;
        const { countryname } = this.state;
        console.log(countryname);
        _searchCountryName(countryname);
    }

    render() {
        const { todoList, countryname } = this.props;
        const { countries } = this.state;
        console.log('r1', countries);
        const newList = countries.filter(element => {
            return element.name.toLowerCase().includes(countryname.toLowerCase());
        });
        console.log('r2', newList);
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
                <hr></hr>
                <div>Countries list!<br /><br /><br />
                    <input type="text" id="searchCountry" onChange={this.handleCountrySearch} />
                    <button onClick={this.handleCountryName}>Search</button><br />
                </div>
                <b>{countryname}</b>
                {newList.map((list, index) =>
                    <div className="countryItem" key={index}>
                        <div className="countryName">{list.name}</div>
                        <div className="countryFlag"><img src={list.flag} className="flag"></img></div>
                    </div>
                )}
            </div >
        )
    }
}

// Get store to the Componemt
const mapStoreToProps = (store) => ({
    todoList: store.todoList,
    countryname: store.countryname,
});

// To dispatch Specific Action written in action.js File
const mapDispatchToProps = (dispatch) => ({
    _addTodoForm: (todo) => {
        dispatch(addTodoForm(todo))
    },
    _removeTodoForm: (item) => {
        dispatch(removeTodoForm(item));
    },
    _searchCountryName: (countryname) => {
        dispatch(searchCountryName(countryname))
    },
});

export default connect(mapStoreToProps, mapDispatchToProps)(Todo);
