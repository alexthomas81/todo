import React from 'react';
import './App.css';
import Todo from './todo';

// function component
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

//class component
class Header extends React.Component {

  componentWillMount() {
    console.log('Will mount header');
  }

  componentDidMount() {
    console.log('Did mount header');
  }

  render() {
    return (<div className="Top">To Do List</div>);
  }
}

class Footer extends React.Component {

  componentWillMount() {
    console.log('Will mount header');
  }

  componentDidMount() {
    console.log('Did mount header');
  }

  render() {
    return (<div className="Bottom">Copyright To Do @ 2019</div>);
  }
}

export default App;