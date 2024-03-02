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
import { getReport } from "../../graphql/queries";
import { updateReport } from "../../graphql/mutations";
const client = generateClient();
export default function ReportUpdateForm(props) {
  const {
    id: idProp,
    report: reportModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    report_id: "",
    date_created: "",
    image_uri: "",
    area: "",
    user_comments: "",
  };
  const [report_id, setReport_id] = React.useState(initialValues.report_id);
  const [date_created, setDate_created] = React.useState(
    initialValues.date_created
  );
  const [image_uri, setImage_uri] = React.useState(initialValues.image_uri);
  const [area, setArea] = React.useState(initialValues.area);
  const [user_comments, setUser_comments] = React.useState(
    initialValues.user_comments
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = reportRecord
      ? { ...initialValues, ...reportRecord }
      : initialValues;
    setReport_id(cleanValues.report_id);
    setDate_created(cleanValues.date_created);
    setImage_uri(cleanValues.image_uri);
    setArea(cleanValues.area);
    setUser_comments(cleanValues.user_comments);
    setErrors({});
  };
  const [reportRecord, setReportRecord] = React.useState(reportModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getReport.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getReport
        : reportModelProp;
      setReportRecord(record);
    };
    queryData();
  }, [idProp, reportModelProp]);
  React.useEffect(resetStateValues, [reportRecord]);
  const validations = {
    report_id: [{ type: "Required" }],
    date_created: [],
    image_uri: [],
    area: [],
    user_comments: [],
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
          report_id,
          date_created: date_created ?? null,
          image_uri: image_uri ?? null,
          area: area ?? null,
          user_comments: user_comments ?? null,
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
            query: updateReport.replaceAll("__typename", ""),
            variables: {
              input: {
                id: reportRecord.id,
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
      {...getOverrideProps(overrides, "ReportUpdateForm")}
      {...rest}
    >
      <TextField
        label="Report id"
        isRequired={true}
        isReadOnly={false}
        value={report_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              report_id: value,
              date_created,
              image_uri,
              area,
              user_comments,
            };
            const result = onChange(modelFields);
            value = result?.report_id ?? value;
          }
          if (errors.report_id?.hasError) {
            runValidationTasks("report_id", value);
          }
          setReport_id(value);
        }}
        onBlur={() => runValidationTasks("report_id", report_id)}
        errorMessage={errors.report_id?.errorMessage}
        hasError={errors.report_id?.hasError}
        {...getOverrideProps(overrides, "report_id")}
      ></TextField>
      <TextField
        label="Date created"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date_created && convertToLocal(new Date(date_created))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              report_id,
              date_created: value,
              image_uri,
              area,
              user_comments,
            };
            const result = onChange(modelFields);
            value = result?.date_created ?? value;
          }
          if (errors.date_created?.hasError) {
            runValidationTasks("date_created", value);
          }
          setDate_created(value);
        }}
        onBlur={() => runValidationTasks("date_created", date_created)}
        errorMessage={errors.date_created?.errorMessage}
        hasError={errors.date_created?.hasError}
        {...getOverrideProps(overrides, "date_created")}
      ></TextField>
      <TextField
        label="Image uri"
        isRequired={false}
        isReadOnly={false}
        value={image_uri}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              report_id,
              date_created,
              image_uri: value,
              area,
              user_comments,
            };
            const result = onChange(modelFields);
            value = result?.image_uri ?? value;
          }
          if (errors.image_uri?.hasError) {
            runValidationTasks("image_uri", value);
          }
          setImage_uri(value);
        }}
        onBlur={() => runValidationTasks("image_uri", image_uri)}
        errorMessage={errors.image_uri?.errorMessage}
        hasError={errors.image_uri?.hasError}
        {...getOverrideProps(overrides, "image_uri")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              report_id,
              date_created,
              image_uri,
              area: value,
              user_comments,
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
        label="User comments"
        isRequired={false}
        isReadOnly={false}
        value={user_comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              report_id,
              date_created,
              image_uri,
              area,
              user_comments: value,
            };
            const result = onChange(modelFields);
            value = result?.user_comments ?? value;
          }
          if (errors.user_comments?.hasError) {
            runValidationTasks("user_comments", value);
          }
          setUser_comments(value);
        }}
        onBlur={() => runValidationTasks("user_comments", user_comments)}
        errorMessage={errors.user_comments?.errorMessage}
        hasError={errors.user_comments?.hasError}
        {...getOverrideProps(overrides, "user_comments")}
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
          isDisabled={!(idProp || reportModelProp)}
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
              !(idProp || reportModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
