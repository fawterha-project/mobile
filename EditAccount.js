import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, editAccountStyles } from './styles';

const initialForm = {
  firstName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  email: '',
  phone: '',
};

const normalizeData = (data) => ({
  firstName: (data.firstName || '').trim(),
  lastName: (data.lastName || '').trim(),
  birthDate: (data.birthDate || '').trim(),
  gender: (data.gender || '').trim(),
  email: (data.email || '').trim(),
  phone: (data.phone || '').trim(),
});

const isAllEmpty = (data) =>
  Object.values(normalizeData(data)).every((value) => value === '');

const EditAccount = ({ navigation }) => {
  const [firstName, setFirstName] = useState(initialForm.firstName);
  const [lastName, setLastName] = useState(initialForm.lastName);
  const [birthDate, setBirthDate] = useState(initialForm.birthDate);
  const [gender, setGender] = useState(initialForm.gender);
  const [email, setEmail] = useState(initialForm.email);
  const [phone, setPhone] = useState(initialForm.phone);
  const [showGenderOptions, setShowGenderOptions] = useState(false);

  const currentData = useMemo(
    () => ({
      firstName,
      lastName,
      birthDate,
      gender,
      email,
      phone,
    }),
    [firstName, lastName, birthDate, gender, email, phone]
  );

  const normalizedCurrent = normalizeData(currentData);
  const normalizedInitial = normalizeData(initialForm);

  const hasChanges =
    JSON.stringify(normalizedCurrent) !== JSON.stringify(normalizedInitial);

  const saveDisabled = !hasChanges || isAllEmpty(currentData);

  const handleSave = () => {
    if (isAllEmpty(currentData)) {
      Alert.alert('تنبيه', 'لا يمكن حفظ نموذج فارغ. الرجاء تعبئة حقل واحد على الأقل.');
      return;
    }

    navigation.navigate('ProfileDetails', {
      userData: currentData,
    });
  };

  return (
    <SafeAreaView style={editAccountStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple} />

      <View style={editAccountStyles.header}>
        <TouchableOpacity
          style={editAccountStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={28} color={colors.lightBg} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={editAccountStyles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={editAccountStyles.avatarSection}>
          <View style={editAccountStyles.avatarContainer}>
            <MaterialIcons name="person-outline" size={78} color="#3C3A4A" />

            <TouchableOpacity style={editAccountStyles.cameraButton}>
              <MaterialIcons name="photo-camera" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={editAccountStyles.formContainer}>
          <Text style={editAccountStyles.label}>الاسم الأول</Text>
          <TextInput
            style={editAccountStyles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder=""
            placeholderTextColor="#999"
            textAlign="right"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={editAccountStyles.label}>الاسم الأخير</Text>
          <TextInput
            style={editAccountStyles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder=""
            placeholderTextColor="#999"
            textAlign="right"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={editAccountStyles.label}>تاريخ الميلاد</Text>
          <TextInput
            style={editAccountStyles.input}
            value={birthDate}
            onChangeText={setBirthDate}
            placeholder=""
            placeholderTextColor="#999"
            textAlign="right"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={editAccountStyles.label}>الجنس</Text>
          <TouchableOpacity
            style={editAccountStyles.selectInput}
            onPress={() => setShowGenderOptions(!showGenderOptions)}
          >
            <MaterialIcons
              name={showGenderOptions ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={24}
              color="#3C3A4A"
            />
            <Text
              style={[
                editAccountStyles.selectText,
                !gender && editAccountStyles.selectPlaceholder,
              ]}
            >
              {gender || 'اختر الجنس'}
            </Text>
          </TouchableOpacity>

          {showGenderOptions && (
            <View style={editAccountStyles.dropdown}>
              <TouchableOpacity
                style={editAccountStyles.dropdownItem}
                onPress={() => {
                  setGender('ذكر');
                  setShowGenderOptions(false);
                }}
              >
                <Text style={editAccountStyles.dropdownItemText}>ذكر</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={editAccountStyles.dropdownItem}
                onPress={() => {
                  setGender('أنثى');
                  setShowGenderOptions(false);
                }}
              >
                <Text style={editAccountStyles.dropdownItemText}>أنثى</Text>
              </TouchableOpacity>
            </View>
          )}

          <Text style={editAccountStyles.label}>البريد الإلكتروني</Text>
          <TextInput
            style={editAccountStyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder=""
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            textAlign="right"
          />

          <Text style={editAccountStyles.label}>رقم الجوال</Text>
          <TextInput
            style={editAccountStyles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder=""
            placeholderTextColor="#999"
            textAlign="right"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={editAccountStyles.buttonsWrapper}>
          <TouchableOpacity
            style={editAccountStyles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={editAccountStyles.cancelButtonText}>إلغاء</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              editAccountStyles.saveButton,
              saveDisabled && editAccountStyles.saveButtonDisabled,
            ]}
            onPress={handleSave}
            disabled={saveDisabled}
          >
            <Text
              style={[
                editAccountStyles.saveButtonText,
                saveDisabled && editAccountStyles.saveButtonTextDisabled,
              ]}
            >
              حفظ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAccount;