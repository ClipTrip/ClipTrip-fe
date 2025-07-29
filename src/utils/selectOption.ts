export const SELECT_OPTIONS = {
    gender: {
        namespace: "selectField",
        items: [
            { value: "MALE", labelKey: "selectField_gender-01" },
            { value: "FEMALE", labelKey: "selectField_gender-02" },
        ],
    },
    age: {
        namespace: "selectField",
        items: [
            { value: "CHILD", labelKey: "selectField_age-01" },
            { value: "TEENAGER", labelKey: "selectField_age-02" },
            { value: "YOUNG_ADULT", labelKey: "selectField_age-03" },
            { value: "ADULT", labelKey: "selectField_age-04" },
            { value: "SENIOR", labelKey: "selectField_age-05" },
        ],
    },
    language: {
        namespace: "selectField",
        items: [
            { value: "ENGLISH", labelKey: "selectField_language-01" },
            { value: "KOREAN", labelKey: "selectField_language-02" },
        ],
    },
    location: {
        namespace: "selectField",
        items: [
            { value: "UNITEDSTATES", labelKey: "selectField_country-01" },
            { value: "KOREA", labelKey: "selectField_country-02" },
            { value: "CHINA", labelKey: "selectField_country-03" },
            { value: "JAPAN", labelKey: "selectField_country-04" },
        ],
    },
} as const;

export type SelectOptionType = keyof typeof SELECT_OPTIONS;
