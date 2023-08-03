import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type SupportedSocials = 'instagram' | 'linkedin' | 'facebook' | 'whatsapp' | 
    'youtube' | 'tiktok' | 'github' | 'pinterest' | 'twitter'; 

export interface SocialMedia extends Record<SupportedSocials, string | null> {
    instagram: string | null;
    tiktok: string | null;
    facebook: string | null;
    twitter: string | null;
    youtube: string | null;
    whatsapp: string | null;
    linkedin: string | null;
    pinterest: string | null;
    github: string | null;
}

export type SocialMediaDisplayInfo = {
    icon: IconDefinition;
    style: Object;
}