module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCard {
  count: Int!
}

type AggregateDashboard {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTask {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Card {
  id: ID!
  description: String!
  title: String
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
}

type CardConnection {
  pageInfo: PageInfo!
  edges: [CardEdge]!
  aggregate: AggregateCard!
}

input CardCreateInput {
  description: String!
  title: String
  tasks: TaskCreateManyInput
}

input CardCreateManyInput {
  create: [CardCreateInput!]
  connect: [CardWhereUniqueInput!]
}

type CardEdge {
  node: Card!
  cursor: String!
}

enum CardOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CardPreviousValues {
  id: ID!
  description: String!
  title: String
}

input CardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [CardScalarWhereInput!]
  OR: [CardScalarWhereInput!]
  NOT: [CardScalarWhereInput!]
}

type CardSubscriptionPayload {
  mutation: MutationType!
  node: Card
  updatedFields: [String!]
  previousValues: CardPreviousValues
}

input CardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CardWhereInput
  AND: [CardSubscriptionWhereInput!]
  OR: [CardSubscriptionWhereInput!]
  NOT: [CardSubscriptionWhereInput!]
}

input CardUpdateDataInput {
  description: String
  title: String
  tasks: TaskUpdateManyInput
}

input CardUpdateInput {
  description: String
  title: String
  tasks: TaskUpdateManyInput
}

input CardUpdateManyDataInput {
  description: String
  title: String
}

input CardUpdateManyInput {
  create: [CardCreateInput!]
  update: [CardUpdateWithWhereUniqueNestedInput!]
  upsert: [CardUpsertWithWhereUniqueNestedInput!]
  delete: [CardWhereUniqueInput!]
  connect: [CardWhereUniqueInput!]
  disconnect: [CardWhereUniqueInput!]
  deleteMany: [CardScalarWhereInput!]
  updateMany: [CardUpdateManyWithWhereNestedInput!]
}

input CardUpdateManyMutationInput {
  description: String
  title: String
}

input CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput!
  data: CardUpdateManyDataInput!
}

input CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  data: CardUpdateDataInput!
}

input CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput!
  update: CardUpdateDataInput!
  create: CardCreateInput!
}

input CardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  AND: [CardWhereInput!]
  OR: [CardWhereInput!]
  NOT: [CardWhereInput!]
}

input CardWhereUniqueInput {
  id: ID
}

type Dashboard {
  id: ID!
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card!]
  date: DateTime!
  project: Project
}

type DashboardConnection {
  pageInfo: PageInfo!
  edges: [DashboardEdge]!
  aggregate: AggregateDashboard!
}

input DashboardCreateInput {
  cards: CardCreateManyInput
  date: DateTime!
  project: ProjectCreateOneWithoutDashboardsInput
}

input DashboardCreateManyWithoutProjectInput {
  create: [DashboardCreateWithoutProjectInput!]
  connect: [DashboardWhereUniqueInput!]
}

input DashboardCreateWithoutProjectInput {
  cards: CardCreateManyInput
  date: DateTime!
}

type DashboardEdge {
  node: Dashboard!
  cursor: String!
}

enum DashboardOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DashboardPreviousValues {
  id: ID!
  date: DateTime!
}

input DashboardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  AND: [DashboardScalarWhereInput!]
  OR: [DashboardScalarWhereInput!]
  NOT: [DashboardScalarWhereInput!]
}

type DashboardSubscriptionPayload {
  mutation: MutationType!
  node: Dashboard
  updatedFields: [String!]
  previousValues: DashboardPreviousValues
}

input DashboardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DashboardWhereInput
  AND: [DashboardSubscriptionWhereInput!]
  OR: [DashboardSubscriptionWhereInput!]
  NOT: [DashboardSubscriptionWhereInput!]
}

input DashboardUpdateInput {
  cards: CardUpdateManyInput
  date: DateTime
  project: ProjectUpdateOneWithoutDashboardsInput
}

input DashboardUpdateManyDataInput {
  date: DateTime
}

input DashboardUpdateManyMutationInput {
  date: DateTime
}

