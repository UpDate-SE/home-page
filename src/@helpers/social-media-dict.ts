import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faPinterest, faTiktok, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaDisplayInfo, SupportedSocials } from "@types";

export const socialMediaIconsDict: Record<SupportedSocials, SocialMediaDisplayInfo> = {
    instagram: {
        icon: faInstagram,
        style: {
            color: '#FFFFFF',
            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%, #285AEB 90%)',
        }
    },
    tiktok: {
        icon: faTiktok,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#000000',
            border: '1px solid white'
        }
    },
    facebook: {
        icon: faFacebookF,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#1877F2'
        }
    },
    twitter: {
        icon: faTwitter,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#1CA1F2'
        }
    },
    youtube: {
        icon: faYoutube,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#F90000'
        }
    },
    whatsapp: {
        icon: faWhatsapp,
        style: {
            color: '#FFFFFF',
            background: 'linear-gradient(#25d366,#25d366) 14% 84%/16% 16% no-repeat, radial-gradient(#25d366 60%,transparent 0)'
        }
    },
    linkedin: {
        icon: faLinkedinIn,
        style: {
            color: '#FFFFFF',
            backgroundColor: '#0078AF'
        }
    },
    pinterest: {
        icon: faPinterest,
        style: {
            color: '#C82126',
            backgroundColor: '#C82126'
        }
    },
    github: {
        icon: faGithub,
        style: {
            color: "#FFFFFF",
            backgroundColor: "#333333"
        }
    }
}