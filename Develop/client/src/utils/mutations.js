const { gql } = require('apollo-server-express');

const LOGIN_USER = gql`
    mutation loginMutation($loginEmail: String!, $loginPassword: String!) {
        login(email: $loginEmail, password: $loginPassword) {
            token
            user{
                _id
            }
        }
    }
`;

const ADD_USER = gql`
    mutation Mutation($addUserUsername: String!, $addUserEmail: String!, $addUserPassword: String!) {
        addUser( username: $addUserUsername, email: $AddUserEmail, password: $addUserPassword) {
            token
            user{
                _id
                username
            }
        }
    }
`;



const SAVE_BOOK = gql`
    mutation saveMutation($saveBookDescription: String!, $saveBookID: String!, $saveBookImage: String!, $saveBookTitle: String!, $saveBookAuthors: [String]){
        saveBook(description: $saveBookDescription, bookId: $saveBookID, image: $saveBookImage, title: $saveBookTitle, authors: $saveBookAuthors){
            username
            savedBooks{
                _id
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
` ;

const REMOVE_BOOK = gql`
    mutation removeMutation($removeBookId: String!) {
        deleteBook(bookId: $removeBookId) {
            username
            savedBooks{
                title
            }
        }
    }
`;

module.exports= {
    LOGIN_USER,
    ADD_USER,
    SAVE_BOOK,
    REMOVE_BOOK
};