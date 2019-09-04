/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject {
  __typename: "Project";
  id: string;
}

export interface CreateProject {
  createProject: CreateProject_createProject;
}

export interface CreateProjectVariables {
  data: ProjectCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProject
// ====================================================

export interface GetProject_getProject {
  __typename: "Project";
  id: string;
  title: string | null;
  description: string | null;
}

export interface GetProject {
  getProject: GetProject_getProject | null;
}

export interface GetProjectVariables {
  where: ProjectWhereUniqueInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_getProjects {
  __typename: "Project";
  id: string;
  title: string | null;
  description: string | null;
}

export interface GetProjects {
  getProjects: (GetProjects_getProjects | null)[];
}

export interface GetProjectsVariables {
  where?: ProjectWhereInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProject
// ====================================================

export interface UpdateProject_updateProject {
  __typename: "Project";
  id: string;
}

export interface UpdateProject {
  updateProject: UpdateProject_updateProject | null;
}

export interface UpdateProjectVariables {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup {
  __typename: "Person";
  id: string;
  username: string | null;
}

export interface Signup {
  signup: Signup_signup;
}

export interface SignupVariables {
  data?: PersonCreateInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CardCreateInput {
  description: string;
  title?: string | null;
  tasks?: TaskCreateManyInput | null;
}

export interface CardCreateManyInput {
  create?: CardCreateInput[] | null;
  connect?: CardWhereUniqueInput[] | null;
}

export interface CardScalarWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  AND?: CardScalarWhereInput[] | null;
  OR?: CardScalarWhereInput[] | null;
  NOT?: CardScalarWhereInput[] | null;
}

export interface CardUpdateDataInput {
  description?: string | null;
  title?: string | null;
  tasks?: TaskUpdateManyInput | null;
}

export interface CardUpdateManyDataInput {
  description?: string | null;
  title?: string | null;
}

export interface CardUpdateManyInput {
  create?: CardCreateInput[] | null;
  update?: CardUpdateWithWhereUniqueNestedInput[] | null;
  upsert?: CardUpsertWithWhereUniqueNestedInput[] | null;
  delete?: CardWhereUniqueInput[] | null;
  connect?: CardWhereUniqueInput[] | null;
  disconnect?: CardWhereUniqueInput[] | null;
  deleteMany?: CardScalarWhereInput[] | null;
  updateMany?: CardUpdateManyWithWhereNestedInput[] | null;
}

export interface CardUpdateManyWithWhereNestedInput {
  where: CardScalarWhereInput;
  data: CardUpdateManyDataInput;
}

export interface CardUpdateWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput;
  data: CardUpdateDataInput;
}

export interface CardUpsertWithWhereUniqueNestedInput {
  where: CardWhereUniqueInput;
  update: CardUpdateDataInput;
  create: CardCreateInput;
}

export interface CardWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  tasks_every?: TaskWhereInput | null;
  tasks_some?: TaskWhereInput | null;
  tasks_none?: TaskWhereInput | null;
  AND?: CardWhereInput[] | null;
  OR?: CardWhereInput[] | null;
  NOT?: CardWhereInput[] | null;
}

export interface CardWhereUniqueInput {
  id?: string | null;
}

export interface DashboardCreateManyWithoutProjectInput {
  create?: DashboardCreateWithoutProjectInput[] | null;
  connect?: DashboardWhereUniqueInput[] | null;
}

export interface DashboardCreateWithoutProjectInput {
  cards?: CardCreateManyInput | null;
  date: any;
}

export interface DashboardScalarWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  date?: any | null;
  date_not?: any | null;
  date_in?: any[] | null;
  date_not_in?: any[] | null;
  date_lt?: any | null;
  date_lte?: any | null;
  date_gt?: any | null;
  date_gte?: any | null;
  AND?: DashboardScalarWhereInput[] | null;
  OR?: DashboardScalarWhereInput[] | null;
  NOT?: DashboardScalarWhereInput[] | null;
}

export interface DashboardUpdateManyDataInput {
  date?: any | null;
}

export interface DashboardUpdateManyWithWhereNestedInput {
  where: DashboardScalarWhereInput;
  data: DashboardUpdateManyDataInput;
}

export interface DashboardUpdateManyWithoutProjectInput {
  create?: DashboardCreateWithoutProjectInput[] | null;
  delete?: DashboardWhereUniqueInput[] | null;
  connect?: DashboardWhereUniqueInput[] | null;
  disconnect?: DashboardWhereUniqueInput[] | null;
  update?: DashboardUpdateWithWhereUniqueWithoutProjectInput[] | null;
  upsert?: DashboardUpsertWithWhereUniqueWithoutProjectInput[] | null;
  deleteMany?: DashboardScalarWhereInput[] | null;
  updateMany?: DashboardUpdateManyWithWhereNestedInput[] | null;
}

export interface DashboardUpdateWithWhereUniqueWithoutProjectInput {
  where: DashboardWhereUniqueInput;
  data: DashboardUpdateWithoutProjectDataInput;
}

export interface DashboardUpdateWithoutProjectDataInput {
  cards?: CardUpdateManyInput | null;
  date?: any | null;
}

export interface DashboardUpsertWithWhereUniqueWithoutProjectInput {
  where: DashboardWhereUniqueInput;
  update: DashboardUpdateWithoutProjectDataInput;
  create: DashboardCreateWithoutProjectInput;
}

export interface DashboardWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  cards_every?: CardWhereInput | null;
  cards_some?: CardWhereInput | null;
  cards_none?: CardWhereInput | null;
  date?: any | null;
  date_not?: any | null;
  date_in?: any[] | null;
  date_not_in?: any[] | null;
  date_lt?: any | null;
  date_lte?: any | null;
  date_gt?: any | null;
  date_gte?: any | null;
  project?: ProjectWhereInput | null;
  AND?: DashboardWhereInput[] | null;
  OR?: DashboardWhereInput[] | null;
  NOT?: DashboardWhereInput[] | null;
}

