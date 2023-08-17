import { BusinessCard, WithId } from "@types";

export const ICardtoFormData = (card: WithId<BusinessCard> | BusinessCard): FormData => {
    const formData = new FormData();
    const {socials, ...cardStripped} = card;

    for(const key in cardStripped) {
        const cRecord = cardStripped as Record<string,any>;
        formData.append(key, cRecord[key]);
    }

    formData.append('socials', JSON.stringify(socials));
    return formData;
}