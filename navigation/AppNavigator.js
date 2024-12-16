import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login"
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}