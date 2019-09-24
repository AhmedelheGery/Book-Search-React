import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BookCard extends Component {
    // STYLES-OBJECTS
    style={maxWidth: "540px"};
    bookDesc={fontSize : '0.9rem'}
    authName = {margin : '1% 0%', }
    // RENDER-BOOK-AT-DOM
    renderBook = () => {
        if(this.props.books){
            return (
                this.props.books.map( (book) => {
                    return (
                        <div key={book.id} className="card mb-3" style={this.style}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img" alt=""/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <small className="text-muted pb-2">By
                                {book.volumeInfo.authors.map(author => <p style={this.authName} key={author}> {author} </p>)}
                                </small>
                                <p className="card-text text-danger border-top border-secondary pt-2 mb-1" style={this.bookDesc}>{book.volumeInfo.subtitle}</p>
                                <a className="mb-1 text-primary" href={book.volumeInfo.previewLink} target="_blank">Details</a>
                                <p className="card-text"><small className="text-muted">{book.volumeInfo.publishedDate}</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    ) 
                }
                )
            )
        } else {
            return null;
        }
        
    }
    
    render() {
        return (
            <div>
            {this.renderBook()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.searchVal.search)
    return { 
        books : state.books.booksList,
        searchInput : state.searchVal.search
     } 
}

export default connect(mapStateToProps)(BookCard)

