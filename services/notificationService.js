import api from './api';

import AsyncStorage
from '@react-native-async-storage/async-storage';

export const getNotifications =
async(users_id)=>{

try{

const token=

await AsyncStorage.getItem(
'userToken'
);

const response=

await api.get(

`/notifications?users_id=${users_id}`,

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

return response.data.notifications;

}

catch(error){

throw(
error.response?.data ||
error.message
);

}

};