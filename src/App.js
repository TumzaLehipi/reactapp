import React, { Component } from 'react'
import './App.css';


const list = [
  {
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

  class Develop{

    constructor(firstName, lastName){
      this.firstName = firstName;
      this.firstName = lastName;
    }

    getName(){
      return this.firstName + '' +this.lastName;
    }
  }


export class App extends Component {

  render() {
    const robin = new Develop('Robin', 'Wieruch');
    console.log(robin.getName());
    return (
      <div>
       {list.map((myItem)=>
        <div key={myItem.objectID}>
          <span><a href={myItem.url}>{myItem.title} </a></span>
          <span>{myItem.author} </span>
          <span>{myItem.num_comments} </span>
          <span>{myItem.points} </span>
        </div>
       )}
      </div>
    )
  }
}

export default App
