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
        source={require('./android/app/src/main/assets/images/background.png')}
        style={introStyles.waveImage}
        resizeMode="cover"
      />

      {/* صورة الفاتورة */}
      <Image
        source={require('./android/app/src/main/assets/images/invoice_intro.png')}
        style={introStyles.mainImage}
        resizeMode="contain"
      />

      {/* اللوقو */}
      <Image
        source={require('./android/app/src/main/assets/images/fawterha.jpg')}
        style={introStyles.logo}
        resizeMode="contain"
      />

      <Text style={introStyles.title}>كل فواتيرك في مكان واحد</Text>

      <Text style={introStyles.description}>
        احفظ، نظم، وراجع جميع فواتيرك بسهولة وذكاء في تطبيق واحد.
      </Text>

      <TouchableOpacity
        style={introStyles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={introStyles.buttonText}>جاهزة؟ ابدأ!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;