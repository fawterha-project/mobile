import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { profileStyles, profileEditStyles, COLORS } from './styles';

export default function ProfileEditScreen({ navigation }) {
  const [gender, setGender] = useState('أنثى');
  const [showGenderOptions, setShowGenderOptions] = useState(false);

  const selectGender = value => {
    setGender(value);
    setShowGenderOptions(false);
  };

  return (
    <View style={profileEditStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.BG} />

      <View style={profileEditStyles.editHeader}>
        <View style={profileStyles.statusFake}>
          <Text style={profileStyles.timeText}>9:41</Text>

          <View style={profileStyles.statusIcons}>
            <MaterialIcons name="signal-cellular-4-bar" size={15} color={COLORS.BLACK} />
            <MaterialIcons name="wifi" size={15} color={COLORS.BLACK} />
            <MaterialIcons name="battery-full" size={18} color={COLORS.BLACK} />
          </View>
        </View>

        <View style={profileEditStyles.editTitleRow}>
          <TouchableOpacity
            onPress={() => navigation?.goBack?.()}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={23} color={COLORS.BLUE} />
          </TouchableOpacity>

          <Text style={profileEditStyles.editTitle}>حسابي</Text>

          <View style={{ width: 23 }} />
        </View>

        <View style={profileEditStyles.editAvatarWrapper}>
          <View style={profileEditStyles.editAvatarCircle}>
            <MaterialIcons name="person" size={72} color={COLORS.BLUE} />
          </View>

          <TouchableOpacity style={profileEditStyles.cameraBtn} activeOpacity={0.8}>
            <MaterialIcons name="photo-camera" size={16} color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={profileEditStyles.formContainer}>
        <InputField label="الاسم الاول" value="غيداء" icon="person-outline" />
        <InputField label="الاسم الاخير" value="بندر" icon="person-outline" />
        <InputField label="تاريخ الميلاد" value="" icon="calendar-today" />

        {/* 👇 الجنس */}
        <View style={profileEditStyles.inputGroup}>
          <Text style={profileEditStyles.inputLabel}>الجنس</Text>

          <TouchableOpacity
            style={profileEditStyles.inputBox}
            activeOpacity={0.8}
            onPress={() => setShowGenderOptions(!showGenderOptions)}
          >
            <MaterialIcons name="groups" size={23} color={COLORS.GRAY} />

            <MaterialIcons
              name={showGenderOptions ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={24}
              color={COLORS.GRAY}
              style={profileEditStyles.inputArrow}
            />

            <Text style={profileEditStyles.genderValue}>{gender}</Text>
          </TouchableOpacity>

          {showGenderOptions && (
            <View style={profileEditStyles.genderDropdown}>
              <TouchableOpacity
                style={[
                  profileEditStyles.genderOption,
                  gender === 'أنثى' && profileEditStyles.genderOptionActive,
                ]}
                onPress={() => selectGender('أنثى')}
              >
                <Text style={profileEditStyles.genderOptionText}>أنثى</Text>
              </TouchableOpacity>

              <View style={profileEditStyles.genderDivider} />

              <TouchableOpacity
                style={[
                  profileEditStyles.genderOption,
                  gender === 'ذكر' && profileEditStyles.genderOptionActive,
                ]}
                onPress={() => selectGender('ذكر')}
              >
                <Text style={profileEditStyles.genderOptionText}>ذكر</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <InputField label="البريد الإلكتروني" value="ghaida00@gmail.com" icon="mail-outline" />
        <InputField label="رقم الجوال" value="+966" icon="phone" />
      </View>

      <View style={profileEditStyles.editButtonsRow}>
        <TouchableOpacity style={profileEditStyles.cancelBtn} activeOpacity={0.8}>
          <Text style={profileEditStyles.cancelText}>إلغاء</Text>
        </TouchableOpacity>

        <TouchableOpacity style={profileEditStyles.saveBtn} activeOpacity={0.8}>
          <Text style={profileEditStyles.saveText}>حفظ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function InputField({ label, value, icon }) {
  return (
    <View style={profileEditStyles.inputGroup}>
      <Text style={profileEditStyles.inputLabel}>{label}</Text>

      <View style={profileEditStyles.inputBox}>
        <MaterialIcons name={icon} size={23} color={COLORS.GRAY} />

        <TextInput
          value={value}
          editable={false}
          placeholderTextColor={COLORS.GRAY}
          style={profileEditStyles.textInput}
        />
      </View>
    </View>
  );
}