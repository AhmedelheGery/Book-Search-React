import React, { Component } from 'react'
import SearchBar from './SearchBar.js/SearchBar'
import BooksList from './BooksList.js/BooksList'




export class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar/> 
          <div className="container p-5">
            <BooksList/>         
          </div>
      </div>
    )
  }
}

export default App

