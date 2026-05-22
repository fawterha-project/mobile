import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { cameraStyles, failedScanStyles, colors } from './styles';

const FailedScanScreen = ({ navigation }) => {
  const [flashOn, setFlashOn] = useState(false);

  return (
    <View style={cameraStyles.container}>
      {/* زر الرجوع */}
      <TouchableOpacity
        style={cameraStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={28} color={colors.white} />
      </TouchableOpacity>

      {/* العنوان */}
      <Text style={cameraStyles.title}>
        وجه الفاتورة داخل الإطار خلنا نلقطها
      </Text>

      {/* واجهة فشل السكان */}
      <View style={failedScanStyles.overlay}>
        <View style={failedScanStyles.scanFrame}>
          <View style={failedScanStyles.errorIconCircle}>
            <MaterialIcons
              name="priority-high"
              size={60}
              color={colors.white}
            />
          </View>

          <Text style={failedScanStyles.errorTitle}>
            ما قدرنا نلقط الفاتورة
          </Text>

          <Text style={failedScanStyles.errorSubtitle}>
            خلك أقرب وصورها مرة ثانية
          </Text>
        </View>
      </View>

      {/* زر إعادة المحاولة */}
      <TouchableOpacity
        style={cameraStyles.captureButton}
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <View style={cameraStyles.innerButton} />
      </TouchableOpacity>

      {/* زر الفلاش */}
      <TouchableOpacity
        style={cameraStyles.soundButton}
        onPress={() => setFlashOn(!flashOn)}
      >
        <MaterialIcons
          name={flashOn ? 'flash-on' : 'flash-off'}
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FailedScanScreen;