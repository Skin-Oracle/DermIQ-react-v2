/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Medication } from "../../API.ts";
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
    medication_id?: string;
    name?: string;
    next_dose?: string;
    interval?: number;
};
export declare type MedicationUpdateFormValidationValues = {
    medication_id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    next_dose?: ValidationFunction<string>;
    interval?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicationUpdateFormOverridesProps = {
    MedicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    medication_id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    next_dose?: PrimitiveOverrideProps<TextFieldProps>;
    interval?: PrimitiveOverrideProps<TextFieldProps>;
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