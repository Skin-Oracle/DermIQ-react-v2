/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Entry } from "../API.ts";
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
export declare type EntryUpdateFormInputValues = {
    body_part?: string;
    entry_name?: string;
    diagnosis?: string;
    user_id?: string;
    medication?: string;
};
export declare type EntryUpdateFormValidationValues = {
    body_part?: ValidationFunction<string>;
    entry_name?: ValidationFunction<string>;
    diagnosis?: ValidationFunction<string>;
    user_id?: ValidationFunction<string>;
    medication?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntryUpdateFormOverridesProps = {
    EntryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    body_part?: PrimitiveOverrideProps<TextFieldProps>;
    entry_name?: PrimitiveOverrideProps<TextFieldProps>;
    diagnosis?: PrimitiveOverrideProps<TextFieldProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    medication?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntryUpdateFormProps = React.PropsWithChildren<{
    overrides?: EntryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    entry?: Entry;
    onSubmit?: (fields: EntryUpdateFormInputValues) => EntryUpdateFormInputValues;
    onSuccess?: (fields: EntryUpdateFormInputValues) => void;
    onError?: (fields: EntryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntryUpdateFormInputValues) => EntryUpdateFormInputValues;
    onValidate?: EntryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EntryUpdateForm(props: EntryUpdateFormProps): React.ReactElement;
