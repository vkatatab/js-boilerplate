import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
    }
});

export default BookType;