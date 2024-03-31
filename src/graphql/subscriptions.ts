/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSignup = /* GraphQL */ `subscription OnCreateSignup($filter: ModelSubscriptionSignupFilterInput) {
  onCreateSignup(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSignupSubscriptionVariables,
  APITypes.OnCreateSignupSubscription
>;
export const onUpdateSignup = /* GraphQL */ `subscription OnUpdateSignup($filter: ModelSubscriptionSignupFilterInput) {
  onUpdateSignup(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSignupSubscriptionVariables,
  APITypes.OnUpdateSignupSubscription
>;
export const onDeleteSignup = /* GraphQL */ `subscription OnDeleteSignup($filter: ModelSubscriptionSignupFilterInput) {
  onDeleteSignup(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSignupSubscriptionVariables,
  APITypes.OnDeleteSignupSubscription
>;
