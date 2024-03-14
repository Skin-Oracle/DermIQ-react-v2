/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Medication } from "../API.ts";
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
export declare type MedicationUpdateFormInputValues = {
    name?: string;
    next_dose?: string;
    interval?: number;
    entry_id?: string;
};
export declare type MedicationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    next_dose?: ValidationFunction<string>;
    interval?: ValidationFunction<number>;
    entry_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationUpdateFormOverridesProps = {
    MedicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    next_dose?: PrimitiveOverrideProps<TextFieldProps>;
    interval?: PrimitiveOverrideProps<TextFieldProps>;
    entry_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MedicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: MedicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    medication?: Medication;
    onSubmit?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onSuccess?: (fields: MedicationUpdateFormInputValues) => void;
    onError?: (fields: MedicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MedicationUpdateFormInputValues) => MedicationUpdateFormInputValues;
    onValidate?: MedicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MedicationUpdateForm(props: MedicationUpdateFormProps): React.ReactElement;
