import { BusinessCard, SocialMedia } from "@types"

export const initialSocialMedia: SocialMedia = {
    instagram: null,
    tiktok: null,
    facebook: null,
    twitter: null,
    youtube: null,
    whatsapp: null,
    linkedin: null,
    pinterest: null,
    github: null
}

export const initialFormData: BusinessCard = {
    companyName: '',
    name: '',
    position: '',
    description: '',
    photo: null,
    email: '',
    website: '',
    socials: initialSocialMedia
}
