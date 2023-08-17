import { InputType } from "reactstrap/types/lib/Input";
import { BusinessCard } from "./businessCard";
import { SocialMedia } from "./socialMedia";

export type ValidatorDict<Type> = {
    [Property in keyof Type]: boolean;
}

export type Keys<Type> = keyof Type;

export type BCardKeys = Keys<BusinessCard>;

export type CardInput = {
    name: BCardKeys;
    initialValue: string;
    setValidInput: (name: BCardKeys, valid: boolean) => void;
    valueChange: (name: BCardKeys, value: string | SocialMedia | File) => void;
}

type OtherInitial<Input, NewType> = {
    [Property in keyof Input as Exclude<Property, 'initialValue'>]: Input[Property]
} & {
    initialValue: NewType
}

export type SocialsInputProps = OtherInitial<CardInput, SocialMedia>;

export type ImageInputProps = OtherInitial<CardInput, string | null>;

export interface TextFormGroup extends CardInput {
    label: string;
    type?: InputType;
}