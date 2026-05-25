import React,{useEffect,useState} from 'react';

import {
View,
Text
} from 'react-native';

import api from './services/api';

export default function TestConnection(){

const [message,setMessage]=useState('جاري الاتصال...');

useEffect(()=>{

checkServer();

},[]);

const checkServer=async()=>{

try{

const response=
await api.get('/test');

setMessage(response.data.message);

}

catch(error){

setMessage(
'فشل الاتصال بالسيرفر'
);

console.log(error);

}

};

return(

<View
style={{
flex:1,
justifyContent:'center',
alignItems:'center'
}}
>

<Text
style={{
fontSize:22
}}
>

{message}

</Text>

</View>

);

}