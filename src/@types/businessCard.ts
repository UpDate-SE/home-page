export type LoginCredentials = {
    username: string;
    password: string;
}

export type BusinessCard = {
    companyName: string;
    name: string;
    position: string;
    description: string;
    photo: File | string | null;
    email: string;
    socials: Array<string>;
}

export type PhotoIsString<Type> = {
    [Property in keyof Type as Exclude<Property, "photo">]: Type[Property]
} & {
    photo: string;
}