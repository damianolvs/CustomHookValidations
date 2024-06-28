import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";
import LoginPage from "../pages/LoginPage";

const Stack = createNativeStackNavigator()

function AuthStack(){
    const { authData, login, logout } = useAuth()
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginPage}/>
        </Stack.Navigator>
    )

}
export default AuthStack