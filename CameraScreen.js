import React, { useRef, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Camera } from 'react-native-camera-kit';

import { cameraStyles, colors } from './styles';

const CameraScreen = ({ navigation }) => {

  const cameraRef = useRef(null);

  const [flashOn, setFlashOn] =
    useState(false);

  const [
    showCapturePopup,
    setShowCapturePopup
  ] = useState(false);

  return (

    <View style={cameraStyles.container}>

      <Camera
        ref={cameraRef}
        style={cameraStyles.camera}
        cameraType={'back'}
        flashMode={
          flashOn
          ? 'on'
          : 'off'
        }
      />

      <TouchableOpacity
        style={cameraStyles.backButton}
        onPress={() =>
          navigation.goBack()
        }
      >
        <MaterialIcons
          name="arrow-back"
          size={28}
          color={colors.white}
        />
      </TouchableOpacity>


      <Text style={cameraStyles.title}>
        وجه الفاتورة داخل الإطار خلنا نلقطها
      </Text>


      <View style={cameraStyles.overlay}>
        <View
          style={cameraStyles.scanFrame}
        />
      </View>


      <TouchableOpacity
        style={cameraStyles.captureButton}
        onPress={async () => {

          try {

            const image =
            await cameraRef.current.capture();

            console.log(
              image.uri
            );

            setShowCapturePopup(
              true
            );

          }

          catch(error){

            console.log(error);

          }

        }}
      >

        <View
          style={cameraStyles.innerButton}
        />

      </TouchableOpacity>


      <TouchableOpacity
        style={cameraStyles.soundButton}
        onPress={() =>
          setFlashOn(!flashOn)
        }
      >

        <MaterialIcons
          name={
            flashOn
            ? 'flash-on'
            : 'flash-off'
          }
          size={24}
          color={colors.white}
        />

      </TouchableOpacity>


      {
      showCapturePopup && (

      <View
      style={
      cameraStyles.popupOverlay
      }
      >

      <View
      style={
      cameraStyles.popupCard
      }
      >

      <View
      style={
      cameraStyles.iconCircle
      }
      >

      <MaterialIcons
      name="check"
      size={45}
      color={colors.blue}
      />

      </View>


      <Text
      style={
      cameraStyles.popupTitle
      }
      >
      تم الالتقاط
      </Text>


      <Text
      style={
      cameraStyles.popupSubtitle
      }
      >
      تم التقاط الصورة بنجاح
      </Text>


      <TouchableOpacity
      style={
      cameraStyles.popupButton
      }
      onPress={() =>
      setShowCapturePopup(
      false
      )
      }
      >

      <Text
      style={
      cameraStyles.popupButtonText
      }
      >
      موافق
      </Text>

      </TouchableOpacity>

      </View>

      </View>

      )}

    </View>

  );

};

export default CameraScreen;