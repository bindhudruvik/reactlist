import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }
  getTodos = () => {

    axios.get("https://jsonplaceholder.typicode.com/todos").then((data)=>{
      
     const todos = data.data.map((value)=>{
        const title = value.title;
        const completed = ""+value.completed;
        return (<tr><td>{title}</td><td>{completed}</td></tr>)
      })

      this.setState({todos: todos})
    },()=>{

    })

  }
  
  render() {
    return (<div>
      <button className="btn btn-primary" onClick={this.getTodos}>Get Todos</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        {this.state && this.state.todos}
      </table>

    </div>)
  }

}
export default App;
