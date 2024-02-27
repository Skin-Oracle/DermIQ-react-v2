/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    user_id
    entries {
      nextToken
      __typename
    }
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
      user_id
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
    entry_id
    body_part
    entry_name
    medications {
      nextToken
      __typename
    }
    entryReports {
      nextToken
      __typename
    }
    id
    createdAt
    updatedAt
    userEntriesId
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
      entry_id
      body_part
      entry_name
      id
      createdAt
      updatedAt
      userEntriesId
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
    medication_id
    name
    next_dose
    interval
    entry {
      entry_id
      body_part
      entry_name
      id
      createdAt
      updatedAt
      userEntriesId
      __typename
    }
    id
    createdAt
    updatedAt
    entryMedicationsId
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
      medication_id
      name
      next_dose
      interval
      id
      createdAt
      updatedAt
      entryMedicationsId
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
export const getEntryReport = /* GraphQL */ `query GetEntryReport($id: ID!) {
  getEntryReport(id: $id) {
    entry_id
    report_id
    entry {
      entry_id
      body_part
      entry_name
      id
      createdAt
      updatedAt
      userEntriesId
      __typename
    }
    report {
      report_id
      date_created
      image_uri
      area
      user_comments
      id
      createdAt
      updatedAt
      __typename
    }
    id
    createdAt
    updatedAt
    entryEntryReportsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEntryReportQueryVariables,
  APITypes.GetEntryReportQuery
>;
export const listEntryReports = /* GraphQL */ `query ListEntryReports(
  $filter: ModelEntryReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntryReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      entry_id
      report_id
      id
      createdAt
      updatedAt
      entryEntryReportsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEntryReportsQueryVariables,
  APITypes.ListEntryReportsQuery
>;
export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
    report_id
    date_created
    image_uri
    area
    user_comments
    id
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
      report_id
      date_created
      image_uri
      area
      user_comments
      id
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
