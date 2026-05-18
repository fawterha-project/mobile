import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';

import ForgotPasswordScreen from './ForgotPasswordScreen';

import SignUpScreen from './SignUpScreen';

import HomeScreen from './HomeScreen';

import HomeWithInvoicesScreen from './HomeWithInvoicesScreen';

import VerifyEmailScreen from './VerifyEmailScreen';

import ResetPasswordScreen from './ResetPasswordScreen';

import SuccessfulSignUpScreen from './SuccessfulSignUpScreen';

import FAQScreen from './FAQScreen';

import CameraPermissionScreen from './CameraPermissionScreen';

import CameraScreen from './CameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="IntroScreen" component={IntroScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />

        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen
          name="HomeWithInvoicesScreen"
          component={HomeWithInvoicesScreen}
        />

        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />

        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />

        <Stack.Screen
          name="SuccessfulSignUpScreen"
          component={SuccessfulSignUpScreen}
        />

        <Stack.Screen name="FAQScreen" component={FAQScreen} />

        <Stack.Screen
          name="CameraPermissionScreen"
          component={CameraPermissionScreen}
        />

        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
