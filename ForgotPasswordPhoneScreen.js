import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { forgotPasswordStyles, colors } from './styles';
import {
    forgotPassword
}
from './services/userService';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

const handleVerify = async () => {

  try {

    await forgotPassword(email);

    navigation.navigate(
      'VerifyEmailScreen',
      {
        source: 'forgotPassword',
        email,
      }
    );

  } catch (error) {

    console.log(error);

  }

};
  return (
    <View style={forgotPasswordStyles.container}>
      <ImageBackground
        source={{
 uri:'asset:/image/backgroundd.png'}}
        style={forgotPasswordStyles.waveImage}
      />

      <Image
        source={{
 uri:'asset:/image/forgot_password.png'}}
        style={forgotPasswordStyles.mainImage}
      />

      <Text style={forgotPasswordStyles.title}>نسيت كلمة السر؟</Text>

      <Text style={forgotPasswordStyles.description}>
        لا تشيل هم! أدخل بريدك الإلكتروني ونرسل لك رمز إعادة تعيين كلمة المرور
      </Text>

      <Text style={forgotPasswordStyles.emailLabel}>البريد الإلكتروني</Text>

      <TextInput
  style={forgotPasswordStyles.emailInput}
  keyboardType="email-address"
  value={email}
  onChangeText={setEmail}
/>
      <View style={forgotPasswordStyles.resendRow}>
        <Text style={forgotPasswordStyles.codeText}>ما وصلك الرمز؟</Text>

        <TouchableOpacity onPress={() => console.log('Resend')}>
          <Text style={forgotPasswordStyles.resendLink}>أعد الإرسال</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={forgotPasswordStyles.verifyButton}
        onPress={handleVerify}
      >
        <Text style={forgotPasswordStyles.verifyButtonText}>تحقق</Text>
      </TouchableOpacity>

      <Text style={forgotPasswordStyles.rememberText}>
        تذكرت كلمة المرور؟{' '}
        <Text
          style={forgotPasswordStyles.loginLink}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          تسجيل الدخول
        </Text>
      </Text>
    </View>
  );
};

export default ForgotPasswordScreen;