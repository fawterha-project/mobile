import React, { useState } from 'react';
import {
  changePassword
}
  from './services/profileService';

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  changePasswordStyles,
  colors,
  profileStyles,
} from './styles';

export default function ChangePasswordScreen({
  navigation
}) {

  const [
    successModalVisible,
    setSuccessModalVisible
  ] = useState(false);

  const [
    errorModalVisible,
    setErrorModalVisible
  ] = useState(false);

  const [
    errorMessage,
    setErrorMessage
  ] = useState('');

  const [currentPassword, setCurrentPassword] =
    useState('');

  const [newPassword, setNewPassword] =
    useState('');

  const [confirmPassword, setConfirmPassword] =
    useState('');

  const [hideCurrent, setHideCurrent] =
    useState(true);

  const [hideNew, setHideNew] =
    useState(true);

  const [hideConfirm, setHideConfirm] =
    useState(true);


  const requirements = [

    {
      text: '8 أحرف على الأقل',
      valid: newPassword.length >= 8,
    },

    {
      text: 'رقم واحد على الأقل',
      valid: /[0-9]/.test(newPassword),
    },

    {
      text: 'رمز واحد على الأقل',
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(
        newPassword
      ),
    },

    {
      text: 'حرف كبير واحد على الأقل',
      valid: /[A-Z]/.test(
        newPassword
      ),
    },

  ];

  const validCount =
    requirements.filter(
      item => item.valid
    ).length;

  const passwordsMatch =
    confirmPassword.length > 0 &&
    newPassword === confirmPassword;

  const canSubmit =
    requirements.every(
      item => item.valid
    ) &&
    passwordsMatch;


  const handleSave =
    async () => {

      try {

        await changePassword(

          currentPassword,

          newPassword

        );

        setSuccessModalVisible(
          true
        );

      }

      catch (error) {

        setErrorMessage(
          error?.message ||
          'فشل تغيير كلمة السر'
        );

        setErrorModalVisible(
          true
        );
      }

    };


  return (

    <View
      style={changePasswordStyles.container}
    >

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />

      <TouchableOpacity
        style={changePasswordStyles.backBtn}
        onPress={() =>
          navigation.goBack()
        }
      >

        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.blue}
        />

      </TouchableOpacity>


      <Text
        style={changePasswordStyles.title}
      >
        تغيير كلمة السر
      </Text>


      <Image
        source={{
          uri: 'asset:/image/wave.png'
        }}
        style={
          changePasswordStyles.waveImage
        }
        resizeMode="cover"
      />


      <Image
        source={{
          uri: 'asset:/image/restpass.png'
        }}
        style={
          changePasswordStyles.headerImage
        }
        resizeMode="contain"
      />


      <Text
        style={
          changePasswordStyles.subtitle
        }
      >
        يرجى إدخال كلمة السر القوية وكلمة السر الجديدة
      </Text>

      <Text
        style={
          changePasswordStyles.subtitle2
        }
      >
        للحفاظ على أمان حسابك
      </Text>


      <Text
        style={changePasswordStyles.label}
      >
        كلمة السر الحالية
      </Text>


      <View
        style={changePasswordStyles.inputBox}
      >

        <TextInput
          style={changePasswordStyles.input}
          placeholder="ادخل كلمة السر الحالية"
          placeholderTextColor={
            colors.gray
          }
          secureTextEntry={hideCurrent}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

        <TouchableOpacity
          onPress={() =>
            setHideCurrent(
              !hideCurrent
            )
          }
        >

          <MaterialIcons
            name={
              hideCurrent
                ? 'visibility-off'
                : 'visibility'
            }
            size={20}
            color={colors.gray}
          />

        </TouchableOpacity>

      </View>


      <Text
        style={changePasswordStyles.label2}
      >
        كلمة السر الجديدة
      </Text>


      <View
        style={changePasswordStyles.inputBox2}
      >

        <TextInput
          style={changePasswordStyles.input}
          placeholder="ادخل كلمة السر الجديدة"
          placeholderTextColor={
            colors.gray
          }
          secureTextEntry={hideNew}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TouchableOpacity
          onPress={() =>
            setHideNew(!hideNew)
          }
        >

          <MaterialIcons
            name={
              hideNew
                ? 'visibility-off'
                : 'visibility'
            }
            size={20}
            color={colors.gray}
          />

        </TouchableOpacity>

      </View>


      <View
        style={
          changePasswordStyles.strengthRow
        }
      >

        <MaterialIcons
          name="verified-user"
          size={14}
          color={colors.gray}
        />

        <Text
          style={
            changePasswordStyles.strengthText
          }
        >
          قوة كلمة السر
        </Text>


        <View
          style={
            changePasswordStyles.linesRow
          }
        >

          {[1, 2, 3, 4].map(index => (

            <View
              key={index}
              style={[
                changePasswordStyles.line,

                index <= validCount &&
                changePasswordStyles.lineActive
              ]}
            />

          ))}

        </View>

      </View>


      <Text
        style={changePasswordStyles.label3}
      >
        إعادة كتابة كلمة السر الجديدة
      </Text>


      <View
        style={changePasswordStyles.inputBox3}
      >

        <TextInput
          style={changePasswordStyles.input}
          placeholder="اعد كتابة كلمة السر الجديدة"
          placeholderTextColor={
            colors.gray
          }
          secureTextEntry={hideConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          onPress={() =>
            setHideConfirm(
              !hideConfirm
            )
          }
        >

          <MaterialIcons
            name={
              hideConfirm
                ? 'visibility-off'
                : 'visibility'
            }
            size={20}
            color={colors.gray}
          />

        </TouchableOpacity>

      </View>


      {!passwordsMatch &&
        confirmPassword.length > 0 && (

          <View
            style={
              changePasswordStyles.errorRow
            }
          >

            <MaterialIcons
              name="info-outline"
              size={14}
              color={colors.gray}
            />

            <Text
              style={
                changePasswordStyles.errorText
              }
            >
              يجب أن تتطابق كلمة السر الجديدة
            </Text>

          </View>

        )}


      <View
        style={
          changePasswordStyles.requirementsBox
        }
      >

        <Text
          style={
            changePasswordStyles.requirementsTitle
          }
        >
          متطلبات كلمة السر:
        </Text>


        {requirements.map(
          (item, index) => (

            <View
              key={index}
              style={
                changePasswordStyles.requirementRow
              }
            >

              <MaterialIcons
                name={
                  item.valid
                    ? 'check-circle-outline'
                    : 'radio-button-unchecked'
                }

                size={15}

                color={
                  item.valid
                    ? colors.blue
                    : colors.gray
                }
              />

              <Text
                style={
                  changePasswordStyles.requirementText
                }
              >
                {item.text}
              </Text>

            </View>


          ))}

      </View>


      <TouchableOpacity
        disabled={!canSubmit}
        style={[
          changePasswordStyles.saveBtn,

          !canSubmit &&
          changePasswordStyles.saveBtnDisabled
        ]}
        onPress={handleSave}
      >

        <MaterialIcons
          name="lock-outline"
          size={18}
          color={colors.white}
        />

        <Text
          style={
            changePasswordStyles.saveText
          }
        >
          تحديث كلمة السر
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
              تم تحديث كلمة السر بنجاح
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

                  navigation.navigate(
                    'LoginScreen'
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
              {errorMessage}
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

}