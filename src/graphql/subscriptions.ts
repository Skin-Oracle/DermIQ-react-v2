/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateEntry = /* GraphQL */ `subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onCreateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEntrySubscriptionVariables,
  APITypes.OnCreateEntrySubscription
>;
export const onUpdateEntry = /* GraphQL */ `subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onUpdateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEntrySubscriptionVariables,
  APITypes.OnUpdateEntrySubscription
>;
export const onDeleteEntry = /* GraphQL */ `subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
  onDeleteEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEntrySubscriptionVariables,
  APITypes.OnDeleteEntrySubscription
>;
export const onCreateMedication = /* GraphQL */ `subscription OnCreateMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onCreateMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMedicationSubscriptionVariables,
  APITypes.OnCreateMedicationSubscription
>;
export const onUpdateMedication = /* GraphQL */ `subscription OnUpdateMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onUpdateMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMedicationSubscriptionVariables,
  APITypes.OnUpdateMedicationSubscription
>;
export const onDeleteMedication = /* GraphQL */ `subscription OnDeleteMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onDeleteMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMedicationSubscriptionVariables,
  APITypes.OnDeleteMedicationSubscription
>;
