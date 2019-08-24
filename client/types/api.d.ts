/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SomeGet
// ====================================================

export interface SomeGet_getDashboard {
  __typename: "Dashboard";
  id: string;
}

export interface SomeGet {
  getDashboard: SomeGet_getDashboard | null;
}

export interface SomeGetVariables {
  id: string;
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

export interface PersonCreateInput {
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
