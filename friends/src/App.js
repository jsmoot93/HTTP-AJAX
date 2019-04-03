import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsForm from './components/FriendsForm.js'
import FriendsList from './components/FriendsList.js'
import { Route } from 'react-router-dom';

const baseURL = "http://localhost:5000/"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends/")
      .then(res => this.setState({friends: res.data}))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    axios.delete(`${baseURL}friends/${id}`)
      .then(res => this.setState({friends: res.data}))

  }

  updateFriend = (event, id) => {
    event.preventDefault();

    axios.delete(`${baseURL}friends/${id}`)
      .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (<>
      <Route 
        exact path="/"
        render={() => (
          <div>
            <FriendsForm setAppState={this.setState.bind(this)}/>
            <FriendsList 
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
            />
          </div>
        )}
      />
      <Route path="/update/:id" render={() => <h1>This is my update Form</h1>} />
    </>)
  }
}

export default App;