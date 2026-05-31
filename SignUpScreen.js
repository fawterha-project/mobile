import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    Modal
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    signupStyles,
    colors
} from './styles';

import {
    signupUser
}
    from './services/userService';

const SignUpScreen = ({
    navigation
}) => {

    const [hidePassword, setHidePassword] = useState(true);

    const [
        hideConfirmPassword,
        setHideConfirmPassword
    ] = useState(true);

    const [agree, setAgree] = useState(false);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [
        confirmPassword,
        setConfirmPassword
    ] = useState('');
    const [
        showPasswordModal,
        setShowPasswordModal
    ] = useState(false);

    const [
        passwordMessage,
        setPasswordMessage
    ] = useState('');
    const [
        showModal,
        setShowModal
    ] = useState(false);

    const [
        modalTitle,
        setModalTitle
    ] = useState('');

    const [
        modalMessage,
        setModalMessage
    ] = useState('');

    const [
        modalIcon,
        setModalIcon
    ] = useState('notifications');

    const [
        modalSuccess,
        setModalSuccess
    ] = useState(false);

    const isFormValid =

        name &&
        email &&
        password &&
        confirmPassword &&
        agree;

    return (

        <View style={signupStyles.container}>

            <TouchableOpacity
                style={signupStyles.backIcon}
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


            <Text style={signupStyles.title}>
                إنشاء حساب
            </Text>

            <Image
                source={{
                    uri: 'asset:/image/login_illustration.png'
                }}
                style={signupStyles.illustration}
                resizeMode="contain"
            />

            <Text style={signupStyles.welcome}>
                فوترها، أنشئ حسابك
            </Text>

            <Text style={signupStyles.subtitle}>
                وخل فواتيرك مرتبة في مكان واحد
            </Text>


            <Text style={signupStyles.nameLabel}>
                الاسم
            </Text>

            <TextInput
                style={signupStyles.nameInput}
                value={name}
                onChangeText={setName}
            />

            <Text style={signupStyles.emailLabel}>
                البريد الإلكتروني
            </Text>

            <TextInput
                style={signupStyles.emailInput}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={signupStyles.passwordLabel}>
                كلمة المرور </Text>

            <View style={signupStyles.passwordBox}>

                <TouchableOpacity
                    onPress={() =>
                        setHidePassword(
                            !hidePassword
                        )
                    }
                >

                    <MaterialIcons
                        name={
                            hidePassword
                                ?
                                'visibility-off'
                                :
                                'visibility'
                        }
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


            <Text style={signupStyles.confirmPasswordLabel}>
                تأكيد كلمة المرور </Text>

            <View
                style={signupStyles.confirmPasswordBox}
            >

                <TouchableOpacity
                    onPress={() =>
                        setHideConfirmPassword(
                            !hideConfirmPassword
                        )
                    }
                >

                    <MaterialIcons
                        name={
                            hideConfirmPassword
                                ?
                                'visibility-off'
                                :
                                'visibility'
                        }
                        size={18}
                        color={colors.black}
                    />

                </TouchableOpacity>

                <TextInput
                    style={signupStyles.passwordInput}
                    secureTextEntry={
                        hideConfirmPassword
                    }
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

            </View>


            <TouchableOpacity
                style={signupStyles.termsBox}
                onPress={() =>
                    setAgree(!agree)
                }
            >

                <Text style={signupStyles.termsText}>
                    أوافق على الشروط والأحكام
                </Text>

                <View
                    style={[
                        signupStyles.checkbox,
                        agree &&
                        signupStyles.checkboxActive
                    ]}
                >

                    {agree && (

                        <MaterialIcons
                            name="check"
                            size={12}
                            color={colors.white}
                        />

                    )}

                </View>

            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    signupStyles.signupButton,
                    !isFormValid &&
                    signupStyles.signupButtonDisabled
                ]}

                disabled={!isFormValid}

                onPress={async () => {
                    const passwordRequirements = [];

                    if (password.length < 8) {
                        passwordRequirements.push(
                            '8 أحرف على الأقل'
                        );
                    }

                    if (!/[A-Z]/.test(password)) {
                        passwordRequirements.push(
                            'حرف كبير واحد على الأقل'
                        );
                    }

                    if (!/[0-9]/.test(password)) {
                        passwordRequirements.push(
                            'رقم واحد على الأقل'
                        );
                    }

                    if (
                        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
                    ) {
                        passwordRequirements.push(
                            'رمز واحد على الأقل'
                        );
                    }

                    if (passwordRequirements.length > 0) {

                        setPasswordMessage(
                            'يجب أن تحتوي على:\n\n• ' +
                            passwordRequirements.join('\n• ')
                        );

                        setShowPasswordModal(true);

                        return;
                    }

                    if (password !== confirmPassword) {

                        setModalTitle('خطأ');

                        setModalMessage(
                            'كلمتا المرور غير متطابقتين'
                        );

                        setModalIcon('error-outline');

                        setModalSuccess(false);

                        setShowModal(true);

                        return;
                    }

                    const emailRegex =
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (
                        !emailRegex.test(email)
                    ) {

                        setModalTitle('خطأ');

                        setModalMessage(
                            'البريد الإلكتروني غير صحيح'
                        );

                        setModalIcon('error-outline');

                        setModalSuccess(false);

                        setShowModal(true);

                        return;

                    }

                    try {

                        const result =
                            await signupUser(
                                name,
                                email,
                                password
                            );

                        console.log(
                            'تم إنشاء الحساب:',
                            result
                        );

                        setModalTitle('نجاح');

                        setModalMessage(
                            'تم إرسال رمز التحقق'
                        );

                        setModalIcon('check-circle');

                        setModalSuccess(true);

                        setShowModal(true);

                    }

                    catch (error) {

                        console.log(
                            'Signup Error:',
                            error
                        );

                        setModalTitle('خطأ');

                        setModalMessage(
                            error?.message ||
                            'فشل إنشاء الحساب'
                        );

                        setModalIcon('error-outline');

                        setModalSuccess(false);

                        setShowModal(true);

                    }

                }}

            >

                <Text
                    style={
                        signupStyles.signupButtonText
                    }
                >

                    إنشاء حساب

                </Text>

            </TouchableOpacity>


            <Text style={signupStyles.loginText}>

                لديك حساب؟{' '}

                <Text
                    style={signupStyles.loginLink}
                    onPress={() =>
                        navigation.navigate(
                            'LoginScreen'
                        )
                    }
                >

                    تسجيل الدخول

                </Text>

            </Text>
            <Modal
                transparent
                visible={showPasswordModal}
                animationType="fade"
            >

                <View style={signupStyles.passwordOverlay}>

                    <View style={signupStyles.passwordModal}>

                        <View
                            style={
                                signupStyles.passwordIconCircle
                            }
                        >

                            <MaterialIcons
                                name="lock"
                                size={42}
                                color={colors.blue}
                            />

                        </View>

                        <Text
                            style={
                                signupStyles.passwordTitle
                            }
                        >
                            كلمة المرور غير مطابقة
                        </Text>

                        <Text
                            style={
                                signupStyles.passwordText
                            }
                        >
                            {passwordMessage}
                        </Text>

                        <TouchableOpacity
                            style={
                                signupStyles.passwordButton
                            }
                            onPress={() => {

                                setShowPasswordModal(false);

                                if (modalSuccess) {

                                    navigation.navigate(
                                        'VerifyEmailScreen',
                                        {
                                            email,
                                            source: 'signup',
                                            user: {
                                                first_name: name
                                            }
                                        }
                                    );

                                }

                            }}
                        >

                            <Text
                                style={
                                    signupStyles.passwordButtonText
                                }
                            >
                                حسناً
                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>
            <Modal
                transparent
                visible={showModal}
                animationType="fade"
            >

                <View style={signupStyles.passwordOverlay}>

                    <View style={signupStyles.passwordModal}>

                        <View
                            style={[
                                signupStyles.passwordIconCircle,
                                {
                                    backgroundColor:
                                        modalSuccess
                                            ? '#F2F6FF'
                                            : '#FFEAEA'
                                }
                            ]}
                        >

                            <MaterialIcons
                                name={modalIcon}
                                size={42}
                                color={
                                    modalSuccess
                                        ? colors.blue
                                        : '#E53935'
                                }
                            />

                        </View>

                        <Text
                            style={
                                signupStyles.passwordTitle
                            }
                        >
                            {modalTitle}
                        </Text>

                        <Text
                            style={
                                signupStyles.passwordText
                            }
                        >
                            {modalMessage}
                        </Text>

                        <TouchableOpacity
                            style={
                                signupStyles.passwordButton
                            }

                            onPress={() => {

                                setShowModal(false);

                                if (modalSuccess) {

                                    navigation.navigate(
                                        'VerifyEmailScreen',
                                        {
                                            email,
                                            source: 'signup',
                                            user: {
                                                first_name: name
                                            }
                                        }
                                    );

                                }

                            }}
                        >

                            <Text
                                style={
                                    signupStyles.passwordButtonText
                                }
                            >
                                حسناً
                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>
        </View>

    );

};

export default SignUpScreen;