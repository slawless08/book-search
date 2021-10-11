const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return await User.findOne(username);
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await User.Create({
                username,
                email,
                password
            })
        },
        login: async (parent, { email, password }) => {
            return await User.findOne({ email });
        },
        saveBook: async (parent, { authors, descriptions, bookId, image, link, title }, context) => {
            return await User.findOneAndUpdate(
                { username },
                { $addToSet: { savedBooks: { authors, descriptions, bookId, image, link, title } } },
                {
                    new: true,
                    runValidators: true
                }
            );
        },
        deleteBook: async (parent, { bookId }, context) => {
            return await User.findOneAndUpdate(
                { _id: user.id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            )
        }
    }

}