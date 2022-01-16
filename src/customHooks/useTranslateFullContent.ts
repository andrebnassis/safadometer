import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';
import { translateFullContent } from '../services/translationHandler';

const useTranslateFullContent = (
    text: string,
    translationBasePath = '',
    options: string | TOptions | null = null
): string => {
    const { t, i18n } = useTranslation();
    return translateFullContent(t, i18n, text, translationBasePath, options);
};

export default useTranslateFullContent;