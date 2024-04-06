/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFeedback = /* GraphQL */ `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onCreateFeedback(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackSubscriptionVariables,
  APITypes.OnCreateFeedbackSubscription
>;
export const onUpdateFeedback = /* GraphQL */ `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onUpdateFeedback(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackSubscriptionVariables,
  APITypes.OnUpdateFeedbackSubscription
>;
export const onDeleteFeedback = /* GraphQL */ `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onDeleteFeedback(filter: $filter) {
    id
    name
    email
    message
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackSubscriptionVariables,
  APITypes.OnDeleteFeedbackSubscription
>;
export const onCreateSignup = /* GraphQL */ `subscription OnCreateSignup($filter: ModelSubscriptionSignupFilterInput) {
  onCreateSignup(filter: $filter) {
    id
    email
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSignupSubscriptionVariables,
  APITypes.OnDeleteSignupSubscription
>;
