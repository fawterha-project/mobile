import api from './api';

import AsyncStorage
    from '@react-native-async-storage/async-storage';

export const signupUser = async (
    name,
    email,
    password
) => {

    try {

        const response =
            await api.post(
                '/auth/register',
                {
                    first_name: name,
                    last_name: '',
                    email,
                    password,
                }
            );

        // حفظ التوكن
        await AsyncStorage.setItem(
            'userToken',
            response.data.token
        );

        // إرساله تلقائياً مع كل الطلبات
        api.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${response.data.token}`;

        return response.data;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};



export const loginUser = async (
    email,
    password
) => {

    try {

        const response =
            await api.post(
                '/auth/login',
                {
                    email,
                    password,
                }
            );

        console.log(
            'Login Result:',
            response.data
        );

        await AsyncStorage.setItem(
            'userToken',
            response.data.token
        );

        await AsyncStorage.setItem(

            'user',

            JSON.stringify(
                response.data.user
            )

        );

        // حفظ التوكن
        await AsyncStorage.setItem(
            'userToken',
            response.data.token
        );

        // إرساله تلقائياً مع كل الطلبات
        api.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${response.data.token}`;

        return response.data;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};



export const verifySignupCode = async (
    email,
    code
) => {

    try {

        const response =
            await api.post(
                '/auth/verify-signup',
                {
                    email,
                    code
                }
            );

        return response.data;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};
export const forgotPassword = async (
    email
) => {

    try {

        const response =
            await api.post(
                '/auth/forgot-password',
                {
                    email
                }
            );

        return response.data;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};
export const verifyCode = async (
    email,
    code
) => {

    try {

        const response =
            await api.post(
                '/auth/verify-code',
                {
                    email,
                    code
                }
            );

        return response.data;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};
export const resetPassword = async (
  email,
  code,
  password
) => {

  try {

    const response =
      await api.post(
        '/auth/reset-password',
        {
          email,
          code,
          newPassword: password
        }
      );

    return response.data;

  }

  catch (error) {

    throw (
      error.response?.data ||
      error.message
    );

  }

};
