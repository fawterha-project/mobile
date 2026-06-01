import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { uploadReceipt, processReceipt } from './services/receiptService';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Camera } from 'react-native-camera-kit';
import { cameraStyles, colors } from './styles';

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef(null);

  const [flashOn, setFlashOn] = useState(false);

  const [showCapturePopup, setShowCapturePopup] = useState(false);

  const [invoiceData, setInvoiceData] = useState(null);
  return (
    <View style={cameraStyles.container}>
      <Camera
        ref={cameraRef}
        style={cameraStyles.camera}
        cameraType={'back'}
        flashMode={flashOn ? 'on' : 'off'}
      />

      <TouchableOpacity
        style={cameraStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={28} color={colors.white} />
      </TouchableOpacity>

      <Text style={cameraStyles.title}>
        وجه الفاتورة داخل الإطار خلنا نلقطها
      </Text>

      <View style={cameraStyles.overlay}>
        <View style={cameraStyles.scanFrame} />
      </View>

      <TouchableOpacity
        style={cameraStyles.captureButton}
        onPress={async () => {
          try {
            const image = await cameraRef.current.capture();

            if (!image) {
              return;
            }

            console.log('الصورة:', image);

            const uploadResult = await uploadReceipt(image);

            console.log('رفع:', uploadResult);

            const attachmentId = uploadResult.attachment?.attachment_id;

            if (!attachmentId) {
              navigation.navigate('FailedScanScreen');

              return;
            }

            const processResult = await processReceipt(attachmentId);

            console.log('البيانات:', processResult);

            if (!processResult?.extracted_data) {
              navigation.navigate('FailedScanScreen');

              return;
            }

            setInvoiceData({
              extractedData: processResult.extracted_data,

              attachmentId: attachmentId,
            });

            setShowCapturePopup(true);
          } catch (error) {
            console.log('ERROR RESPONSE:', error?.response?.data);

            console.log('ERROR STATUS:', error?.response?.status);

            navigation.navigate('FailedScanScreen');
          }
        }}
      >
        <View style={cameraStyles.innerButton} />
      </TouchableOpacity>

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

      {showCapturePopup && (
        <View style={cameraStyles.popupOverlay}>
          <View style={cameraStyles.popupCard}>
            <View style={cameraStyles.iconCircle}>
              <MaterialIcons name="check" size={45} color={colors.blue} />
            </View>

            <Text style={cameraStyles.popupTitle}>تم التقاط الفاتورة</Text>

            <Text style={cameraStyles.popupSubtitle}>
              تم التقاط الصورة بنجاح ويمكنك عرضها الآن
            </Text>

            <TouchableOpacity
              style={cameraStyles.popupButton}
              onPress={() => {
                setShowCapturePopup(false);

                navigation.navigate('InvoiceScreen', invoiceData);
              }}
            >
              <Text style={cameraStyles.popupButtonText}>عرض الفاتورة</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 15,
              }}
              onPress={() => setShowCapturePopup(false)}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: colors.gray,
                }}
              >
                التقاط مرة أخرى
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default CameraScreen;