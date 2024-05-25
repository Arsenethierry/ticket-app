import { images } from "@/constants"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ImageBackground, View } from "react-native"

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar style="light" />
        </>
    )
}

export default AuthLayout