const {ApolloServer , gql} = require("apollo-server");
const {v4 : uuid} =require ("uuid")

const messages = [];

const typeDefs = `


  type Query {
    messages : [Message!]
  }

  type Message{
    id :ID!
    user : String!
    content : String!
  }

  type Mutation{
    postMessage(user : String! , content :String!) : ID!
  }
`;
 
const resolvers = {
  Query: {
    messages : () => messages,
  },
  Mutation :{
    postMessage:(parent,{user , content}) =>{
        const id = uuid();
        messages.push({
            id,
            user,
            content
        });
        return id;
    },
}
}
 
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then((url) => {
    console.log("server is ready at"+url)
})