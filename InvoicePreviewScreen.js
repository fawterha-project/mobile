import React from 'react';
import { colors } from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { invoicePreviewStyles as styles } from './styles';

const InvoicePreviewScreen = ({ navigation, route }) => {
  const { fileData } = route.params || {};
  const isPdf = fileData?.type?.includes('pdf');
  const handleUpload = () => {
    navigation.navigate('ProcessingInvoice', {
      fileData,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.black} />
      </TouchableOpacity>

      <Text style={styles.title}>معاينة الفاتورة</Text>

      {isPdf ? (
        <View
          style={[
            styles.invoiceImage,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <MaterialIcons
            name="picture-as-pdf"
            size={90}
            color={colors.errorRed}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontFamily: 'Tajawal-Medium',
              color: colors.black,
            }}
          >
            {fileData?.fileName}
          </Text>
        </View>
      ) : (
        <Image
          source={{
            uri: fileData?.uri,
          }}
          style={styles.invoiceImage}
        />
      )}

      <TouchableOpacity
        style={styles.changeButton}
        onPress={() => navigation.goBack()}
      >

        <Text style={[styles.changeButtonText, { marginHorizontal: 8 }]}>
          تغيير الصورة
        </Text>
      </TouchableOpacity>

      <Text style={styles.checkTitle}>تأكد من وضوح الفاتورة</Text>

      <View style={styles.checkRow1}>
        <MaterialIcons name="check-circle" size={20} color={colors.green} />

        <Text style={styles.checkText}>البيانات واضحة ومقروءة</Text>
      </View>

      <View style={styles.checkRow2}>
        <MaterialIcons name="check-circle" size={20} color={colors.green} />

        <Text style={styles.checkText}>الإضاءة جيدة</Text>
      </View>

      <View style={styles.checkRow3}>
        <MaterialIcons name="check-circle" size={20} color={colors.green} />

        <Text style={styles.checkText}>الفاتورة غير مقطوعة</Text>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>رفع الفاتورة</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvoicePreviewScreen;