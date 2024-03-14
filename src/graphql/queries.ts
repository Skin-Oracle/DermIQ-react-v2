/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    imageuri
    area
    usercomments
    nlpresponse
    entry_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      imageuri
      area
      usercomments
      nlpresponse
      entry_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getEntry = /* GraphQL */ `query GetEntry($id: ID!) {
  getEntry(id: $id) {
    id
    body_part
    entry_name
    diagnosis
    user_id
    medication
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEntryQueryVariables, APITypes.GetEntryQuery>;
export const listEntries = /* GraphQL */ `query ListEntries(
  $filter: ModelEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      body_part
      entry_name
      diagnosis
      user_id
      medication
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEntriesQueryVariables,
  APITypes.ListEntriesQuery
>;
export const getMedication = /* GraphQL */ `query GetMedication($id: ID!) {
  getMedication(id: $id) {
    id
    name
    next_dose
    interval
    entry_id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMedicationQueryVariables,
  APITypes.GetMedicationQuery
>;
export const listMedications = /* GraphQL */ `query ListMedications(
  $filter: ModelMedicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      next_dose
      interval
      entry_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMedicationsQueryVariables,
  APITypes.ListMedicationsQuery
>;
