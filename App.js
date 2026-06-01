import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import SplashScreen from './SplashScreen';
import IntroScreen from './IntroScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import VerifyEmailScreen from './VerifyEmailScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import SuccessfulSignUpScreen from './SuccessfulSignUpScreen';
import FAQScreen from './FAQScreen';
import CameraPermissionScreen from './CameraPermissionScreen';
import CameraScreen from './CameraScreen';
import VerifyCodeScreen from './VerifyCodeScreen';


import ProfileSettingScreen from './ProfileSettingScreen';
import ProfileEditScreen from './ProfileEditScreen';


import EmptyCategoriesScreen from './EmptyCategoriesScreen';
import EmptyBillsScreen from './EmptyBillsScreen';
import EmptyCategoryGroceriesScreen from './EmptyCategoryGroceriesScreen';
import EmptyCategoryRestaurantsScreen from './EmptyCategoryRestaurantsScreen';
import EmptyCategoryShoppingScreen from './EmptyCategoryShoppingScreen';
import EmptyCategoryTransportScreen from './EmptyCategoryTransportScreen';
import EmptyCategoryHealthScreen from './EmptyCategoryHealthScreen';
import EmptyCategoryCommitmentsScreen from './EmptyCategoryCommitmentsScreen';
import EmptyCategoryOtherScreen from './EmptyCategoryOtherScreen';

import SpendingLimitScreen from './SpendingLimitScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

import AddBill from './AddBill.js';
import EmptyWeeklyReportsScreen from './EmptyWeeklyReportsScreen';
import EmptyMonthlyReportsScreen from './EmptyMonthlyReportsScreen';
import EmptyYearlyReportsScreen from './EmptyYearlyReportsScreen';

import InvoiceDetailsScreen from './InvoiceDetailsScreen';
import BlurScanScreen from './BlurScanScreen';
import FailedScanScreen from './FailedScanScreen';
import InvoiceAddedScreen from './InvoiceAddedScreen';
import InvoiceScreen from './InvoiceScreen';
import UploadInvoiceScreen from './UploadInvoiceScreen';
import InvoicePreviewScreen from './InvoicePreviewScreen';
import ProcessingInvoiceScreen from './ProcessingInvoiceScreen';
import InvoiceSuccessScreen from './InvoiceSuccessScreen';

const Stack=createNativeStackNavigator();

const App=()=>{

return(

<GestureHandlerRootView
style={{flex:1}}
>

<NavigationContainer>

<Stack.Navigator

initialRouteName="SplashScreen"

screenOptions={{
headerShown:false
}}

>

<Stack.Screen name="SplashScreen" component={SplashScreen}/>
<Stack.Screen name="IntroScreen" component={IntroScreen}/>
<Stack.Screen name="LoginScreen" component={LoginScreen}/>
<Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
<Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
<Stack.Screen name="HomeScreen" component={HomeScreen}/>
<Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen}/>
<Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen}/>
<Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
<Stack.Screen name="SuccessfulSignUpScreen" component={SuccessfulSignUpScreen}/>
<Stack.Screen name="FAQScreen" component={FAQScreen}/>
<Stack.Screen name="CameraPermissionScreen" component={CameraPermissionScreen}/>
<Stack.Screen name="CameraScreen" component={CameraScreen}/>

<Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen}/>
<Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>


<Stack.Screen name="EmptyCategories" component={EmptyCategoriesScreen}/>
<Stack.Screen name="EmptyBills" component={EmptyBillsScreen}/>
<Stack.Screen name="EmptyCategoryGroceries" component={EmptyCategoryGroceriesScreen}/>
<Stack.Screen name="EmptyCategoryRestaurants" component={EmptyCategoryRestaurantsScreen}/>
<Stack.Screen name="EmptyCategoryShopping" component={EmptyCategoryShoppingScreen}/>
<Stack.Screen name="EmptyCategoryTransport" component={EmptyCategoryTransportScreen}/>
<Stack.Screen name="EmptyCategoryHealth" component={EmptyCategoryHealthScreen}/>
<Stack.Screen name="EmptyCategoryCommitments" component={EmptyCategoryCommitmentsScreen}/>
<Stack.Screen name="EmptyCategoryOther" component={EmptyCategoryOtherScreen}/>

<Stack.Screen name="SpendingLimit" component={SpendingLimitScreen}/>
<Stack.Screen name="ChangePassword" component={ChangePasswordScreen}/>

<Stack.Screen name="EmptyWeeklyReports" component={EmptyWeeklyReportsScreen}/>
<Stack.Screen name="EmptyMonthlyReports" component={EmptyMonthlyReportsScreen}/>
<Stack.Screen name="EmptyYearlyReports" component={EmptyYearlyReportsScreen}/>
<Stack.Screen name="AddBill" component={AddBill}/>

<Stack.Screen name="InvoiceDetails" component={InvoiceDetailsScreen}/>
<Stack.Screen name="BlurScanScreen" component={BlurScanScreen}/>
<Stack.Screen name="FailedScanScreen" component={FailedScanScreen}/>
<Stack.Screen name="InvoiceAddedScreen" component={InvoiceAddedScreen}/>
<Stack.Screen name="InvoiceScreen" component={InvoiceScreen}/>
<Stack.Screen name="UploadInvoice" component={UploadInvoiceScreen}/>
<Stack.Screen name="InvoicePreview" component={InvoicePreviewScreen}/>
<Stack.Screen name="ProcessingInvoice"component={ProcessingInvoiceScreen}/>
<Stack.Screen name="InvoiceSuccess" component={InvoiceSuccessScreen}/>
</Stack.Navigator>

</NavigationContainer>

</GestureHandlerRootView>

);

};

export default App;