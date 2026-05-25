import axios from 'axios';

import AsyncStorage
from '@react-native-async-storage/async-storage';

const api = axios.create({

baseURL:'http://168.144.118.123',

});


api.interceptors.request.use(

async(config)=>{

const token =
await AsyncStorage.getItem(
'userToken'
);

if(token){

config.headers.Authorization =
`Bearer ${token}`;

}

return config;

},

(error)=>{

return Promise.reject(
error
);

}

);

export default api;