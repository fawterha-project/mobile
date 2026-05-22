import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { forgotPasswordPhoneStyles, colors } from './styles';

const ForgotPasswordPhoneScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  return (
    <View style={forgotPasswordPhoneStyles.container}>

      <ImageBackground
        source={{
 uri:'asset:/image/backgroundd.png'
}}
        style={forgotPasswordPhoneStyles.waveImage}
      />

      <Image
        source={{
 uri:'asset:/image/forgot_password.png'
}}
        style={forgotPasswordPhoneStyles.mainImage}
      />

      <Text style={forgotPasswordPhoneStyles.title}>نسيت كلمة السر؟</Text>

      <Text style={forgotPasswordPhoneStyles.description}>
        لا تشيل هم! أدخل رقم جوالك ونرسل لك رمز إعادة تعيين كلمة المرور
      </Text>

      <Text style={forgotPasswordPhoneStyles.phoneLabel}>رقم الجوال</Text>

      <View style={forgotPasswordPhoneStyles.phoneBox}>
        <TextInput
          style={forgotPasswordPhoneStyles.phoneInput}
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={(text) => {
            const cleaned = text.replace(/[^0-9]/g, '');
            setPhone(cleaned);
          }}
        />
        <Text style={forgotPasswordPhoneStyles.countryCode}>+966</Text>
      </View>

      {/* 👇 أعد الإرسال شغال */}
      <View style={forgotPasswordPhoneStyles.resendRow}>
        <Text style={forgotPasswordPhoneStyles.codeText}>ما وصلك الرمز؟</Text>
        <TouchableOpacity onPress={() => console.log('Resend')}>
          <Text style={forgotPasswordPhoneStyles.resendLink}>أعد الإرسال</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          forgotPasswordPhoneStyles.verifyButton,
          phone.length !== 10 && forgotPasswordPhoneStyles.verifyButtonDisabled,
        ]}
        disabled={phone.length !== 10}
      >
        <Text onPress={() => navigation?.push?.('VerifyCode')} style={forgotPasswordPhoneStyles.verifyButtonText}>تحقق</Text>
      </TouchableOpacity>

      <Text style={forgotPasswordPhoneStyles.orText}>أو</Text>

      <Text style={forgotPasswordPhoneStyles.smsText}>إرسال الرمز إلى:</Text>

      {/* 👇 يرجع للإيميل */}
      <TouchableOpacity
        style={forgotPasswordPhoneStyles.phoneIcon}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <MaterialIcons name="email" size={22} color={colors.black} />
      </TouchableOpacity>

      <Text style={forgotPasswordPhoneStyles.rememberText}>
        تذكرت كلمة المرور؟{' '}
        <Text
          style={forgotPasswordPhoneStyles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          تسجيل الدخول
        </Text>
      </Text>

    </View>
  );
};

export default ForgotPasswordPhoneScreen;