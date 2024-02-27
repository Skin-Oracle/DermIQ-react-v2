/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateEntry = /* GraphQL */ `subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onCreateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEntrySubscriptionVariables,
  APITypes.OnCreateEntrySubscription
>;
export const onUpdateEntry = /* GraphQL */ `subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onUpdateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEntrySubscriptionVariables,
  APITypes.OnUpdateEntrySubscription
>;
export const onDeleteEntry = /* GraphQL */ `subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
  onDeleteEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEntrySubscriptionVariables,
  APITypes.OnDeleteEntrySubscription
>;
export const onCreateMedication = /* GraphQL */ `subscription OnCreateMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onCreateMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMedicationSubscriptionVariables,
  APITypes.OnCreateMedicationSubscription
>;
export const onUpdateMedication = /* GraphQL */ `subscription OnUpdateMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onUpdateMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMedicationSubscriptionVariables,
  APITypes.OnUpdateMedicationSubscription
>;
export const onDeleteMedication = /* GraphQL */ `subscription OnDeleteMedication(
  $filter: ModelSubscriptionMedicationFilterInput
) {
  onDeleteMedication(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMedicationSubscriptionVariables,
  APITypes.OnDeleteMedicationSubscription
>;
export const onCreateEntryReport = /* GraphQL */ `subscription OnCreateEntryReport(
  $filter: ModelSubscriptionEntryReportFilterInput
) {
  onCreateEntryReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEntryReportSubscriptionVariables,
  APITypes.OnCreateEntryReportSubscription
>;
export const onUpdateEntryReport = /* GraphQL */ `subscription OnUpdateEntryReport(
  $filter: ModelSubscriptionEntryReportFilterInput
) {
  onUpdateEntryReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEntryReportSubscriptionVariables,
  APITypes.OnUpdateEntryReportSubscription
>;
export const onDeleteEntryReport = /* GraphQL */ `subscription OnDeleteEntryReport(
  $filter: ModelSubscriptionEntryReportFilterInput
) {
  onDeleteEntryReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEntryReportSubscriptionVariables,
  APITypes.OnDeleteEntryReportSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