export interface DashboardWhereUniqueInput {
  id?: string | null;
}

export interface PersonCreateInput {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface PersonCreateManyInput {
  create?: PersonCreateInput[] | null;
  connect?: PersonWhereUniqueInput[] | null;
}

export interface PersonScalarWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  username?: string | null;
  username_not?: string | null;
  username_in?: string[] | null;
  username_not_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_contains?: string | null;
  username_not_contains?: string | null;
  username_starts_with?: string | null;
  username_not_starts_with?: string | null;
  username_ends_with?: string | null;
  username_not_ends_with?: string | null;
  firstName?: string | null;
  firstName_not?: string | null;
  firstName_in?: string[] | null;
  firstName_not_in?: string[] | null;
  firstName_lt?: string | null;
  firstName_lte?: string | null;
  firstName_gt?: string | null;
  firstName_gte?: string | null;
  firstName_contains?: string | null;
  firstName_not_contains?: string | null;
  firstName_starts_with?: string | null;
  firstName_not_starts_with?: string | null;
  firstName_ends_with?: string | null;
  firstName_not_ends_with?: string | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_in?: string[] | null;
  lastName_not_in?: string[] | null;
  lastName_lt?: string | null;
  lastName_lte?: string | null;
  lastName_gt?: string | null;
  lastName_gte?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  password?: string | null;
  password_not?: string | null;
  password_in?: string[] | null;
  password_not_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_contains?: string | null;
  password_not_contains?: string | null;
  password_starts_with?: string | null;
  password_not_starts_with?: string | null;
  password_ends_with?: string | null;
  password_not_ends_with?: string | null;
  AND?: PersonScalarWhereInput[] | null;
  OR?: PersonScalarWhereInput[] | null;
  NOT?: PersonScalarWhereInput[] | null;
}

export interface PersonUpdateDataInput {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface PersonUpdateManyDataInput {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface PersonUpdateManyInput {
  create?: PersonCreateInput[] | null;
  update?: PersonUpdateWithWhereUniqueNestedInput[] | null;
  upsert?: PersonUpsertWithWhereUniqueNestedInput[] | null;
  delete?: PersonWhereUniqueInput[] | null;
  connect?: PersonWhereUniqueInput[] | null;
  disconnect?: PersonWhereUniqueInput[] | null;
  deleteMany?: PersonScalarWhereInput[] | null;
  updateMany?: PersonUpdateManyWithWhereNestedInput[] | null;
}

export interface PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput;
  data: PersonUpdateManyDataInput;
}

export interface PersonUpdateWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  data: PersonUpdateDataInput;
}

export interface PersonUpsertWithWhereUniqueNestedInput {
  where: PersonWhereUniqueInput;
  update: PersonUpdateDataInput;
  create: PersonCreateInput;
}

