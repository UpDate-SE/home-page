import { PhotoIsString, WithId } from "@types";

export type LoginCredentials = {
    username: string;
    password: string;
}

export type BusinessCard = {
    companyName: string;
    name: string;
    position: string;
    description: string;
    photo: File | null;
    email: string;
    socials: Array<string>;
}

export type BusinesCardInDB = WithId<PhotoIsString<BusinessCard>>;