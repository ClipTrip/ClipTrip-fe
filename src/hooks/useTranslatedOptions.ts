import { useTranslation } from "react-i18next";
import { SELECT_OPTIONS, type SelectOptionType } from "@/utils/selectOption.ts";


export const useTranslatedOptions = (type: SelectOptionType) => {
    const { t } = useTranslation();
    const { namespace, items } = SELECT_OPTIONS[type];

    return items.map(({ value, labelKey }) => ({
        value,
        label: t(`${namespace}:${labelKey}`),
    }));
};
