/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MedicationCreateFormInputValues = {
    name?: string;
    next_dose?: string;
    interval?: number;
    entry_id?: string;
};
export declare type MedicationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    next_dose?: ValidationFunction<string>;
    interval?: ValidationFunction<number>;
    entry_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationCreateFormOverridesProps = {
    MedicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    next_dose?: PrimitiveOverrideProps<TextFieldProps>;
    interval?: PrimitiveOverrideProps<TextFieldProps>;
    entry_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationCreateFormProps = React.PropsWithChildren<{
    overrides?: MedicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onSuccess?: (fields: MedicationCreateFormInputValues) => void;
    onError?: (fields: MedicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationCreateFormInputValues) => MedicationCreateFormInputValues;
    onValidate?: MedicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationCreateForm(props: MedicationCreateFormProps): React.ReactElement;
