/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "../utils";
import { generateClient } from "aws-amplify/api";
import { createEntry } from "../../graphql/mutations";
const client = generateClient();
export default function EntryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    entry_id: "",
    body_part: "",
    entry_name: "",
  };
  const [entry_id, setEntry_id] = React.useState(initialValues.entry_id);
  const [body_part, setBody_part] = React.useState(initialValues.body_part);
  const [entry_name, setEntry_name] = React.useState(initialValues.entry_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEntry_id(initialValues.entry_id);
    setBody_part(initialValues.body_part);
    setEntry_name(initialValues.entry_name);
    setErrors({});
  };
  const validations = {
    entry_id: [{ type: "Required" }],
    body_part: [],
    entry_name: [],
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
          entry_id,
          body_part,
          entry_name,
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
            query: createEntry.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EntryCreateForm")}
      {...rest}
    >
      <TextField
        label="Entry id"
        isRequired={true}
        isReadOnly={false}
        value={entry_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              entry_id: value,
              body_part,
              entry_name,
            };
            const result = onChange(modelFields);
            value = result?.entry_id ?? value;
          }
          if (errors.entry_id?.hasError) {
            runValidationTasks("entry_id", value);
          }
          setEntry_id(value);
        }}
        onBlur={() => runValidationTasks("entry_id", entry_id)}
        errorMessage={errors.entry_id?.errorMessage}
        hasError={errors.entry_id?.hasError}
        {...getOverrideProps(overrides, "entry_id")}
      ></TextField>
      <TextField
        label="Body part"
        isRequired={false}
        isReadOnly={false}
        value={body_part}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              entry_id,
              body_part: value,
              entry_name,
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
              entry_id,
              body_part,
              entry_name: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
