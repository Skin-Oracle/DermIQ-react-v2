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
import { createMedication } from "../graphql/mutations";
const client = generateClient();
export default function MedicationCreateForm(props) {
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
    medication_id: "",
    name: "",
    next_dose: "",
    interval: "",
  };
  const [medication_id, setMedication_id] = React.useState(
    initialValues.medication_id
  );
  const [name, setName] = React.useState(initialValues.name);
  const [next_dose, setNext_dose] = React.useState(initialValues.next_dose);
  const [interval, setInterval] = React.useState(initialValues.interval);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMedication_id(initialValues.medication_id);
    setName(initialValues.name);
    setNext_dose(initialValues.next_dose);
    setInterval(initialValues.interval);
    setErrors({});
  };
  const validations = {
    medication_id: [{ type: "Required" }],
    name: [],
    next_dose: [],
    interval: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          medication_id,
          name,
          next_dose,
          interval,
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
            query: createMedication.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MedicationCreateForm")}
      {...rest}
    >
      <TextField
        label="Medication id"
        isRequired={true}
        isReadOnly={false}
        value={medication_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              medication_id: value,
              name,
              next_dose,
              interval,
            };
            const result = onChange(modelFields);
            value = result?.medication_id ?? value;
          }
          if (errors.medication_id?.hasError) {
            runValidationTasks("medication_id", value);
          }
          setMedication_id(value);
        }}
        onBlur={() => runValidationTasks("medication_id", medication_id)}
        errorMessage={errors.medication_id?.errorMessage}
        hasError={errors.medication_id?.hasError}
        {...getOverrideProps(overrides, "medication_id")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              medication_id,
              name: value,
              next_dose,
              interval,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Next dose"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={next_dose && convertToLocal(new Date(next_dose))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              medication_id,
              name,
              next_dose: value,
              interval,
            };
            const result = onChange(modelFields);
            value = result?.next_dose ?? value;
          }
          if (errors.next_dose?.hasError) {
            runValidationTasks("next_dose", value);
          }
          setNext_dose(value);
        }}
        onBlur={() => runValidationTasks("next_dose", next_dose)}
        errorMessage={errors.next_dose?.errorMessage}
        hasError={errors.next_dose?.hasError}
        {...getOverrideProps(overrides, "next_dose")}
      ></TextField>
      <TextField
        label="Interval"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={interval}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              medication_id,
              name,
              next_dose,
              interval: value,
            };
            const result = onChange(modelFields);
            value = result?.interval ?? value;
          }
          if (errors.interval?.hasError) {
            runValidationTasks("interval", value);
          }
          setInterval(value);
        }}
        onBlur={() => runValidationTasks("interval", interval)}
        errorMessage={errors.interval?.errorMessage}
        hasError={errors.interval?.hasError}
        {...getOverrideProps(overrides, "interval")}
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
