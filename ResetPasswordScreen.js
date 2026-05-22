import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { resetPasswordStyles, colors } from './styles';

const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const requirements = [
    { text: '8 أحرف على الأقل', valid: password.length >= 8 },
    { text: 'حرف كبير واحد على الأقل', valid: /[A-Z]/.test(password) },
    {
      text: 'رمز واحد على الأقل',
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
    { text: 'رقم واحد على الأقل', valid: /[0-9]/.test(password) },
  ];

  const validCount = requirements.filter(item => item.valid).length;

  const canSubmit =
    requirements.every(item => item.valid) &&
    password === confirmPassword &&
    confirmPassword.length > 0;

  return (
    <View style={resetPasswordStyles.container}>
      <TouchableOpacity
        style={resetPasswordStyles.backIcon}
        onPress={() => navigation?.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.blue} />
      </TouchableOpacity>

      <Text style={resetPasswordStyles.title}>تعيين كلمة السر الجديدة</Text>

      <Image
        source={{
              uri: 'asset:/image/BACKGROUND2.png'}}
        style={resetPasswordStyles.waveImage}
        resizeMode="cover"
      />

      <Image
        source={{
              uri: 'asset:/image/restpass.png'}}
        style={resetPasswordStyles.image}
        resizeMode="contain"
      />

      <Text style={resetPasswordStyles.description}>
        اختر كلمة سر قوية لحماية حسابك
      </Text>

      <Text style={resetPasswordStyles.passwordLabel}>كلمة السر الجديدة</Text>

      <View style={resetPasswordStyles.passwordBox}>
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <MaterialIcons
            name={hidePassword ? 'visibility-off' : 'visibility'}
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>

        <TextInput
          style={resetPasswordStyles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
        />
      </View>

      <Text style={resetPasswordStyles.confirmPasswordLabel}>
        تأكيد كلمة السر الجديدة
      </Text>

      <View style={resetPasswordStyles.confirmPasswordBox}>
        <TouchableOpacity
          onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
        >
          <MaterialIcons
            name={hideConfirmPassword ? 'visibility-off' : 'visibility'}
            size={20}
            color={colors.black}
          />
        </TouchableOpacity>

        <TextInput
          style={resetPasswordStyles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={hideConfirmPassword}
        />
      </View>

      <View style={resetPasswordStyles.strengthRow}>
        <View style={resetPasswordStyles.strengthLines}>
          {requirements.map((item, index) => (
            <View
              key={index}
              style={[
                resetPasswordStyles.strengthLine,
                index < validCount && resetPasswordStyles.strengthLineActive,
              ]}
            />
          ))}
        </View>

        <Text style={resetPasswordStyles.strengthText}>قوة كلمة السر </Text>

        <MaterialIcons name="verified-user" size={15} color={colors.gray} />
      </View>

      <View style={resetPasswordStyles.requirementsBox}>
        <Text style={resetPasswordStyles.requirementsTitle}>
          متطلبات كلمة السر:
        </Text>

        {requirements.map((item, index) => (
          <View key={index} style={resetPasswordStyles.requirementRow}>
            <MaterialIcons
              name={item.valid ? 'check-circle-outline' : 'cancel'}
              size={14}
              color={item.valid ? colors.blue : colors.red}
            />

            <Text
              style={[
                resetPasswordStyles.requirementText,
                item.valid
                  ? resetPasswordStyles.validText
                  : resetPasswordStyles.invalidText,
              ]}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        disabled={!canSubmit}
        style={[
          resetPasswordStyles.button,
          !canSubmit && resetPasswordStyles.buttonDisabled,
        ]}
        onPress={() => navigation.replace('LoginScreen')}
      >
        <Text style={resetPasswordStyles.buttonText}>تغيير كلمة السر</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;