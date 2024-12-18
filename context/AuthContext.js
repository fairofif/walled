import { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (token) => {
        setUser({ token });
        await AsyncStorage.setItem('userToken', token);
    }

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('userToken');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