input DashboardUpdateManyWithoutProjectInput {
  create: [DashboardCreateWithoutProjectInput!]
  delete: [DashboardWhereUniqueInput!]
  connect: [DashboardWhereUniqueInput!]
  disconnect: [DashboardWhereUniqueInput!]
  update: [DashboardUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [DashboardUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [DashboardScalarWhereInput!]
  updateMany: [DashboardUpdateManyWithWhereNestedInput!]
}

input DashboardUpdateManyWithWhereNestedInput {
  where: DashboardScalarWhereInput!
  data: DashboardUpdateManyDataInput!
}

input DashboardUpdateWithoutProjectDataInput {
  cards: CardUpdateManyInput
  date: DateTime
}

input DashboardUpdateWithWhereUniqueWithoutProjectInput {
  where: DashboardWhereUniqueInput!
  data: DashboardUpdateWithoutProjectDataInput!
}

input DashboardUpsertWithWhereUniqueWithoutProjectInput {
  where: DashboardWhereUniqueInput!
  update: DashboardUpdateWithoutProjectDataInput!
  create: DashboardCreateWithoutProjectInput!
}

input DashboardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  cards_every: CardWhereInput
  cards_some: CardWhereInput
  cards_none: CardWhereInput
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  project: ProjectWhereInput
  AND: [DashboardWhereInput!]
  OR: [DashboardWhereInput!]
  NOT: [DashboardWhereInput!]
}

input DashboardWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCard(data: CardCreateInput!): Card!
  updateCard(data: CardUpdateInput!, where: CardWhereUniqueInput!): Card
  updateManyCards(data: CardUpdateManyMutationInput!, where: CardWhereInput): BatchPayload!
  upsertCard(where: CardWhereUniqueInput!, create: CardCreateInput!, update: CardUpdateInput!): Card!
  deleteCard(where: CardWhereUniqueInput!): Card
  deleteManyCards(where: CardWhereInput): BatchPayload!
  createDashboard(data: DashboardCreateInput!): Dashboard!
  updateDashboard(data: DashboardUpdateInput!, where: DashboardWhereUniqueInput!): Dashboard
  updateManyDashboards(data: DashboardUpdateManyMutationInput!, where: DashboardWhereInput): BatchPayload!
  upsertDashboard(where: DashboardWhereUniqueInput!, create: DashboardCreateInput!, update: DashboardUpdateInput!): Dashboard!
  deleteDashboard(where: DashboardWhereUniqueInput!): Dashboard
  deleteManyDashboards(where: DashboardWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Person {
  id: ID!
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonCreateManyInput {
  create: [PersonCreateInput!]
  connect: [PersonWhereUniqueInput!]
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PersonPreviousValues {
  id: ID!
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [PersonScalarWhereInput!]
  OR: [PersonScalarWhereInput!]
  NOT: [PersonScalarWhereInput!]
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateDataInput {
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonUpdateInput {
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonUpdateManyDataInput {
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonUpdateManyInput {
  create: [PersonCreateInput!]
  update: [PersonUpdateWithWhereUniqueNestedInput!]
  upsert: [PersonUpsertWithWhereUniqueNestedInput!]
  delete: [PersonWhereUniqueInput!]
  connect: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  deleteMany: [PersonScalarWhereInput!]
  updateMany: [PersonUpdateManyWithWhereNestedInput!]
}

input PersonUpdateManyMutationInput {
  username: String
  firstName: String
  lastName: String
  email: String
  password: String
}

input PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput!
  data: PersonUpdateManyDataInput!
}

input PersonUpdateWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateDataInput!
}

input PersonUpsertWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateDataInput!
  create: PersonCreateInput!
}

input PersonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
  username: String
}

type Project {
  id: ID!
  title: String
  description: String
  members(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  title: String
  description: String
  members: PersonCreateManyInput
  dashboards: DashboardCreateManyWithoutProjectInput
}

input ProjectCreateOneWithoutDashboardsInput {
  create: ProjectCreateWithoutDashboardsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutDashboardsInput {
  title: String
  description: String
  members: PersonCreateManyInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  title: String
  description: String
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  title: String
  description: String
  members: PersonUpdateManyInput
  dashboards: DashboardUpdateManyWithoutProjectInput
}

input ProjectUpdateManyMutationInput {
  title: String
  description: String
}

input ProjectUpdateOneWithoutDashboardsInput {
  create: ProjectCreateWithoutDashboardsInput
  update: ProjectUpdateWithoutDashboardsDataInput
  upsert: ProjectUpsertWithoutDashboardsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutDashboardsDataInput {
  title: String
  description: String
  members: PersonUpdateManyInput
}

input ProjectUpsertWithoutDashboardsInput {
  update: ProjectUpdateWithoutDashboardsDataInput!
  create: ProjectCreateWithoutDashboardsInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  members_every: PersonWhereInput
  members_some: PersonWhereInput
  members_none: PersonWhereInput
  dashboards_every: DashboardWhereInput
  dashboards_some: DashboardWhereInput
  dashboards_none: DashboardWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  card(where: CardWhereUniqueInput!): Card
  cards(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Card]!
  cardsConnection(where: CardWhereInput, orderBy: CardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CardConnection!
  dashboard(where: DashboardWhereUniqueInput!): Dashboard
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard]!
  dashboardsConnection(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DashboardConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  node(id: ID!): Node
}

type Subscription {
  card(where: CardSubscriptionWhereInput): CardSubscriptionPayload
  dashboard(where: DashboardSubscriptionWhereInput): DashboardSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
}

type Task {
  id: ID!
  description: String!
  done: Boolean
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  description: String!
  done: Boolean
}

input TaskCreateManyInput {
  create: [TaskCreateInput!]
  connect: [TaskWhereUniqueInput!]
}

type TaskEdge {
  node: Task!
  cursor: String!
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  done_ASC
  done_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TaskPreviousValues {
  id: ID!
  description: String!
  done: Boolean
}

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  done: Boolean
  done_not: Boolean
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateDataInput {
  description: String
  done: Boolean
}

input TaskUpdateInput {
  description: String
  done: Boolean
}

input TaskUpdateManyDataInput {
  description: String
  done: Boolean
}

input TaskUpdateManyInput {
  create: [TaskCreateInput!]
  update: [TaskUpdateWithWhereUniqueNestedInput!]
  upsert: [TaskUpsertWithWhereUniqueNestedInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyMutationInput {
  description: String
  done: Boolean
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateDataInput!
}

input TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateDataInput!
  create: TaskCreateInput!
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  done: Boolean
  done_not: Boolean
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}
`
      }
    