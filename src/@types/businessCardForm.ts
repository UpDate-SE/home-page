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
    setValidInput: (name: BCardKeys, valid: boolean) => void;
    valueChange: (name: BCardKeys, value: string | SocialMedia | File) => void;
}

export interface TextFormGroup extends CardInput {
    label: string;
    type?: InputType;
}