import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { loginStyles, colors } from './styles';

const LoginScreen = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={loginStyles.container}>
      <TouchableOpacity
        style={loginStyles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={22} color={colors.blue} />
      </TouchableOpacity>

      <Text style={loginStyles.title}>تسجيل الدخول</Text>

      <Image
        source={require('./android/app/src/assets/images/login_illustration.png')}
        style={loginStyles.illustration}
        resizeMode="contain"
      />

      <Text style={loginStyles.welcome}>حياك من جديد 👋</Text>
      <Text style={loginStyles.subtitle}>ابدأ بتنظيم فواتيرك الآن</Text>

      <Text style={loginStyles.emailLabel}>البريد الإلكتروني</Text>
      <TextInput style={loginStyles.emailInput} />

      <Text style={loginStyles.passwordLabel}>كلمة المرور </Text>

      <View style={loginStyles.passwordBox}>
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <MaterialIcons
            name={hidePassword ? 'visibility-off' : 'visibility'}
            size={18}
            color={colors.black}
          />
        </TouchableOpacity>

        <TextInput
          style={loginStyles.passwordInput}
          secureTextEntry={hidePassword}
        />
      </View>

      <TouchableOpacity style={loginStyles.forgotText} onPress={() => {}}>
        <Text style={loginStyles.forgotTextValue}>نسيت كلمة المرور؟</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyles.rememberBox}
        onPress={() => setRememberMe(!rememberMe)}
      >
        <Text style={loginStyles.rememberText}>تذكرني</Text>

        <View
          style={[
            loginStyles.checkbox,
            rememberMe && loginStyles.checkboxActive,
          ]}
        >
          {rememberMe && (
            <MaterialIcons name="check" size={12} color={colors.white} />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={loginStyles.loginButton}>
        <Text style={loginStyles.loginButtonText}>تسجيل الدخول</Text>
      </TouchableOpacity>

      <Text style={loginStyles.signupText}>
        ليس لديك حساب؟{' '}
        <Text
          style={loginStyles.signupLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          إنشاء حساب
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;