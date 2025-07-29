// src/store/useRegisterStore.ts
import { create } from 'zustand';

interface RegisterInfo {
    gender: string;
    age: string;
    language: string;
    location: string;
}

interface IsCheck {
    all: boolean;
    privacy: boolean;
    service: boolean;
}

interface RegisterStore {
    isNext: boolean;
    setIsNext: (next: boolean) => void;

    registerInfo: RegisterInfo;
    setRegisterInfo: (field: keyof RegisterInfo, value: string) => void;

    isCheck: IsCheck;
    handleCheckBoxChange: (key: "privacy" | "service", value: boolean) => void;
    handleAllCheck: () => void;

    resetRegister: () => void;
}

 const userStore = create<RegisterStore>((set) => ({
    isNext: false,
    setIsNext: (next) => set({ isNext: next }),

    registerInfo: {
        gender: "",
        age: "",
        language: "",
        location: ""
    },
    setRegisterInfo: (field, value) =>
        set((state) => ({
            registerInfo: {
                ...state.registerInfo,
                [field]: value,
            }
        })),

    isCheck: {
        all: false,
        privacy: false,
        service: false,
    },
    handleCheckBoxChange: (key, value) =>
        set((state) => {
            const updated = {
                ...state.isCheck,
                [key]: value,
            };
            updated.all = updated.privacy && updated.service;
            return { isCheck: updated };
        }),

    handleAllCheck: () =>
        set((state) => {
            const newValue = !state.isCheck.all;
            return {
                isCheck: {
                    all: newValue,
                    privacy: newValue,
                    service: newValue,
                }
            };
        }),

    resetRegister: () =>
        set({
            isNext: false,
            registerInfo: {
                gender: "",
                age: "",
                language: "",
                location: ""
            },
            isCheck: {
                all: false,
                privacy: false,
                service: false,
            }
        }),
}));

export default userStore;