import React, { Component } from 'react'
import {Field , reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import {searchValue} from '../../actions'
import {fetchBooks} from '../../actions'

export class SearchBar extends Component {
    // RENDER-ERR-METHOD
       renderErr({error , touched}){ 
        if( error && touched){
            return <p>{error}</p>;
        }
    }    
    // RENDER-INPUT-METHOD
    renderSearchInput = ({input , placeholder , meta}) => {
        return (
            <div className="input-group mb-3">
                <input className="form-control" {...input} placeholder={placeholder}/>
                <div className="input-group-append">
                    <button 
                    className="btn btn-success" 
                    type="submit"
                    >Search</button>
                </div>
                {this.renderErr(meta)}
            </div>
        )
    }
    // FORM-SUBMISSION-METHOD
    onSubmit = (searcValues) => {
        console.log(searcValues);
        // this.props.searchValue(searcValues);
        this.props.onFetchBooks(searcValues.search);
    }
    render() {
        return (
            <form className="container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='search' component={this.renderSearchInput} placeholder={'Search...'} />
            </form>
        )
    }
}

// FORM VALIDATE
const validate = searcValues => {
    const err = {}
    if(!searcValues.search){
        err.search = 'You must enter a book name!'
    }
}

// const mapStateToProps = (state) => { 
//     console.log(state)
//     return {searchVal : state}
// }



const mapDispatchToProps = (dispatch) => {return { onFetchBooks : (value) => dispatch(fetchBooks(value))} }
const searchWrap = reduxForm({form : 'searchInput' , validate})(SearchBar); 
export default connect(null, mapDispatchToProps)(searchWrap)
