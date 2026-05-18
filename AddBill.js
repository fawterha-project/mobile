import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { addBillStyles, colors } from './styles';

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
          <TouchableOpacity style={addBillStyles.closeButton} onPress={onClose}>
            <Text style={addBillStyles.closeText}>×</Text>
          </TouchableOpacity>

          <Text style={addBillStyles.title}>إضافة فاتورة</Text>

          <Text style={addBillStyles.subtitle}>اختر الطريقة التي تفضلها</Text>

          <TouchableOpacity
            style={addBillStyles.option}
            onPress={() => {
              onClose();

              setTimeout(() => {
                navigation.navigate('CameraPermissionScreen');
              }, 300);
            }}
          >
            <View style={addBillStyles.optionTextBox}>
              <Text style={addBillStyles.optionTitle}>تصوير الفاتورة</Text>
              <Text style={addBillStyles.optionDescription}>
                التقط صورة واضحة للفاتورة
              </Text>
            </View>

            <MaterialIcons name="photo-camera" size={28} color={colors.blue} />
          </TouchableOpacity>

          <TouchableOpacity style={addBillStyles.option}>
            <View style={addBillStyles.optionTextBox}>
              <Text style={addBillStyles.optionTitle}>رفع الصورة</Text>
              <Text style={addBillStyles.optionDescription}>
                اختر صورة من معرض الصور
              </Text>
            </View>

            <MaterialIcons name="image" size={28} color={colors.blue} />
          </TouchableOpacity>

          <TouchableOpacity style={addBillStyles.option}>
            <View style={addBillStyles.optionTextBox}>
              <Text style={addBillStyles.optionTitle}>رفع ملف</Text>
              <Text style={addBillStyles.optionDescription}>
                اختر ملف من جهازك PDF, JPG, PNG
              </Text>
            </View>

            <MaterialIcons name="folder" size={28} color={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddBill;
