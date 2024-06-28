import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomePage from "../pages/HomePage";

const Stack = createNativeStackNavigator()

function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
    )

}
export default AppStack