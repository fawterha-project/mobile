import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { signupStyles, colors } from './styles';

const SignUpScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [agree, setAgree] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = name && email && password && confirmPassword && agree;

  return (
    <View style={signupStyles.container}>
      <TouchableOpacity
  style={signupStyles.backIcon}
  onPress={() => navigation.goBack()}
>
        <MaterialIcons name="arrow-back" size={22} color={colors.blue} />
      </TouchableOpacity>

      <Text style={signupStyles.title}>إنشاء حساب</Text>

      <Image
        source={{
          uri: 'asset:/image/login_illustration.png'
        }}
        style={signupStyles.illustration}
        resizeMode="contain"
      />

      <Text style={signupStyles.welcome}>فوترها، أنشئ حسابك</Text>

      <Text style={signupStyles.subtitle}>وخل فواتيرك مرتبة في مكان واحد</Text>

      <Text style={signupStyles.nameLabel}>الاسم</Text>

      <TextInput
        style={signupStyles.nameInput}
        value={name}
        onChangeText={setName}
      />

      <Text style={signupStyles.emailLabel}>البريد الإلكتروني</Text>

      <TextInput
        style={signupStyles.emailInput}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={signupStyles.passwordLabel}>كلمة المرور </Text>

      <View style={signupStyles.passwordBox}>
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <MaterialIcons
            name={hidePassword ? 'visibility-off' : 'visibility'}
            size={18}
            color={colors.black}
          />
        </TouchableOpacity>

        <TextInput
          style={signupStyles.passwordInput}
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text style={signupStyles.confirmPasswordLabel}>تأكيد كلمة المرور </Text>

      <View style={signupStyles.confirmPasswordBox}>
        <TouchableOpacity
          onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
        >
          <MaterialIcons
            name={hideConfirmPassword ? 'visibility-off' : 'visibility'}
            size={18}
            color={colors.black}
          />
        </TouchableOpacity>

        <TextInput
          style={signupStyles.passwordInput}
          secureTextEntry={hideConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity
        style={signupStyles.termsBox}
        onPress={() => setAgree(!agree)}
      >
        <Text style={signupStyles.termsText}>أوافق على الشروط والأحكام</Text>

        <View
          style={[signupStyles.checkbox, agree && signupStyles.checkboxActive]}
        >
          {agree && (
            <MaterialIcons name="check" size={12} color={colors.white} />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          signupStyles.signupButton,
          !isFormValid && signupStyles.signupButtonDisabled,
        ]}

        disabled={!isFormValid}

        onPress={() =>
          navigation.navigate(
            'HomeScreen'
          )
        }
      >
        <Text style={signupStyles.signupButtonText}>إنشاء حساب</Text>
      </TouchableOpacity>

      <Text style={signupStyles.loginText}>
        لديك حساب؟{' '}
        <Text
          style={signupStyles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          تسجيل الدخول
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;