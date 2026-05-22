import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { introStyles, colors } from './styles';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={introStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      {/* التموج */}
      <ImageBackground
        source={{
          uri: 'asset:/image/backgroundd.png'
        }}
        style={introStyles.waveImage}
        resizeMode="cover"
      />

      {/* صورة الفاتورة */}
      <Image
        source={{
          uri: 'asset:/image/invoice_intro.png'
        }}
        style={introStyles.mainImage}
        resizeMode="contain"
      />

      {/* اللوقو */}
      <Image
        source={{
          uri: 'asset:/image/fawterha.jpg'
        }}
        style={introStyles.logo}
        resizeMode="contain"
      />

      <Text style={introStyles.title}>كل فواتيرك في مكان واحد</Text>

      <Text style={introStyles.description}>
       اربط حساباتك، واستقبل فواتيرك تلقائيًا، ونظمها في مكان واحد
      </Text>

      <TouchableOpacity
        style={introStyles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={introStyles.buttonText}> ابدأ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;