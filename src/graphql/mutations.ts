/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
    id
    imageuri
    area
    usercomments
    nlpresponse
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
    id
    imageuri
    area
    usercomments
    nlpresponse
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
    id
    imageuri
    area
    usercomments
    nlpresponse
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    Entries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    Entries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    Entries {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createEntry = /* GraphQL */ `mutation CreateEntry(
  $input: CreateEntryInput!
  $condition: ModelEntryConditionInput
) {
  createEntry(input: $input, condition: $condition) {
    id
    body_part
    entry_name
    medications {
      nextToken
      __typename
    }
    diagnosis
    userID
    Reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEntryMutationVariables,
  APITypes.CreateEntryMutation
>;
export const updateEntry = /* GraphQL */ `mutation UpdateEntry(
  $input: UpdateEntryInput!
  $condition: ModelEntryConditionInput
) {
  updateEntry(input: $input, condition: $condition) {
    id
    body_part
    entry_name
    medications {
      nextToken
      __typename
    }
    diagnosis
    userID
    Reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEntryMutationVariables,
  APITypes.UpdateEntryMutation
>;
export const deleteEntry = /* GraphQL */ `mutation DeleteEntry(
  $input: DeleteEntryInput!
  $condition: ModelEntryConditionInput
) {
  deleteEntry(input: $input, condition: $condition) {
    id
    body_part
    entry_name
    medications {
      nextToken
      __typename
    }
    diagnosis
    userID
    Reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEntryMutationVariables,
  APITypes.DeleteEntryMutation
>;
export const createMedication = /* GraphQL */ `mutation CreateMedication(
  $input: CreateMedicationInput!
  $condition: ModelMedicationConditionInput
) {
  createMedication(input: $input, condition: $condition) {
    id
    name
    next_dose
    interval
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMedicationMutationVariables,
  APITypes.CreateMedicationMutation
>;
export const updateMedication = /* GraphQL */ `mutation UpdateMedication(
  $input: UpdateMedicationInput!
  $condition: ModelMedicationConditionInput
) {
  updateMedication(input: $input, condition: $condition) {
    id
    name
    next_dose
    interval
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMedicationMutationVariables,
  APITypes.UpdateMedicationMutation
>;
export const deleteMedication = /* GraphQL */ `mutation DeleteMedication(
  $input: DeleteMedicationInput!
  $condition: ModelMedicationConditionInput
) {
  deleteMedication(input: $input, condition: $condition) {
    id
    name
    next_dose
    interval
    entryID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMedicationMutationVariables,
  APITypes.DeleteMedicationMutation
>;
