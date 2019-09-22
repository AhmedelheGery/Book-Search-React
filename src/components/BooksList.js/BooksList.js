import React, { Component } from 'react'
import BookCard from './BookCard'


export class BooksList extends Component {

    render() {
        return (
            <div className="container">
                <h1>Books List</h1>
                <div className="row">
                    <div className="">
                        <BookCard/>
                    </div>
                </div>
            </div>
        )
    }
}


export default BooksList;

