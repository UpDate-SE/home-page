import { useState } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'scss/css/style.css';

type ICardSmOptionProps = {
    onClick: () => void;
    hoverColor: string;
    icon: IconDefinition;
    className?: string;
}

const ICardSmOption = ({onClick, hoverColor, icon, className}: ICardSmOptionProps): JSX.Element => {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <FontAwesomeIcon
            icon={icon}
            style={{
                cursor: 'pointer',
                color: `${hover ? hoverColor : ''}`
            }}
            className={className}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        />
    )
}

export default ICardSmOption;