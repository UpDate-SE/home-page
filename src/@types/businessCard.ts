import { PhotoIsString, WithId } from "@types";
import { SocialMedia } from "./socialMedia";

export type BusinessCard = {
    companyName: string;
    name: string;
    position: string;
    description: string;
    photo: File | null;
    email: string;
    socials: SocialMedia;
}

export type BusinesCardInDB = WithId<PhotoIsString<BusinessCard>>;