/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  user_id: string,
  id?: string | null,
};

export type ModelUserConditionInput = {
  user_id?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  user_id: string,
  entries?: ModelEntryConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection",
  items:  Array<Entry | null >,
  nextToken?: string | null,
};

export type Entry = {
  __typename: "Entry",
  entry_id: string,
  body_part?: string | null,
  entry_name?: string | null,
  medications?: ModelMedicationConnection | null,
  entryReports?: ModelEntryReportConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  userEntriesId?: string | null,
};

export type ModelMedicationConnection = {
  __typename: "ModelMedicationConnection",
  items:  Array<Medication | null >,
  nextToken?: string | null,
};

export type Medication = {
  __typename: "Medication",
  medication_id: string,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  entry?: Entry | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  entryMedicationsId?: string | null,
};

export type ModelEntryReportConnection = {
  __typename: "ModelEntryReportConnection",
  items:  Array<EntryReport | null >,
  nextToken?: string | null,
};

export type EntryReport = {
  __typename: "EntryReport",
  entry_id: string,
  report_id: string,
  entry?: Entry | null,
  report?: Report | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  entryEntryReportsId?: string | null,
};

export type Report = {
  __typename: "Report",
  report_id: string,
  date_created?: string | null,
  image_uri?: string | null,
  area?: string | null,
  user_comments?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  user_id?: string | null,
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateEntryInput = {
  entry_id: string,
  body_part?: string | null,
  entry_name?: string | null,
  id?: string | null,
  userEntriesId?: string | null,
};

export type ModelEntryConditionInput = {
  entry_id?: ModelIDInput | null,
  body_part?: ModelStringInput | null,
  entry_name?: ModelStringInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
  userEntriesId?: ModelIDInput | null,
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

export type UpdateEntryInput = {
  entry_id?: string | null,
  body_part?: string | null,
  entry_name?: string | null,
  id: string,
  userEntriesId?: string | null,
};

export type DeleteEntryInput = {
  id: string,
};

export type CreateMedicationInput = {
  medication_id: string,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  id?: string | null,
  entryMedicationsId?: string | null,
};

export type ModelMedicationConditionInput = {
  medication_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  next_dose?: ModelStringInput | null,
  interval?: ModelIntInput | null,
  and?: Array< ModelMedicationConditionInput | null > | null,
  or?: Array< ModelMedicationConditionInput | null > | null,
  not?: ModelMedicationConditionInput | null,
  entryMedicationsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMedicationInput = {
  medication_id?: string | null,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  id: string,
  entryMedicationsId?: string | null,
};

export type DeleteMedicationInput = {
  id: string,
};

export type CreateEntryReportInput = {
  entry_id: string,
  report_id: string,
  id?: string | null,
  entryEntryReportsId?: string | null,
};

export type ModelEntryReportConditionInput = {
  entry_id?: ModelIDInput | null,
  report_id?: ModelIDInput | null,
  and?: Array< ModelEntryReportConditionInput | null > | null,
  or?: Array< ModelEntryReportConditionInput | null > | null,
  not?: ModelEntryReportConditionInput | null,
  entryEntryReportsId?: ModelIDInput | null,
};

export type UpdateEntryReportInput = {
  entry_id?: string | null,
  report_id?: string | null,
  id: string,
  entryEntryReportsId?: string | null,
};

export type DeleteEntryReportInput = {
  id: string,
};

export type CreateReportInput = {
  report_id: string,
  date_created?: string | null,
  image_uri?: string | null,
  area?: string | null,
  user_comments?: string | null,
  id?: string | null,
};

export type ModelReportConditionInput = {
  report_id?: ModelIDInput | null,
  date_created?: ModelStringInput | null,
  image_uri?: ModelStringInput | null,
  area?: ModelStringInput | null,
  user_comments?: ModelStringInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
};

export type UpdateReportInput = {
  report_id?: string | null,
  date_created?: string | null,
  image_uri?: string | null,
  area?: string | null,
  user_comments?: string | null,
  id: string,
};

export type DeleteReportInput = {
  id: string,
};

export type ModelUserFilterInput = {
  user_id?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelEntryFilterInput = {
  entry_id?: ModelIDInput | null,
  body_part?: ModelStringInput | null,
  entry_name?: ModelStringInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
  userEntriesId?: ModelIDInput | null,
};

export type ModelMedicationFilterInput = {
  medication_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  next_dose?: ModelStringInput | null,
  interval?: ModelIntInput | null,
  and?: Array< ModelMedicationFilterInput | null > | null,
  or?: Array< ModelMedicationFilterInput | null > | null,
  not?: ModelMedicationFilterInput | null,
  entryMedicationsId?: ModelIDInput | null,
};

export type ModelEntryReportFilterInput = {
  entry_id?: ModelIDInput | null,
  report_id?: ModelIDInput | null,
  and?: Array< ModelEntryReportFilterInput | null > | null,
  or?: Array< ModelEntryReportFilterInput | null > | null,
  not?: ModelEntryReportFilterInput | null,
  entryEntryReportsId?: ModelIDInput | null,
};

export type ModelReportFilterInput = {
  report_id?: ModelIDInput | null,
  date_created?: ModelStringInput | null,
  image_uri?: ModelStringInput | null,
  area?: ModelStringInput | null,
  user_comments?: ModelStringInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type ModelSubscriptionEntryFilterInput = {
  entry_id?: ModelSubscriptionIDInput | null,
  body_part?: ModelSubscriptionStringInput | null,
  entry_name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionEntryFilterInput | null > | null,
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

export type ModelSubscriptionMedicationFilterInput = {
  medication_id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  next_dose?: ModelSubscriptionStringInput | null,
  interval?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionMedicationFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEntryReportFilterInput = {
  entry_id?: ModelSubscriptionIDInput | null,
  report_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEntryReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionEntryReportFilterInput | null > | null,
};

export type ModelSubscriptionReportFilterInput = {
  report_id?: ModelSubscriptionIDInput | null,
  date_created?: ModelSubscriptionStringInput | null,
  image_uri?: ModelSubscriptionStringInput | null,
  area?: ModelSubscriptionStringInput | null,
  user_comments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEntryMutationVariables = {
  input: CreateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type CreateEntryMutation = {
  createEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type CreateMedicationMutationVariables = {
  input: CreateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type CreateMedicationMutation = {
  createMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type UpdateMedicationMutationVariables = {
  input: UpdateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type UpdateMedicationMutation = {
  updateMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type DeleteMedicationMutationVariables = {
  input: DeleteMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type DeleteMedicationMutation = {
  deleteMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type CreateEntryReportMutationVariables = {
  input: CreateEntryReportInput,
  condition?: ModelEntryReportConditionInput | null,
};

export type CreateEntryReportMutation = {
  createEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type UpdateEntryReportMutationVariables = {
  input: UpdateEntryReportInput,
  condition?: ModelEntryReportConditionInput | null,
};

export type UpdateEntryReportMutation = {
  updateEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type DeleteEntryReportMutationVariables = {
  input: DeleteEntryReportInput,
  condition?: ModelEntryReportConditionInput | null,
};

export type DeleteEntryReportMutation = {
  deleteEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      user_id: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEntryQueryVariables = {
  id: string,
};

export type GetEntryQuery = {
  getEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type ListEntriesQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntriesQuery = {
  listEntries?:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMedicationQueryVariables = {
  id: string,
};

export type GetMedicationQuery = {
  getMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type ListMedicationsQueryVariables = {
  filter?: ModelMedicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMedicationsQuery = {
  listMedications?:  {
    __typename: "ModelMedicationConnection",
    items:  Array< {
      __typename: "Medication",
      medication_id: string,
      name?: string | null,
      next_dose?: string | null,
      interval?: number | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      entryMedicationsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEntryReportQueryVariables = {
  id: string,
};

export type GetEntryReportQuery = {
  getEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type ListEntryReportsQueryVariables = {
  filter?: ModelEntryReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntryReportsQuery = {
  listEntryReports?:  {
    __typename: "ModelEntryReportConnection",
    items:  Array< {
      __typename: "EntryReport",
      entry_id: string,
      report_id: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      entryEntryReportsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    user_id: string,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnCreateEntrySubscription = {
  onCreateEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type OnUpdateEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type OnDeleteEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry?:  {
    __typename: "Entry",
    entry_id: string,
    body_part?: string | null,
    entry_name?: string | null,
    medications?:  {
      __typename: "ModelMedicationConnection",
      nextToken?: string | null,
    } | null,
    entryReports?:  {
      __typename: "ModelEntryReportConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    userEntriesId?: string | null,
  } | null,
};

export type OnCreateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnCreateMedicationSubscription = {
  onCreateMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type OnUpdateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnUpdateMedicationSubscription = {
  onUpdateMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type OnDeleteMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnDeleteMedicationSubscription = {
  onDeleteMedication?:  {
    __typename: "Medication",
    medication_id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryMedicationsId?: string | null,
  } | null,
};

export type OnCreateEntryReportSubscriptionVariables = {
  filter?: ModelSubscriptionEntryReportFilterInput | null,
};

export type OnCreateEntryReportSubscription = {
  onCreateEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type OnUpdateEntryReportSubscriptionVariables = {
  filter?: ModelSubscriptionEntryReportFilterInput | null,
};

export type OnUpdateEntryReportSubscription = {
  onUpdateEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type OnDeleteEntryReportSubscriptionVariables = {
  filter?: ModelSubscriptionEntryReportFilterInput | null,
};

export type OnDeleteEntryReportSubscription = {
  onDeleteEntryReport?:  {
    __typename: "EntryReport",
    entry_id: string,
    report_id: string,
    entry?:  {
      __typename: "Entry",
      entry_id: string,
      body_part?: string | null,
      entry_name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      userEntriesId?: string | null,
    } | null,
    report?:  {
      __typename: "Report",
      report_id: string,
      date_created?: string | null,
      image_uri?: string | null,
      area?: string | null,
      user_comments?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    entryEntryReportsId?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    report_id: string,
    date_created?: string | null,
    image_uri?: string | null,
    area?: string | null,
    user_comments?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
