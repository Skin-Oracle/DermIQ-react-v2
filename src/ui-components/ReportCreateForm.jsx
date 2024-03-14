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
import { createReport } from "../graphql/mutations";
const client = generateClient();
export default function ReportCreateForm(props) {
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
    imageuri: "",
    area: "",
    usercomments: "",
    nlpresponse: "",
    entry_id: "",
  };
  const [imageuri, setImageuri] = React.useState(initialValues.imageuri);
  const [area, setArea] = React.useState(initialValues.area);
  const [usercomments, setUsercomments] = React.useState(
    initialValues.usercomments
  );
  const [nlpresponse, setNlpresponse] = React.useState(
    initialValues.nlpresponse
  );
  const [entry_id, setEntry_id] = React.useState(initialValues.entry_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImageuri(initialValues.imageuri);
    setArea(initialValues.area);
    setUsercomments(initialValues.usercomments);
    setNlpresponse(initialValues.nlpresponse);
    setEntry_id(initialValues.entry_id);
    setErrors({});
  };
  const validations = {
    imageuri: [],
    area: [],
    usercomments: [],
    nlpresponse: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          imageuri,
          area,
          usercomments,
          nlpresponse,
          entry_id,
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
            query: createReport.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ReportCreateForm")}
      {...rest}
    >
      <TextField
        label="Imageuri"
        isRequired={false}
        isReadOnly={false}
        value={imageuri}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageuri: value,
              area,
              usercomments,
              nlpresponse,
              entry_id,
            };
            const result = onChange(modelFields);
            value = result?.imageuri ?? value;
          }
          if (errors.imageuri?.hasError) {
            runValidationTasks("imageuri", value);
          }
          setImageuri(value);
        }}
        onBlur={() => runValidationTasks("imageuri", imageuri)}
        errorMessage={errors.imageuri?.errorMessage}
        hasError={errors.imageuri?.hasError}
        {...getOverrideProps(overrides, "imageuri")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={area}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              imageuri,
              area: value,
              usercomments,
              nlpresponse,
              entry_id,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Usercomments"
        isRequired={false}
        isReadOnly={false}
        value={usercomments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageuri,
              area,
              usercomments: value,
              nlpresponse,
              entry_id,
            };
            const result = onChange(modelFields);
            value = result?.usercomments ?? value;
          }
          if (errors.usercomments?.hasError) {
            runValidationTasks("usercomments", value);
          }
          setUsercomments(value);
        }}
        onBlur={() => runValidationTasks("usercomments", usercomments)}
        errorMessage={errors.usercomments?.errorMessage}
        hasError={errors.usercomments?.hasError}
        {...getOverrideProps(overrides, "usercomments")}
      ></TextField>
      <TextField
        label="Nlpresponse"
        isRequired={false}
        isReadOnly={false}
        value={nlpresponse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              imageuri,
              area,
              usercomments,
              nlpresponse: value,
              entry_id,
            };
            const result = onChange(modelFields);
            value = result?.nlpresponse ?? value;
          }
          if (errors.nlpresponse?.hasError) {
            runValidationTasks("nlpresponse", value);
          }
          setNlpresponse(value);
        }}
        onBlur={() => runValidationTasks("nlpresponse", nlpresponse)}
        errorMessage={errors.nlpresponse?.errorMessage}
        hasError={errors.nlpresponse?.hasError}
        {...getOverrideProps(overrides, "nlpresponse")}
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
              imageuri,
              area,
              usercomments,
              nlpresponse,
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
