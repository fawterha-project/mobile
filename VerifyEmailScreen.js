import React, {
    useRef,
    useState
} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import MaterialIcons
    from 'react-native-vector-icons/MaterialIcons';

import {
    verifyEmailStyles,
    colors
} from './styles';

import {
    verifySignupCode
} from './services/userService';

const VerifyEmailScreen = ({
    navigation,
    route
}) => {

    const [code, setCode] =
        useState('');

    const inputRef =
        useRef(null);

    const source = route?.params?.source;

    const user =
        route?.params?.user;
    const email =
        route?.params?.email;

    const handleCodeChange =
        text => {

            const cleaned =
                text
                    .replace(
                        /[^0-9]/g,
                        ''
                    )
                    .slice(0, 4);

            setCode(
                cleaned
            );

        };

    const handleVerify =
        async () => {

            try {

                if (source === 'signup') {

                    await verifySignupCode(
                        email,
                        code
                    );

                    Alert.alert(
                        'نجاح',
                        'تم التحقق بنجاح',
                        [
                            {
                                text: 'موافق',
                                onPress: () => {

                                    navigation.replace(
                                        'HomeScreen',
                                        {
                                            user: {
                                                first_name:
                                                    user?.first_name
                                            }
                                        }
                                    );

                                }
                            }
                        ]
                    );

                }

                else {

                    navigation.replace(
                        'ResetPasswordScreen'
                    );

                }

            }

            catch (error) {

                Alert.alert(
                    'خطأ',
                    'رمز التحقق غير صحيح'
                );

                console.log(error);

            }

        };

    return (

        <View style={
            verifyEmailStyles.container
        }>

            <TouchableOpacity
                style={
                    verifyEmailStyles.backIcon
                }
                onPress={() =>
                    navigation.goBack()
                }
            >

                <MaterialIcons
                    name="arrow-back"
                    size={22}
                    color={colors.blue}
                />

            </TouchableOpacity>

            <Text
                style={
                    verifyEmailStyles.title
                }
            >
                تحقق من البريد
            </Text>

            <Text
                style={
                    verifyEmailStyles.label
                }
            >
                أدخل الرمز المرسل إليك:
            </Text>

            <TouchableOpacity
                style={
                    verifyEmailStyles.codeRow
                }
                activeOpacity={1}
                onPress={() =>
                    inputRef.current?.focus()
                }
            >

                {[0, 1, 2, 3].map(
                    index => (

                        <View
                            key={index}
                            style={[
                                verifyEmailStyles.codeBox,
                                code.length ===
                                index &&
                                verifyEmailStyles.codeBoxActive
                            ]}
                        >

                            <Text
                                style={
                                    verifyEmailStyles.codeText
                                }
                            >

                                {
                                    code[index]
                                        ?
                                        '•'
                                        :
                                        ''
                                }

                            </Text>

                        </View>

                    )
                )}

            </TouchableOpacity>

            <TextInput
                ref={inputRef}
                style={
                    verifyEmailStyles.hiddenInput
                }
                keyboardType="number-pad"
                maxLength={4}
                value={code}
                onChangeText={
                    handleCodeChange
                }
            />

            <View
                style={
                    verifyEmailStyles.resendRow
                }
            >

                <Text
                    style={
                        verifyEmailStyles.resendText
                    }
                >

                    ما وصلك الرمز؟

                </Text>

                <TouchableOpacity>

                    <Text
                        style={
                            verifyEmailStyles.resendLink
                        }
                    >

                        أعد الإرسال

                    </Text>

                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={[
                    verifyEmailStyles.verifyButton,
                    code.length !== 4 &&
                    verifyEmailStyles.verifyButtonDisabled
                ]}
                disabled={
                    code.length !== 4
                }
                onPress={
                    handleVerify
                }
            >

                <Text
                    style={
                        verifyEmailStyles.verifyButtonText
                    }
                >

                    تحقق

                </Text>

            </TouchableOpacity>

        </View>

    );

};

export default VerifyEmailScreen;