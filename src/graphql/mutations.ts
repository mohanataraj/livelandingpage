/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSignup = /* GraphQL */ `mutation CreateSignup(
  $input: CreateSignupInput!
  $condition: ModelSignupConditionInput
) {
  createSignup(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSignupMutationVariables,
  APITypes.CreateSignupMutation
>;
export const updateSignup = /* GraphQL */ `mutation UpdateSignup(
  $input: UpdateSignupInput!
  $condition: ModelSignupConditionInput
) {
  updateSignup(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSignupMutationVariables,
  APITypes.UpdateSignupMutation
>;
export const deleteSignup = /* GraphQL */ `mutation DeleteSignup(
  $input: DeleteSignupInput!
  $condition: ModelSignupConditionInput
) {
  deleteSignup(input: $input, condition: $condition) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSignupMutationVariables,
  APITypes.DeleteSignupMutation
>;
