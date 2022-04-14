import { GraphQLObjectType, GraphQLList } from 'graphql';
import BookType from './book/BookType';

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: {
        type: new GraphQLList(BookType),
        resolve: () => books,
    },
  },
});

export default QueryType;