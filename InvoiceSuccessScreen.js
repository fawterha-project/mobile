import React from 'react';
import { colors } from './styles';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';

import { invoiceSuccessStyles as styles } from './styles';

const InvoiceSuccessScreen = ({
  navigation,
  route,
}) => {

  const {
    attachmentId,
    extractedData,
    fileData,
  } = route.params || {};

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
        تم اكتشاف الفاتورة
      </Text>

      <View style={styles.successContainer}>

        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <MaterialIcons
              name="check"
              size={60}
              color={colors.white}
            />
          </View>
        </View>

      </View>

      <Text style={styles.successTitle}>
        تم رفع الفاتورة بنجاح
      </Text>

      <Text style={styles.successSubtitle}>
        تم استخراج البيانات بنجاح
      </Text>

      <Text style={styles.successSubtitle2}>
        يمكنك مراجعتها الآن
      </Text>

      <TouchableOpacity
        style={styles.viewButton}
        onPress={() =>
          navigation.navigate(
            'InvoiceScreen',
            {
              attachmentId,
              extractedData,
              fileData,
            }
          )
        }
      >
        <Text style={styles.viewButtonText}>
          عرض الفاتورة
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadAnotherButton}
        onPress={() =>
          navigation.navigate(
            'UploadInvoice'
          )
        }
      >
        <Text style={styles.uploadAnotherButtonText}>
          رفع فاتورة أخرى
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default InvoiceSuccessScreen;