export interface PersonWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  username?: string | null;
  username_not?: string | null;
  username_in?: string[] | null;
  username_not_in?: string[] | null;
  username_lt?: string | null;
  username_lte?: string | null;
  username_gt?: string | null;
  username_gte?: string | null;
  username_contains?: string | null;
  username_not_contains?: string | null;
  username_starts_with?: string | null;
  username_not_starts_with?: string | null;
  username_ends_with?: string | null;
  username_not_ends_with?: string | null;
  firstName?: string | null;
  firstName_not?: string | null;
  firstName_in?: string[] | null;
  firstName_not_in?: string[] | null;
  firstName_lt?: string | null;
  firstName_lte?: string | null;
  firstName_gt?: string | null;
  firstName_gte?: string | null;
  firstName_contains?: string | null;
  firstName_not_contains?: string | null;
  firstName_starts_with?: string | null;
  firstName_not_starts_with?: string | null;
  firstName_ends_with?: string | null;
  firstName_not_ends_with?: string | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_in?: string[] | null;
  lastName_not_in?: string[] | null;
  lastName_lt?: string | null;
  lastName_lte?: string | null;
  lastName_gt?: string | null;
  lastName_gte?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  email?: string | null;
  email_not?: string | null;
  email_in?: string[] | null;
  email_not_in?: string[] | null;
  email_lt?: string | null;
  email_lte?: string | null;
  email_gt?: string | null;
  email_gte?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  password?: string | null;
  password_not?: string | null;
  password_in?: string[] | null;
  password_not_in?: string[] | null;
  password_lt?: string | null;
  password_lte?: string | null;
  password_gt?: string | null;
  password_gte?: string | null;
  password_contains?: string | null;
  password_not_contains?: string | null;
  password_starts_with?: string | null;
  password_not_starts_with?: string | null;
  password_ends_with?: string | null;
  password_not_ends_with?: string | null;
  AND?: PersonWhereInput[] | null;
  OR?: PersonWhereInput[] | null;
  NOT?: PersonWhereInput[] | null;
}

export interface PersonWhereUniqueInput {
  id?: string | null;
  username?: string | null;
}

export interface ProjectCreateInput {
  title?: string | null;
  description?: string | null;
  members?: PersonCreateManyInput | null;
  dashboards?: DashboardCreateManyWithoutProjectInput | null;
}

export interface ProjectUpdateInput {
  title?: string | null;
  description?: string | null;
  members?: PersonUpdateManyInput | null;
  dashboards?: DashboardUpdateManyWithoutProjectInput | null;
}

export interface ProjectWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_lt?: string | null;
  title_lte?: string | null;
  title_gt?: string | null;
  title_gte?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  members_every?: PersonWhereInput | null;
  members_some?: PersonWhereInput | null;
  members_none?: PersonWhereInput | null;
  dashboards_every?: DashboardWhereInput | null;
  dashboards_some?: DashboardWhereInput | null;
  dashboards_none?: DashboardWhereInput | null;
  AND?: ProjectWhereInput[] | null;
  OR?: ProjectWhereInput[] | null;
  NOT?: ProjectWhereInput[] | null;
}

export interface ProjectWhereUniqueInput {
  id?: string | null;
}

export interface TaskCreateInput {
  description: string;
  done?: boolean | null;
}

export interface TaskCreateManyInput {
  create?: TaskCreateInput[] | null;
  connect?: TaskWhereUniqueInput[] | null;
}

export interface TaskScalarWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  done?: boolean | null;
  done_not?: boolean | null;
  AND?: TaskScalarWhereInput[] | null;
  OR?: TaskScalarWhereInput[] | null;
  NOT?: TaskScalarWhereInput[] | null;
}

export interface TaskUpdateDataInput {
  description?: string | null;
  done?: boolean | null;
}

export interface TaskUpdateManyDataInput {
  description?: string | null;
  done?: boolean | null;
}

export interface TaskUpdateManyInput {
  create?: TaskCreateInput[] | null;
  update?: TaskUpdateWithWhereUniqueNestedInput[] | null;
  upsert?: TaskUpsertWithWhereUniqueNestedInput[] | null;
  delete?: TaskWhereUniqueInput[] | null;
  connect?: TaskWhereUniqueInput[] | null;
  disconnect?: TaskWhereUniqueInput[] | null;
  deleteMany?: TaskScalarWhereInput[] | null;
  updateMany?: TaskUpdateManyWithWhereNestedInput[] | null;
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput;
  data: TaskUpdateManyDataInput;
}

export interface TaskUpdateWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput;
  data: TaskUpdateDataInput;
}

export interface TaskUpsertWithWhereUniqueNestedInput {
  where: TaskWhereUniqueInput;
  update: TaskUpdateDataInput;
  create: TaskCreateInput;
}

export interface TaskWhereInput {
  id?: string | null;
  id_not?: string | null;
  id_in?: string[] | null;
  id_not_in?: string[] | null;
  id_lt?: string | null;
  id_lte?: string | null;
  id_gt?: string | null;
  id_gte?: string | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_lt?: string | null;
  description_lte?: string | null;
  description_gt?: string | null;
  description_gte?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  done?: boolean | null;
  done_not?: boolean | null;
  AND?: TaskWhereInput[] | null;
  OR?: TaskWhereInput[] | null;
  NOT?: TaskWhereInput[] | null;
}

export interface TaskWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
