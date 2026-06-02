import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  addBillStyles,
  colors,
} from './styles';

const AddBill = ({ visible, onClose, navigation }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={addBillStyles.overlay}>

        <View style={addBillStyles.card}>

          <TouchableOpacity
            style={addBillStyles.closeButton}
            onPress={onClose}
          >
            <Text style={addBillStyles.closeText}>
              ×
            </Text>
          </TouchableOpacity>

          <Text style={addBillStyles.title}>
            إضافة فاتورة
          </Text>

          <Text style={addBillStyles.subtitle}>
            اختر الطريقة التي تفضلها
          </Text>

          <TouchableOpacity
            style={addBillStyles.option}
            onPress={() => {
              onClose();

              setTimeout(() => {
                navigation.navigate(
                  'CameraScreen'
                );
              }, 300);
            }}
          >
            <View style={addBillStyles.optionTextBox}>

              <Text style={addBillStyles.optionTitle}>
                تصوير الفاتورة
              </Text>

              <Text style={addBillStyles.optionDescription}>
                التقط صورة واضحة للفاتورة
              </Text>

            </View>

            <MaterialIcons
              name="photo-camera"
              size={28}
              color={colors.blue}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={addBillStyles.option}
            onPress={() => {

              onClose();

              setTimeout(() => {

                navigation.navigate(
                  'UploadInvoice'
                );

              }, 300);

            }}
          >
            <View style={addBillStyles.optionTextBox}>

              <Text style={addBillStyles.optionTitle}>
                رفع فاتورة
              </Text>

              <Text style={addBillStyles.optionDescription}>
                اختر صورة أو ملف PDF من جهازك
              </Text>

            </View>

            <MaterialIcons
              name="upload-file"
              size={28}
              color={colors.blue}
            />
          </TouchableOpacity>


        </View>

      </View>
    </Modal>
  );
};

export default AddBill;