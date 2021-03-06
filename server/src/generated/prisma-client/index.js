"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Card",
    embedded: false
  },
  {
    name: "Dashboard",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
