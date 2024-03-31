/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSignup = /* GraphQL */ `query GetSignup($id: ID!) {
  getSignup(id: $id) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSignupQueryVariables, APITypes.GetSignupQuery>;
export const listSignups = /* GraphQL */ `query ListSignups(
  $filter: ModelSignupFilterInput
  $limit: Int
  $nextToken: String
) {
  listSignups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSignupsQueryVariables,
  APITypes.ListSignupsQuery
>;
