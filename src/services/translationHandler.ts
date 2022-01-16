import { TOptions } from 'i18next';
import { isBlank } from './stringUtils';

const namespaceTranslationSeparator = ':';

export const translateFullContent = (
    t: any,
    i18n: any,
    text: string,
    translationBasePath = '',
    options: string | TOptions | null = null
): string => {
    if (isBlank(text)) {
        return '';
    }

    if (text.includes(namespaceTranslationSeparator)) {
        return text;
    }

    const translationFullPath = isBlank(translationBasePath)
        ? text
        : `${translationBasePath}.${text}`;

    if (!i18n.exists(translationFullPath)) {
        return text;
    }

    return options ? t(translationFullPath, options) : t(translationFullPath);
};