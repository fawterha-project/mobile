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
first_name:name,
last_name:'',
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
]=`Bearer ${response.data.token}`;

return response.data;

}

catch(error){

throw(
error.response?.data ||
error.message
);

}

};



export const loginUser = async (
email,
password
)=>{

try{

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

// حفظ التوكن
await AsyncStorage.setItem(
'userToken',
response.data.token
);

// إرساله تلقائياً مع كل الطلبات
api.defaults.headers.common[
'Authorization'
]=`Bearer ${response.data.token}`;

return response.data;

}

catch(error){

throw(
error.response?.data ||
error.message
);

}

};



export const verifySignupCode = async (
email,
code
)=>{

try{

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

catch(error){

throw(
error.response?.data ||
error.message
);

}

};