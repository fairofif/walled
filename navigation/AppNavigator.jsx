import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login"
import Register from "../screens/Register";
import TopUp from "../screens/TopUp";
import Transfer from "../screens/Transfer";
import { useAuth } from "../context/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: 60, paddingBottong: 10 }
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: "Dashboard",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Transfer"
                component={Transfer}
                options={{
                    title: "Transfer",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="exchange" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="TopUp"
                component={TopUp}
                options={{
                    title: "Top Up",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="credit-card" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    const auth = useAuth();

    return (
        <Stack.Navigator initialRouteName='Login'>
            {auth.user ? (
                <>
                    <Stack.Screen
                        name="Main"
                        component={TabNavigator}
                        options={{ title: "Main", headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                </>
            )}


        </Stack.Navigator>
    )
}