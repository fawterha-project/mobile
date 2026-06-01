import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { cameraStyles, blurScanStyles, colors } from './styles';

const BlurScanScreen = ({ navigation }) => {
  return (
    <View style={cameraStyles.container}>
      <TouchableOpacity
        style={cameraStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={28} color={colors.white} />
      </TouchableOpacity>

      <View style={blurScanStyles.overlay}>
        <View style={blurScanStyles.scanFrame}>
          <MaterialIcons
            name="warning"
            size={90}
            color={colors.yellow}
            style={blurScanStyles.warningIcon}
          />

          <Text style={blurScanStyles.title}>الصورة مو واضحة</Text>

          <Text style={blurScanStyles.subtitle}>
            حاول مرة ثانية بإضاءة أفضل
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={cameraStyles.captureButton}
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <View style={cameraStyles.innerButton} />
      </TouchableOpacity>

      <TouchableOpacity style={cameraStyles.soundButton}>
        <MaterialIcons name="flash-off" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default BlurScanScreen;