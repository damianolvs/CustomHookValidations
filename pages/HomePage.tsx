import { View, Button } from "react-native"
import useAuth from "../hooks/useAuth"

function HomePage(){
    const { authData, login, logout } = useAuth()
    return (
    <View><Button title="Logout" onPress={logout}></Button></View>
    )
}

export default HomePage