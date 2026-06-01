import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { verifyCodeStyles, colors } from './styles';

const VerifyCodeScreen = ({ navigation }) => {
  const [code, setCode] = useState('');
  const inputRef = useRef(null);

  const handleCodeChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, '').slice(0, 4);
    setCode(cleaned);
  };

  return (
    <View style={verifyCodeStyles.container}>
      <TouchableOpacity
        style={verifyCodeStyles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={22} color={colors.blue} />
      </TouchableOpacity>

      <Text style={verifyCodeStyles.title}>تحقق من الرسائل</Text>

      <Text style={verifyCodeStyles.label}>أدخل الرمز المرسل إليك:</Text>

      <TouchableOpacity
        style={verifyCodeStyles.codeRow}
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
      >
        {[0, 1, 2, 3].map((index) => (
          <View
            key={index}
            style={[
              verifyCodeStyles.codeBox,
              code.length === index && verifyCodeStyles.codeBoxActive,
            ]}
          >
            <Text style={verifyCodeStyles.codeText}>
              {code[index] ? '•' : ''}
            </Text>
          </View>
        ))}
      </TouchableOpacity>

      <TextInput
        ref={inputRef}
        style={verifyCodeStyles.hiddenInput}
        keyboardType="number-pad"
        maxLength={4}
        value={code}
        onChangeText={handleCodeChange}
      />

      <View style={verifyCodeStyles.resendRow}>
        <Text style={verifyCodeStyles.resendText}>ما وصلك الرمز؟</Text>

        <TouchableOpacity onPress={() => console.log('Resend pressed')}>
          <Text style={verifyCodeStyles.resendLink}>أعد الإرسال</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          verifyCodeStyles.verifyButton,
          code.length !== 4 && verifyCodeStyles.verifyButtonDisabled,
        ]}
        disabled={code.length !== 4}
      >
        <Text style={verifyCodeStyles.verifyButtonText}>تحقق</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCodeScreen;