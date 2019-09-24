import axios from "axios";

const googleBooksURL = 'https://www.googleapis.com/books/v1/volumes';

export default class BooksAPI {
    static getBooks = (searchInput) => axios.get(`${googleBooksURL}?q=${searchInput}`)
    
}