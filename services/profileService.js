import api from './api';

export const getProfile = async () => {

    try {

        const response =
            await api.get(
                '/auth/profile'
            );

        return response.data.user;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};


export const updateProfile = async (
    data
) => {

    try {

        const response =
            await api.patch(
                '/auth/profile',
                data
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
export const changePassword =
    async (

        currentPassword,
        newPassword

    ) => {

        try {

            const response =
                await api.patch(

                    '/auth/change-password',

                    {

                        currentPassword,

                        newPassword

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
export const getExpenseLimit =
    async (users_id) => {

        try {

            const response =
                await api.get(

                    `/expense-limits?users_id=${users_id}`

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

export const updateExpenseLimit =
    async (

        users_id,
        amount

    ) => {

        try {

            const response =
                await api.put(

                    '/expense-limits',

                    {

                        users_id,

                        monthly_limit:
                            Number(amount)

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

export const deleteAccount =
    async () => {

        try {

            const response =
                await api.delete(

                    '/auth/delete-account'

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