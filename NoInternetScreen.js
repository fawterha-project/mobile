import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { noInternetStyles, bottomNavStyles, colors } from './styles';

const NoInternetScreen = ({ navigation }) => {
  return (
    <View style={noInternetStyles.container}>
      <Image
        source={require('./android/app/src/main/assets/images/fawterha.jpg')}
        style={noInternetStyles.logo}
        resizeMode="contain"
      />

      <TouchableOpacity style={noInternetStyles.notificationIcon}>
        <MaterialIcons
          name="notifications"
          size={20}
          color={colors.blue}
        />
      </TouchableOpacity>

      <Image
        source={require('./android/app/src/main/assets/images/nowifi.jpg')}
        style={noInternetStyles.noWifiImage}
        resizeMode="contain"
      />

      <Text style={noInternetStyles.title}>ما فيه إنترنت الحين 🛰️</Text>

      <Text style={noInternetStyles.description}>
        تأكد من الشبكة وجرب مرة ثانية
      </Text>

      <View style={bottomNavStyles.bottomNav}>
        <BottomTab icon="more-horiz" label="المزيد" />
        <BottomTab icon="bar-chart" label="التقارير" />

        <TouchableOpacity style={bottomNavStyles.addButton} activeOpacity={0.8}>
          <MaterialIcons name="add" size={42} color={colors.white} />
        </TouchableOpacity>

        <BottomTab icon="receipt-long" label="الفواتير" />
        <BottomTab icon="home" label="الرئيسية" active />
      </View>
    </View>
  );
};

const BottomTab = ({ icon, label, active }) => {
  return (
    <TouchableOpacity style={bottomNavStyles.tabItem} activeOpacity={0.8}>
      <MaterialIcons
        name={icon}
        size={22}
        color={active ? colors.blue : colors.gray}
      />
      <Text
        style={[
          bottomNavStyles.tabLabel,
          active && bottomNavStyles.tabLabelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default NoInternetScreen;