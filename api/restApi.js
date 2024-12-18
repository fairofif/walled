import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.254.164.127/api/v1'
})

export const register = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData)
        return response.data.data
    } catch (e) {
        throw new Error('Failed to register: ' + e.message)
    }
}

export const login = async (userData) => {
    try {
        const response = await api.post('/auth/login', userData)
        return response.data.data
    } catch (e) {
        throw new Error('Failed login: ' + e.message)
    }
 }

export const getUserAuth = async (token) => {
    try {
        const response = await api.get('/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data;
    } catch (e) {
        throw new Error('Failed to fetch user data: ' + e.message);
    }
}

export const getMyTransaction = async (token) => {
    try {
        const response = await api.get('/transactions', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data
    } catch (e) {
        throw new Error('Failed to fetch list transaction: '+ e.message);
    }
}

export const makeTransaction = async (datas, token) => {
    try {
        const response = await api.post('/transactions', datas, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.data
    } catch (e) {
        throw new Error('Failed make transaction: '+ e.message)
    }
}