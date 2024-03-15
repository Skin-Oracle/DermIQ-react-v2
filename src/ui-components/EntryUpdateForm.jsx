/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEntry } from "../graphql/queries";
import { updateEntry } from "../graphql/mutations";
const client = generateClient();
export default function EntryUpdateForm(props) {
  const {
    id: idProp,
    entry: entryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    body_part: "",
    entry_name: "",
    diagnosis: "",
    user_id: "",
    medication: "",
  };
  const [body_part, setBody_part] = React.useState(initialValues.body_part);
  const [entry_name, setEntry_name] = React.useState(initialValues.entry_name);
  const [diagnosis, setDiagnosis] = React.useState(initialValues.diagnosis);
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [medication, setMedication] = React.useState(initialValues.medication);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = entryRecord
      ? { ...initialValues, ...entryRecord }
      : initialValues;
    setBody_part(cleanValues.body_part);
    setEntry_name(cleanValues.entry_name);
    setDiagnosis(cleanValues.diagnosis);
    setUser_id(cleanValues.user_id);
    setMedication(cleanValues.medication);
    setErrors({});
  };
  const [entryRecord, setEntryRecord] = React.useState(entryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEntry.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEntry
        : entryModelProp;
      setEntryRecord(record);
    };
    queryData();
  }, [idProp, entryModelProp]);
  React.useEffect(resetStateValues, [entryRecord]);
  const validations = {
    body_part: [],
    entry_name: [],
    diagnosis: [],
    user_id: [],
    medication: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          body_part: body_part ?? null,
          entry_name: entry_name ?? null,
          diagnosis: diagnosis ?? null,
          user_id: user_id ?? null,
          medication: medication ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                id: entryRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EntryUpdateForm")}
      {...rest}
    >
      <TextField
        label="Body part"
        isRequired={false}
        isReadOnly={false}
        value={body_part}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body_part: value,
              entry_name,
              diagnosis,
              user_id,
              medication,
            };
            const result = onChange(modelFields);
            value = result?.body_part ?? value;
          }
          if (errors.body_part?.hasError) {
            runValidationTasks("body_part", value);
          }
          setBody_part(value);
        }}
        onBlur={() => runValidationTasks("body_part", body_part)}
        errorMessage={errors.body_part?.errorMessage}
        hasError={errors.body_part?.hasError}
        {...getOverrideProps(overrides, "body_part")}
      ></TextField>
      <TextField
        label="Entry name"
        isRequired={false}
        isReadOnly={false}
        value={entry_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body_part,
              entry_name: value,
              diagnosis,
              user_id,
              medication,
            };
            const result = onChange(modelFields);
            value = result?.entry_name ?? value;
          }
          if (errors.entry_name?.hasError) {
            runValidationTasks("entry_name", value);
          }
          setEntry_name(value);
        }}
        onBlur={() => runValidationTasks("entry_name", entry_name)}
        errorMessage={errors.entry_name?.errorMessage}
        hasError={errors.entry_name?.hasError}
        {...getOverrideProps(overrides, "entry_name")}
      ></TextField>
      <TextField
        label="Diagnosis"
        isRequired={false}
        isReadOnly={false}
        value={diagnosis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body_part,
              entry_name,
              diagnosis: value,
              user_id,
              medication,
            };
            const result = onChange(modelFields);
            value = result?.diagnosis ?? value;
          }
          if (errors.diagnosis?.hasError) {
            runValidationTasks("diagnosis", value);
          }
          setDiagnosis(value);
        }}
        onBlur={() => runValidationTasks("diagnosis", diagnosis)}
        errorMessage={errors.diagnosis?.errorMessage}
        hasError={errors.diagnosis?.hasError}
        {...getOverrideProps(overrides, "diagnosis")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body_part,
              entry_name,
              diagnosis,
              user_id: value,
              medication,
            };
            const result = onChange(modelFields);
            value = result?.user_id ?? value;
          }
          if (errors.user_id?.hasError) {
            runValidationTasks("user_id", value);
          }
          setUser_id(value);
        }}
        onBlur={() => runValidationTasks("user_id", user_id)}
        errorMessage={errors.user_id?.errorMessage}
        hasError={errors.user_id?.hasError}
        {...getOverrideProps(overrides, "user_id")}
      ></TextField>
      <TextField
        label="Medication"
        isRequired={false}
        isReadOnly={false}
        value={medication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              body_part,
              entry_name,
              diagnosis,
              user_id,
              medication: value,
            };
            const result = onChange(modelFields);
            value = result?.medication ?? value;
          }
          if (errors.medication?.hasError) {
            runValidationTasks("medication", value);
          }
          setMedication(value);
        }}
        onBlur={() => runValidationTasks("medication", medication)}
        errorMessage={errors.medication?.errorMessage}
        hasError={errors.medication?.hasError}
        {...getOverrideProps(overrides, "medication")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || entryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || entryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
