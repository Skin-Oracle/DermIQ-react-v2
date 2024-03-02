/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReportInput = {
  id?: string | null,
  imageuri?: string | null,
  area?: number | null,
  usercomments?: string | null,
  nlpresponse?: string | null,
  entry_id?: string | null,
};

export type ModelReportConditionInput = {
  imageuri?: ModelStringInput | null,
  area?: ModelFloatInput | null,
  usercomments?: ModelStringInput | null,
  nlpresponse?: ModelStringInput | null,
  entry_id?: ModelStringInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
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

export type ModelFloatInput = {
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

export type Report = {
  __typename: "Report",
  id: string,
  imageuri?: string | null,
  area?: number | null,
  usercomments?: string | null,
  nlpresponse?: string | null,
  entry_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReportInput = {
  id: string,
  imageuri?: string | null,
  area?: number | null,
  usercomments?: string | null,
  nlpresponse?: string | null,
  entry_id?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateEntryInput = {
  id?: string | null,
  body_part?: string | null,
  entry_name?: string | null,
  diagnosis?: string | null,
  user_id?: string | null,
};

export type ModelEntryConditionInput = {
  body_part?: ModelStringInput | null,
  entry_name?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
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

export type Entry = {
  __typename: "Entry",
  id: string,
  body_part?: string | null,
  entry_name?: string | null,
  diagnosis?: string | null,
  user_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEntryInput = {
  id: string,
  body_part?: string | null,
  entry_name?: string | null,
  diagnosis?: string | null,
  user_id?: string | null,
};

export type DeleteEntryInput = {
  id: string,
};

export type CreateMedicationInput = {
  id?: string | null,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  entry_id?: string | null,
};

export type ModelMedicationConditionInput = {
  name?: ModelStringInput | null,
  next_dose?: ModelStringInput | null,
  interval?: ModelIntInput | null,
  entry_id?: ModelIDInput | null,
  and?: Array< ModelMedicationConditionInput | null > | null,
  or?: Array< ModelMedicationConditionInput | null > | null,
  not?: ModelMedicationConditionInput | null,
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

export type Medication = {
  __typename: "Medication",
  id: string,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  entry_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMedicationInput = {
  id: string,
  name?: string | null,
  next_dose?: string | null,
  interval?: number | null,
  entry_id?: string | null,
};

export type DeleteMedicationInput = {
  id: string,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  imageuri?: ModelStringInput | null,
  area?: ModelFloatInput | null,
  usercomments?: ModelStringInput | null,
  nlpresponse?: ModelStringInput | null,
  entry_id?: ModelStringInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
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
  id?: ModelIDInput | null,
  body_part?: ModelStringInput | null,
  entry_name?: ModelStringInput | null,
  diagnosis?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection",
  items:  Array<Entry | null >,
  nextToken?: string | null,
};

export type ModelMedicationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  next_dose?: ModelStringInput | null,
  interval?: ModelIntInput | null,
  entry_id?: ModelIDInput | null,
  and?: Array< ModelMedicationFilterInput | null > | null,
  or?: Array< ModelMedicationFilterInput | null > | null,
  not?: ModelMedicationFilterInput | null,
};

export type ModelMedicationConnection = {
  __typename: "ModelMedicationConnection",
  items:  Array<Medication | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imageuri?: ModelSubscriptionStringInput | null,
  area?: ModelSubscriptionFloatInput | null,
  usercomments?: ModelSubscriptionStringInput | null,
  nlpresponse?: ModelSubscriptionStringInput | null,
  entry_id?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
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

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  body_part?: ModelSubscriptionStringInput | null,
  entry_name?: ModelSubscriptionStringInput | null,
  diagnosis?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionEntryFilterInput | null > | null,
};

export type ModelSubscriptionMedicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  next_dose?: ModelSubscriptionStringInput | null,
  interval?: ModelSubscriptionIntInput | null,
  entry_id?: ModelSubscriptionIDInput | null,
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

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
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
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
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
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
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
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry?:  {
    __typename: "Entry",
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry?:  {
    __typename: "Entry",
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMedicationMutationVariables = {
  input: CreateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type CreateMedicationMutation = {
  createMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMedicationMutationVariables = {
  input: UpdateMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type UpdateMedicationMutation = {
  updateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMedicationMutationVariables = {
  input: DeleteMedicationInput,
  condition?: ModelMedicationConditionInput | null,
};

export type DeleteMedicationMutation = {
  deleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
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
      id: string,
      imageuri?: string | null,
      area?: number | null,
      usercomments?: string | null,
      nlpresponse?: string | null,
      entry_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
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
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
      body_part?: string | null,
      entry_name?: string | null,
      diagnosis?: string | null,
      user_id?: string | null,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
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
      id: string,
      name?: string | null,
      next_dose?: string | null,
      interval?: number | null,
      entry_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
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
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
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
    id: string,
    imageuri?: string | null,
    area?: number | null,
    usercomments?: string | null,
    nlpresponse?: string | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
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
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry?:  {
    __typename: "Entry",
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry?:  {
    __typename: "Entry",
    id: string,
    body_part?: string | null,
    entry_name?: string | null,
    diagnosis?: string | null,
    user_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnCreateMedicationSubscription = {
  onCreateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnUpdateMedicationSubscription = {
  onUpdateMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMedicationSubscriptionVariables = {
  filter?: ModelSubscriptionMedicationFilterInput | null,
};

export type OnDeleteMedicationSubscription = {
  onDeleteMedication?:  {
    __typename: "Medication",
    id: string,
    name?: string | null,
    next_dose?: string | null,
    interval?: number | null,
    entry_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
