import React, {
    useRef,
    useState
} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';

import MaterialIcons
    from 'react-native-vector-icons/MaterialIcons';

import {
    verifyEmailStyles,
    colors,
    profileStyles,
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
    const [
        successModalVisible,
        setSuccessModalVisible
    ] = useState(false);

    const [
        errorModalVisible,
        setErrorModalVisible
    ] = useState(false);

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

            if (
                source === 'signup'
            ) {

                await verifySignupCode(
                    email,
                    code
                );

                setSuccessModalVisible(
                    true
                );

            } else {

                navigation.replace(
                    'ResetPasswordScreen',
                    {
                        email,
                        code
                    }
                );

            }

        }

        catch (error) {

            setErrorModalVisible(
                true
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
            <Modal
                visible={successModalVisible}
                transparent
                animationType="fade"
            >

                <View style={profileStyles.deleteOverlay}>

                    <View style={profileStyles.deleteModalBox}>

                        <View
                            style={profileStyles.deleteIconCircle}
                        >

                            <MaterialIcons
                                name="check-circle"
                                size={50}
                                color={colors.blue}
                            />

                        </View>

                        <Text
                            style={[
                                profileStyles.deleteModalTitle,
                                { color: colors.blue }
                            ]}
                        >
                            تم بنجاح
                        </Text>

                        <Text
                            style={profileStyles.deleteModalText}
                        >
                            تم التحقق بنجاح
                        </Text>

                        <View
                            style={profileStyles.deleteModalButtons}
                        >

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    height: 46,
                                    borderRadius: 12,
                                    backgroundColor: colors.blue,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {

                                    setSuccessModalVisible(
                                        false
                                    );

                                    navigation.replace(
                                        'LoginScreen',
                                        {
                                            user: {
                                                first_name:
                                                    user?.first_name
                                            }
                                        }
                                    );

                                }}
                            >

                                <Text
                                    style={
                                        profileStyles.deleteConfirmText
                                    }
                                >
                                    حسناً
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>
            <Modal
                visible={errorModalVisible}
                transparent
                animationType="fade"
            >

                <View style={profileStyles.deleteOverlay}>

                    <View style={profileStyles.deleteModalBox}>

                        <View
                            style={profileStyles.deleteIconCircle}
                        >

                            <MaterialIcons
                                name="error"
                                size={50}
                                color={colors.red}
                            />

                        </View>

                        <Text
                            style={profileStyles.deleteModalTitle}
                        >
                            خطأ
                        </Text>

                        <Text
                            style={profileStyles.deleteModalText}
                        >
                            رمز التحقق غير صحيح
                        </Text>

                        <View
                            style={profileStyles.deleteModalButtons}
                        >

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    height: 46,
                                    borderRadius: 12,
                                    backgroundColor: colors.red,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() =>
                                    setErrorModalVisible(
                                        false
                                    )
                                }
                            >

                                <Text
                                    style={
                                        profileStyles.deleteConfirmText
                                    }
                                >
                                    حسناً
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>

        </View>

    );

};

export default VerifyEmailScreen;