const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");



// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    getDashboard: (root, args, context, info) => {
      return context.prisma.dashboard( { id: args.id }, info);
    }
  },
  Mutation: {
    signup: (root, args, context, info) => {
      return context.prisma.createPerson(args.data, info);
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
