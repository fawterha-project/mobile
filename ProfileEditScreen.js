import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  profileStyles,
  profileEditStyles,
  colors,
} from './styles';

export default function ProfileEditScreen({ navigation }) {
  const [gender, setGender] = useState('أنثى');
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [phone, setPhone] = useState('+966');

  const selectGender = value => {
    setGender(value);
    setShowGenderOptions(false);
  };

  return (
    <View style={profileEditStyles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.bg}
      />

      <View style={profileEditStyles.editHeader}>
        <View style={profileStyles.statusFake}>
          <Text style={profileStyles.timeText}>
            9:41
          </Text>

          <View style={profileStyles.statusIcons}>
            <MaterialIcons
              name="signal-cellular-4-bar"
              size={15}
              color={colors.black}
            />

            <MaterialIcons
              name="wifi"
              size={15}
              color={colors.black}
            />

            <MaterialIcons
              name="battery-full"
              size={18}
              color={colors.black}
            />
          </View>
        </View>

        <View style={profileEditStyles.editTitleRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="arrow-back"
              size={23}
              color={colors.blue}
            />
          </TouchableOpacity>

          <Text style={profileEditStyles.editTitle}>
            حسابي
          </Text>

          <View style={{ width: 23 }} />
        </View>

        <View style={profileEditStyles.editAvatarWrapper}>
          <View style={profileEditStyles.editAvatarCircle}>
            <MaterialIcons
              name="person"
              size={72}
              color={colors.blue}
            />
          </View>

          <TouchableOpacity
            style={profileEditStyles.cameraBtn}
          >
            <MaterialIcons
              name="photo-camera"
              size={16}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={profileEditStyles.formContainer}>

        <InputField
          label="الاسم الاول"
          value="غيداء"
          icon="person-outline"
          editable
        />

        <InputField
          label="الاسم الاخير"
          value="بندر"
          icon="person-outline"
          editable
        />

        <InputField
          label="تاريخ الميلاد"
          value=""
          icon="calendar-today"
          editable
        />

        <View style={profileEditStyles.inputGroup}>
          <Text style={profileEditStyles.inputLabel}>
            الجنس
          </Text>

          <TouchableOpacity
            style={profileEditStyles.inputBox}
            onPress={() =>
              setShowGenderOptions(
                !showGenderOptions
              )
            }
          >

            <MaterialIcons
              name="groups"
              size={23}
              color={colors.gray}
            />

            <MaterialIcons
              name={
                showGenderOptions
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={24}
              color={colors.gray}
              style={profileEditStyles.inputArrow}
            />

            <Text
              style={profileEditStyles.genderValue}
            >
              {gender}
            </Text>

          </TouchableOpacity>

          {showGenderOptions && (

            <View
              style={profileEditStyles.genderDropdown}
            >

              <TouchableOpacity
                style={[
                  profileEditStyles.genderOption,
                  gender === 'أنثى' &&
                  profileEditStyles.genderOptionActive,
                ]}
                onPress={() =>
                  selectGender('أنثى')
                }
              >

                <Text
                  style={profileEditStyles.genderOptionText}
                >
                  أنثى
                </Text>

              </TouchableOpacity>

              <View
                style={profileEditStyles.genderDivider}
              />

              <TouchableOpacity
                style={[
                  profileEditStyles.genderOption,
                  gender === 'ذكر' &&
                  profileEditStyles.genderOptionActive,
                ]}
                onPress={() =>
                  selectGender('ذكر')
                }
              >

                <Text
                  style={profileEditStyles.genderOptionText}
                >
                  ذكر
                </Text>

              </TouchableOpacity>

            </View>

          )}

        </View>

        <View style={profileEditStyles.inputGroup}>
          <Text style={profileEditStyles.inputLabel}>
            رقم الجوال
          </Text>

          <View style={profileEditStyles.inputBox}>

            <MaterialIcons
              name="phone"
              size={23}
              color={colors.gray}
            />

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+966"
              placeholderTextColor={colors.gray}
              style={profileEditStyles.textInput}
              keyboardType="phone-pad"
            />

          </View>

        </View>

      </View>

      <View style={profileEditStyles.editButtonsRow}>

        <TouchableOpacity
          style={profileEditStyles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={profileEditStyles.cancelText}>
            إلغاء
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profileEditStyles.saveBtn}
          onPress={() => {

            Alert.alert(
              'تأكيد الحفظ',
              'هل أنت متأكد من حفظ التغييرات؟',
              [
                {
                  text:'إلغاء',
                  style:'cancel'
                },
                {
                  text:'نعم',
                  onPress:()=>
                    navigation.goBack()
                },
              ]
            );

          }}
        >
          <Text style={profileEditStyles.saveText}>
            حفظ
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

function InputField({
  label,
  value,
  icon,
  editable
}) {

  return (

    <View style={profileEditStyles.inputGroup}>

      <Text style={profileEditStyles.inputLabel}>
        {label}
      </Text>

      <View style={profileEditStyles.inputBox}>

        <MaterialIcons
          name={icon}
          size={23}
          color={colors.gray}
        />

        <TextInput
          defaultValue={value}
          editable={editable}
          placeholderTextColor={colors.gray}
          style={profileEditStyles.textInput}
        />

      </View>

    </View>

  );
}