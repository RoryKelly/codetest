import {ApolloServerPluginLandingPageLocalDefault} from "apollo-server-core";
import {Resolvers} from "./generated/graphql";
import {ServerInfo} from "apollo-server";
import { PrismaClient } from '@prisma/client';

const { ApolloServer} = require('apollo-server');
import {Context, context} from './context'

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const resolvers : Resolvers<Context> = {
    Query: {
       todo: async (parent, args, {prisma}, info) =>  {
           let value = await prisma.todo.findMany({include:{ user: true }})
           return value
       }
    },
    User: {
        email: parent => parent.email,
        id: parent => parent.id,
        name: parent => parent.name
    }
};

// read the graphql schema
const { readFileSync } = require('fs')
const typeDefs = readFileSync(require.resolve('./Schema.graphql')).toString('utf-8')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context,
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

// The `listen` method launches a web server.
server.listen().then((info: ServerInfo) => {
    console.log(`🚀  Server ready at ${info.url}`);
});