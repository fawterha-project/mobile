import React, {
  useEffect,
} from 'react';

import {
  uploadReceipt,
} from './services/receiptService';

import { colors } from './styles';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


import Svg, { Circle } from 'react-native-svg';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { uploadingInvoiceStyles as styles } from './styles';

const UploadingInvoiceScreen = ({
  navigation,
  route,
}) => {

  const { fileData } =
    route.params || {};

    const uploadInvoice =
  async () => {

    try {

      const uploadResult =
        await uploadReceipt(
          fileData
        );

      console.log(
        'UPLOAD RESULT:',
        uploadResult
      );

      const attachmentId =
        uploadResult?.attachment
          ?.attachment_id;

      navigation.replace(
  'ProcessingInvoice',
  {
    attachmentId,
  }
);

    } catch (error) {

      console.log(
        'UPLOAD ERROR:',
        error
      );

    }

  };
    useEffect(() => {

  uploadInvoice();

}, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.black}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        جاري رفع الفاتورة
      </Text>

      <View style={styles.circleContainer}>

        <Svg width={220} height={220}>
          <Circle
            cx="110"
            cy="110"
            r="90"
            stroke="#EEF2FF"
            strokeWidth="10"
            fill="none"
          />

          <Circle
            cx="110"
            cy="110"
            r="90"
            stroke={colors.blue}
            strokeWidth="10"
            fill="none"
            strokeDasharray="565"
            strokeDashoffset="158"
            strokeLinecap="round"
            rotation="-90"
            origin="110,110"
          />
        </Svg>

        <View style={styles.iconContainer}>
          <MaterialIcons
            name="cloud-upload"
            size={80}
            color={colors.blue}
          />
        </View>

      </View>

      <Text style={styles.percentText}>
        72%
      </Text>

      <Text style={styles.uploadingTitle}>
        جاري رفع الفاتورة...
      </Text>

      <Text style={styles.uploadingSubtitle}>
        يرجى الانتظار قليلاً
      </Text>

      <View style={styles.securityCard}>

        <MaterialIcons
          name="lock-outline"
          size={30}
          color={colors.blue}
        />

        <View style={styles.securityTextContainer}>
          <Text style={styles.securityTitle}>
            جاري رفع ملفك بشكل آمن
          </Text>

          <Text style={styles.securityDescription}>
            لا تغلق التطبيق أثناء عملية الرفع
          </Text>
        </View>

      </View>

    </View>
  );
};

export default UploadingInvoiceScreen;