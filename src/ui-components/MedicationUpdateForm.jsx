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
import { getMedication } from "../graphql/queries";
import { updateMedication } from "../graphql/mutations";
const client = generateClient();
export default function MedicationUpdateForm(props) {
  const {
    id: idProp,
    medication: medicationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    next_dose: "",
    interval: "",
    entry_id: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [next_dose, setNext_dose] = React.useState(initialValues.next_dose);
  const [interval, setInterval] = React.useState(initialValues.interval);
  const [entry_id, setEntry_id] = React.useState(initialValues.entry_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = medicationRecord
      ? { ...initialValues, ...medicationRecord }
      : initialValues;
    setName(cleanValues.name);
    setNext_dose(cleanValues.next_dose);
    setInterval(cleanValues.interval);
    setEntry_id(cleanValues.entry_id);
    setErrors({});
  };
  const [medicationRecord, setMedicationRecord] =
    React.useState(medicationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMedication.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMedication
        : medicationModelProp;
      setMedicationRecord(record);
    };
    queryData();
  }, [idProp, medicationModelProp]);
  React.useEffect(resetStateValues, [medicationRecord]);
  const validations = {
    name: [],
    next_dose: [],
    interval: [],
    entry_id: [],
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
          name: name ?? null,
          next_dose: next_dose ?? null,
          interval: interval ?? null,
          entry_id: entry_id ?? null,
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
            query: updateMedication.replaceAll("__typename", ""),
            variables: {
              input: {
                id: medicationRecord.id,
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
      {...getOverrideProps(overrides, "MedicationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              next_dose,
              interval,
              entry_id,
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
              name,
              next_dose: value,
              interval,
              entry_id,
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
              name,
              next_dose,
              interval: value,
              entry_id,
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
      <TextField
        label="Entry id"
        isRequired={false}
        isReadOnly={false}
        value={entry_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              next_dose,
              interval,
              entry_id: value,
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
          isDisabled={!(idProp || medicationModelProp)}
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
              !(idProp || medicationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
