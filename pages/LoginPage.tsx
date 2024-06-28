// Importa los hooks necesarios
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import useFormValidation from "../hooks/useFormValidation";
import useAuth from "../hooks/useAuth";

function LoginPage() {
    // Usa el hook useFormValidation
    const { username, password, errors, handleUsernameChange, handlePasswordChange, validateForm, clearErrors } = useFormValidation();
    
    // Usa el hook useAuth para manejar la autenticación
    const { login } = useAuth();

    // Función para manejar el intento de login
    const handleLogin = async () => {
        clearErrors(); // Limpia los errores previos
        const isValid = validateForm(); // Valida el formulario

        if (isValid) {
            try {
                await login(username, password); // Llama a la función de login desde useAuth
                // Lógica adicional después del login exitoso
            } catch (error) {
                console.error("Login failed:", error);
                // Manejo de errores de login
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={handleUsernameChange}
            />
            {errors.username && <Text style={styles.error}>{errors.username}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={handlePasswordChange}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
    },
    error: {
        color: "red",
        marginBottom: 5,
    },
});

export default LoginPage;
