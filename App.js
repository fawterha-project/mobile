import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
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
import ReportsScreen from './ReportsScreen';
import EmptyReportsScreen from './EmptyReportsScreen';
import WeeklyReportsScreen from './WeeklyReportsScreen';
import MonthlyReportsScreen from './MonthlyReportsScreen';
import YearlyReportsScreen from './YearlyReportsScreen';
import EmptyWeeklyReportsScreen from './EmptyWeeklyReportsScreen';
import EmptyMonthlyReportsScreen from './EmptyMonthlyReportsScreen';
import EmptyYearlyReportsScreen from './EmptyYearlyReportsScreen';
import InvoiceDetailsScreen from './InvoiceDetailsScreen';
import CameraPermissionScreen from './CameraPermissionScreen';
import CameraScreen from './CameraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bill"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Profile" component={ProfileSettingScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />

        <Stack.Screen name="Bills" component={BillsScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryGroceries" component={CategoryGroceriesScreen} />
        <Stack.Screen name="CategoryShopping" component={CategoryShoppingScreen} />
        <Stack.Screen name="CategoryRestaurants" component={CategoryRestaurantsScreen} />
        <Stack.Screen name="CategoryTransport" component={CategoryTransportScreen} />
        <Stack.Screen name="CategoryHealth" component={CategoryHealthScreen} />
        <Stack.Screen name="CategoryCommitments" component={CategoryCommitmentsScreen} />
        <Stack.Screen name="EmptyCategories" component={EmptyCategoriesScreen} />
        <Stack.Screen name="EmptyBills" component={EmptyBillsScreen} />
        <Stack.Screen name="EmptyCategoryGroceries" component={EmptyCategoryGroceriesScreen} />
        <Stack.Screen name="EmptyCategoryRestaurants" component={EmptyCategoryRestaurantsScreen} />
        <Stack.Screen name="EmptyCategoryShopping" component={EmptyCategoryShoppingScreen} />
        <Stack.Screen name="EmptyCategoryTransport" component={EmptyCategoryTransportScreen} />
        <Stack.Screen name="EmptyCategoryHealth" component={EmptyCategoryHealthScreen} />
        <Stack.Screen name="EmptyCategoryCommitments" component={EmptyCategoryCommitmentsScreen} />
        <Stack.Screen name="EmptyCategoryOther" component={EmptyCategoryOtherScreen} />
        <Stack.Screen name="SpendingLimit" component={SpendingLimitScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="EmptyReports" component={EmptyReportsScreen} />
        <Stack.Screen name="WeeklyReports" component={WeeklyReportsScreen} />
        <Stack.Screen name="MonthlyReports" component={MonthlyReportsScreen} />
        <Stack.Screen name="YearlyReports" component={YearlyReportsScreen} />
        <Stack.Screen name="EmptyWeeklyReports" component={EmptyWeeklyReportsScreen} />
        <Stack.Screen name="EmptyMonthlyReports" component={EmptyMonthlyReportsScreen} />
        <Stack.Screen name="EmptyYearlyReports" component={EmptyYearlyReportsScreen} />
        <Stack.Screen name="CategoryOther" component={CategoryOtherScreen} />
        <Stack.Screen name="InvoiceDetails" component={InvoiceDetailsScreen} />
        <Stack.Screen name="CameraPermissionScreen" component={CameraPermissionScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
