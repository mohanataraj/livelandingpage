/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSignupInput = {
  id?: string | null,
  email?: string | null,
};

export type ModelSignupConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelSignupConditionInput | null > | null,
  or?: Array< ModelSignupConditionInput | null > | null,
  not?: ModelSignupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Signup = {
  __typename: "Signup",
  id: string,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSignupInput = {
  id: string,
  email?: string | null,
};

export type DeleteSignupInput = {
  id: string,
};

export type ModelSignupFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSignupFilterInput | null > | null,
  or?: Array< ModelSignupFilterInput | null > | null,
  not?: ModelSignupFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSignupConnection = {
  __typename: "ModelSignupConnection",
  items:  Array<Signup | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSignupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSignupFilterInput | null > | null,
  or?: Array< ModelSubscriptionSignupFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateSignupMutationVariables = {
  input: CreateSignupInput,
  condition?: ModelSignupConditionInput | null,
};

export type CreateSignupMutation = {
  createSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSignupMutationVariables = {
  input: UpdateSignupInput,
  condition?: ModelSignupConditionInput | null,
};

export type UpdateSignupMutation = {
  updateSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSignupMutationVariables = {
  input: DeleteSignupInput,
  condition?: ModelSignupConditionInput | null,
};

export type DeleteSignupMutation = {
  deleteSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSignupQueryVariables = {
  id: string,
};

export type GetSignupQuery = {
  getSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSignupsQueryVariables = {
  filter?: ModelSignupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSignupsQuery = {
  listSignups?:  {
    __typename: "ModelSignupConnection",
    items:  Array< {
      __typename: "Signup",
      id: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSignupSubscriptionVariables = {
  filter?: ModelSubscriptionSignupFilterInput | null,
};

export type OnCreateSignupSubscription = {
  onCreateSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSignupSubscriptionVariables = {
  filter?: ModelSubscriptionSignupFilterInput | null,
};

export type OnUpdateSignupSubscription = {
  onUpdateSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSignupSubscriptionVariables = {
  filter?: ModelSubscriptionSignupFilterInput | null,
};

export type OnDeleteSignupSubscription = {
  onDeleteSignup?:  {
    __typename: "Signup",
    id: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
