import React from 'react';
import { addTodoForm, removeTodoForm, updateTodoForm, searchCountryName } from './actions/todo.action';
import { connect } from 'react-redux';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor == ');
        this.state = {
            countries: [],
            isEdit: null,
            isShow: null,
            editName: '',
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
    handleUpdateForm = (e, index) => {
        const { _updateTodoForm } = this.props;
        const { editName } = this.state;
        _updateTodoForm(index, editName);
        this.setState({
            isEdit: null,
        })
    }
    handleShowForm = (e, index) => {
        this.setState({
            isShow: index,
        })
        console.log(index);
    }
    handleEditForm = (e, index) => {
        this.setState({
            isEdit: index,
        })
        console.log(index);
    }
    handleEditName = (e) => {
        this.setState({
            editName: e.target.value,
        })
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
        const { countries, isEdit, isShow } = this.state;
        console.log('r1', countries);
        const newList = countries.filter(element => {
            return element.name.toLowerCase().includes(countryname.toLowerCase());
        });
        console.log('r2', newList);
        return (
            <div className="Todo">
                <div>
                    <div>My todo list!<br />
                        <input type="text" id="name" onChange={this.handleTodo} />
                        <button onClick={this.handleAddForm}>Add</button><br />
                    </div>
                    <br />
                    {todoList.map((list, index) => (
                        <div className="listItem" key={index}>
                            <div className="listName">{isEdit === index ? <input type="text" onChange={this.handleEditName} /> : list}</div>
                            <div className="listEdit"><button onClick={isEdit === index ? (e) => this.handleUpdateForm(e, index) : (e) => this.handleEditForm(e, index)}>{isEdit === index ? 'Update' : 'Edit'}</button></div>
                            <div className="listButton"><button onClick={(e) => this.handleDeleteForm(e, index)}>Delete</button></div>
                        </div>
                    ))}
                </div >
                <hr></hr>
                <div>Countries list!<br />
                    <input type="text" id="searchCountry" onChange={this.handleCountrySearch} />
                    <button onClick={this.handleCountryName}>Search</button><br />
                </div>
                <b>{countryname}</b>
                {newList.map((list, index) =>
                    <div className="countryItem" key={index}>
                        <div className="countryName">{list.name}</div>
                        <div className="countryFlag"><img src={list.flag} className="flag"></img></div>
                        <div className="countryButton"><button onClick={(e) => this.handleShowForm(e, index)}>Show</button></div>
                        {isShow === index ? <div className="countryDetail">Capital : {list.capital}
                        <br></br>Currency : {list.currencies[0].name}  
                        <br></br>Language : {list.languages[0].name}</div> : ''}
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
    _updateTodoForm: (index, value) => {
        dispatch(updateTodoForm(index, value));
    },
    _searchCountryName: (countryname) => {
        dispatch(searchCountryName(countryname))
    },
});

export default connect(mapStoreToProps, mapDispatchToProps)(Todo);
