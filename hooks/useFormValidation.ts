import { useState } from "react";

type FormErrors = {
    username?: string;
    password?: string;
};

function useFormValidation() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        let valid = true;
        const newErrors: FormErrors = {};

        if (!username.trim()) {
            newErrors.username = "Username is required";
            valid = false;
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const clearErrors = () => {
        setErrors({});
    };

    return {
        username,
        password,
        errors,
        handleUsernameChange,
        handlePasswordChange,
        validateForm,
        clearErrors,
    };
}

export default useFormValidation;
