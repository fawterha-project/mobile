import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { splashStyles } from './styles';

export default function SplashScreen() {
  return (
    <View style={splashStyles.splashContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={splashStyles.splashContent}>
        <Image
          source={{ uri: 'asset:/image/fawterha.jpg' }}
          style={splashStyles.splashLogo}
          resizeMode="contain"
        />

        <Text style={splashStyles.splashSubText}>
          آمنها في فوترها
        </Text>
      </View>
    </View>
  );
}