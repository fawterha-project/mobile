import api from './api';


export const getSummary = async (
    users_id
) => {

    try {

        const response =
            await api.get(
                `/reports/summary?users_id=${users_id}`
            );

        return response.data.summary;

    }

    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};


// جلب الفواتير
export const getReceipts = async (search = '') => {

    try {

        console.log('Search Value:', search);

        const response =
            await api.get(
                `/receipts?search=${search}`
            );

        return response.data.receipts;

    }
    catch (error) {

        throw (
            error.response?.data ||
            error.message
        );

    }

};