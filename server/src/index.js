const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

// 2
const resolvers = {
  Query: {
    getProject: (root, args, context, info) => {
      console.log(args, 'arg')
      return context.prisma.project(args.where, info);
    },
    getProjects: (root, args, context, info) => {
      console.log(args, 'pro')
      return context.prisma.projects(args, info);
    },
    info: () => `This is the API of a Hackernews Clone`,
    getDashboard: (root, args, context, info) => {
      return context.prisma.dashboard({ id: args.id }, info);
    },
  },
  Mutation: {
    signup: (root, args, context, info) => {
      return context.prisma.createPerson(args.data, info);
    },
    createProject: (root, args, context, info) => {
      return context.prisma.createProject(args.data, info);
    },
    updateProject: (root, args, context, info) => {
      const { data, where } = args;
      return context.prisma.updateProject({ data, where }, info);
    },
  },
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
