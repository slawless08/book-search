const { gql } = require('apollo-server-express');

const GET_ME = gql`
    query Query {
        me {
            _id
            username
            email
            savedBooks{
                _id
                authors
                descriptions
                bookId
                image
                link
                title
            }
        }
    }
`

module.exports = GET_ME;