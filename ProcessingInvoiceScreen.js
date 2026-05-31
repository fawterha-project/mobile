import React, {
  useEffect,
  useState,
} from 'react';
import { colors } from './styles';
import {
  uploadReceipt,
  processReceipt,
} from './services/receiptService';


import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';

import { processingInvoiceStyles as styles } from './styles';


const ProcessingInvoiceScreen = ({
  navigation,
  route,
}) => {

  const { fileData } =
    route.params || {};

  const [progress, setProgress] =
    useState(0);


  const processInvoice =
    async () => {

      try {

        const uploadResult =
          await uploadReceipt(
            fileData
          );

        const attachmentId =
          uploadResult?.attachment
            ?.attachment_id;

        const processResult =
          await processReceipt(
            attachmentId
          );

        setProgress(100);

        navigation.replace(
          'InvoiceSuccess',
          {
            attachmentId,
            extractedData:
              processResult?.extracted_data,
            fileData,
          }
        );

      } catch (error) {

        console.log(
          'PROCESS ERROR:',
          error
        );

      }

    };
  useEffect(() => {

    const interval =
      setInterval(() => {

        setProgress(prev => {

          if (prev >= 95) {
            return prev;
          }

          return prev + 5;

        });

      }, 500);

    processInvoice();

    return () =>
      clearInterval(interval);

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
        جاري معالجة الفاتورة
      </Text>

      <View style={styles.iconContainer}>
        <MaterialIcons
          name="description"
          size={110}
          color="#DCE7FF"
        />

        <View style={styles.searchIcon}>
          <MaterialIcons
            name="search"
            size={65}
            color={colors.blue}
          />
        </View>
      </View>

      <Text style={styles.processingSubtitle}>
        نقوم بقراءة البيانات واستخراجها
      </Text>

      <Text style={styles.processingSubtitle2}>
        باستخدام الذكاء الاصطناعي
      </Text>

      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>
      <Text style={styles.percentText}>
        {progress}%
      </Text>

      <View style={styles.noteCard}>

        <MaterialIcons
          name="wb-sunny"
          size={20}
          color="#FACC15"
        />

        <Text style={styles.noteText}>
          قد تستغرق المعالجة من 5 إلى 10 ثوان
        </Text>

        <Text style={styles.noteText}>
          يرجى الانتظار </Text>

      </View>

    </View>
  );
};

export default ProcessingInvoiceScreen;