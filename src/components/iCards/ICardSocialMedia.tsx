import { socialMediaIconsDict } from "@helpers/social-media-dict";
import { SupportedSocials } from "@types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'scss/css/style.css';
import 'styles/ICards.css';

type ICardSocialMediaProps = {
    url: string;
    social: SupportedSocials;
}

const ICardSocialMedia = ({url, social}: ICardSocialMediaProps): JSX.Element => {
    return (
        <div
            id={social}
            className='
                mb-2 social-media-icon
                d-flex align-items-center justify-content-center
            '
        >
            <a
                id='social-a-wrapper'
                href={url}
                target='_blank'
                rel='noreferrer'
                className={`
                    text-decoration-none
                    rounded-5 p-3
                    d-flex justify-content-center
                `}
                style={socialMediaIconsDict[social].style}
            >
                <FontAwesomeIcon
                    icon={socialMediaIconsDict[social].icon}
                />
            </a>
        </div>
    )
}

export default ICardSocialMedia;