import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login"
import Register from "../screens/Register";
import TopUp from "../screens/TopUp";
import Transfer from "../screens/Transfer";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}} />
            <Stack.Screen name='TopUp' component={TopUp} options={{headerShown: false}} />
            <Stack.Screen name='Transfer' component={Transfer} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}