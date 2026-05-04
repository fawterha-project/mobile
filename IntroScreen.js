import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { introStyles } from './appStyles';

const IntroScreen = () => {
  return (
    <SafeAreaView style={introStyles.container}>
      <Image 
        source={require('./image.png')}
        style={[introStyles.logo, { left: 91, top: 144 }]}
        resizeMode="contain"
      />

      <Text style={[introStyles.title, { left: 138, top: 364 }]}>أمّنها في فوترها</Text>

      <Text style={[introStyles.subtitle, { left: 100, top: 425 }]}>
        منصة ذكية لإدارة مصاريفك اليومية.
      </Text>

      <TouchableOpacity style={[introStyles.button, { left: 89, top: 670 }]}>
        <Text style={introStyles.buttonText}>جاهز؟ ابدأ!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;