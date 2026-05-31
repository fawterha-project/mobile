import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TestConnection from './TestConnection';

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


import ProfileSettingScreen from './ProfileSettingScreen';
import ProfileEditScreen from './ProfileEditScreen';
import BillsScreen from './BillsScreen';
import CategoriesScreen from './CategoriesScreen';
import CategoryGroceriesScreen from './CategoryGroceriesScreen';
import CategoryShoppingScreen from './CategoryShoppingScreen';
import CategoryRestaurantsScreen from './CategoryRestaurantsScreen';
import CategoryTransportScreen from './CategoryTransportScreen';
import CategoryHealthScreen from './CategoryHealthScreen';
import CategoryCommitmentsScreen from './CategoryCommitmentsScreen';
import CategoryOtherScreen from './CategoryOtherScreen';

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

import WeeklyReportsScreen from './WeeklyReportsScreen';
import MonthlyReportsScreen from './MonthlyReportsScreen';
import YearlyReportsScreen from './YearlyReportsScreen';

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
import UploadingInvoiceScreen from './UploadingInvoiceScreen';
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

initialRouteName="LoginScreen"

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
<Stack.Screen name="HomeWithInvoicesScreen" component={HomeWithInvoicesScreen}/>
<Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen}/>
<Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
<Stack.Screen name="SuccessfulSignUpScreen" component={SuccessfulSignUpScreen}/>
<Stack.Screen name="FAQScreen" component={FAQScreen}/>
<Stack.Screen name="CameraPermissionScreen" component={CameraPermissionScreen}/>
<Stack.Screen name="CameraScreen" component={CameraScreen}/>

<Stack.Screen name="ProfileSettingScreen" component={ProfileSettingScreen}/>
<Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>
<Stack.Screen name="BillsScreen" component={BillsScreen}/>
<Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
<Stack.Screen name="CategoryGroceries" component={CategoryGroceriesScreen}/>
<Stack.Screen name="CategoryShopping" component={CategoryShoppingScreen}/>
<Stack.Screen name="CategoryRestaurants" component={CategoryRestaurantsScreen}/>
<Stack.Screen name="CategoryTransport" component={CategoryTransportScreen}/>
<Stack.Screen name="CategoryHealth" component={CategoryHealthScreen}/>
<Stack.Screen name="CategoryCommitments" component={CategoryCommitmentsScreen}/>
<Stack.Screen name="CategoryOther" component={CategoryOtherScreen}/>

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

<Stack.Screen name="WeeklyReports" component={WeeklyReportsScreen}/>
<Stack.Screen name="MonthlyReports" component={MonthlyReportsScreen}/>
<Stack.Screen name="YearlyReports" component={YearlyReportsScreen}/>

<Stack.Screen name="EmptyWeeklyReports" component={EmptyWeeklyReportsScreen}/>
<Stack.Screen name="EmptyMonthlyReports" component={EmptyMonthlyReportsScreen}/>
<Stack.Screen name="EmptyYearlyReports" component={EmptyYearlyReportsScreen}/>

<Stack.Screen name="InvoiceDetails" component={InvoiceDetailsScreen}/>
<Stack.Screen name="BlurScanScreen" component={BlurScanScreen}/>
<Stack.Screen name="FailedScanScreen" component={FailedScanScreen}/>
<Stack.Screen name="InvoiceAddedScreen" component={InvoiceAddedScreen}/>
<Stack.Screen name="InvoiceScreen" component={InvoiceScreen}/>
<Stack.Screen name="UploadInvoice" component={UploadInvoiceScreen}/>
<Stack.Screen name="InvoicePreview" component={InvoicePreviewScreen}/>
<Stack.Screen name="UploadingInvoice"component={UploadingInvoiceScreen}/>
<Stack.Screen name="ProcessingInvoice"component={ProcessingInvoiceScreen}/>
<Stack.Screen name="InvoiceSuccess" component={InvoiceSuccessScreen}/>
</Stack.Navigator>

</NavigationContainer>

</GestureHandlerRootView>

);

};

export default App;