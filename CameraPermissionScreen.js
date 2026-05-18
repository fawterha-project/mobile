import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

import {
  cameraPermissionStyles,
  colors
} from './styles';

const CameraPermissionScreen = ({
  navigation
}) => {

  const [modalVisible, setModalVisible] =
    useState(false);

  const [modalType, setModalType] =
    useState('');

  const requestCameraPermission =
    async () => {

      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA;

      const result =
        await request(permission);

      if (result === RESULTS.GRANTED) {

        setModalType('granted');
        setModalVisible(true);

      }

      else if (
        result === RESULTS.BLOCKED
      ) {

        setModalType('blocked');
        setModalVisible(true);

      }

      else {

        setModalType('denied');
        setModalVisible(true);

      }

    };

  const handleMainButton = () => {

    setModalVisible(false);

    if (
      modalType === 'granted'
    ) {

      navigation.navigate(
        'CameraScreen'
      );

    }

    if (
      modalType === 'blocked'
    ) {

      openSettings();

    }

  };

  const isError =

    modalType === 'denied' ||
    modalType === 'blocked';

  return (

    <View
      style={
        cameraPermissionStyles.container
      }
    >

      <Image
        source={{
          uri: 'asset:/image/fawterha.jpg'
        }}
        style={
          cameraPermissionStyles.logo
        }
        resizeMode="contain"
      />

      <Image
        source={{
          uri: 'asset:/image/cameraapprove.jpg'
        }}
        style={
          cameraPermissionStyles.image
        }
        resizeMode="contain"
      />

      <Text
        style={
          cameraPermissionStyles.title
        }
      >
        نحتاج إذنك عشان نستخدم الكاميرا
      </Text>

      <Text
        style={
          cameraPermissionStyles.description
        }
      >
        عشان نقدر نصور الفواتير
      </Text>


      <TouchableOpacity
        style={
          cameraPermissionStyles.button
        }
        onPress={
          requestCameraPermission
        }
      >

        <Text
          style={
            cameraPermissionStyles.buttonText
          }
        >
          أسمح
        </Text>

      </TouchableOpacity>


      <Text
        style={
          cameraPermissionStyles.skipText
        }
        onPress={() =>
          navigation.goBack()
        }
      >
        ليس الآن
      </Text>


      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
      >

        <View
          style={
            cameraPermissionStyles.modalOverlay
          }
        >

          <View
            style={
              cameraPermissionStyles.modalBox
            }
          >

            <View
              style={[

                cameraPermissionStyles.modalIconCircle,

                isError &&
                cameraPermissionStyles.modalIconCircleDanger

              ]}
            >

              <MaterialIcons
                name={
                  modalType === 'granted'
                    ? 'check'
                    : modalType === 'blocked'
                      ? 'settings'
                      : 'close'
                }

                size={40}

                color={
                  isError
                    ? colors.red
                    : colors.blue
                }
              />

            </View>


            <Text
              style={[

                cameraPermissionStyles.modalTitle,

                isError &&
                cameraPermissionStyles.modalTitleDanger

              ]}
            >

              {
                modalType === 'granted'
                  ? 'تم السماح'

                  : modalType === 'blocked'
                    ? 'صلاحية الكاميرا مقفلة'

                    : 'لم يتم السماح'
              }

            </Text>


            <Text
              style={
                cameraPermissionStyles.modalDescription
              }
            >

              {
                modalType === 'granted'
                  ? 'صار عندنا وصول للكاميرا'

                  : modalType === 'blocked'
                    ? 'فعّل صلاحية الكاميرا من الإعدادات'

                    : 'نحتاج إذن الكاميرا عشان نصور الفواتير'
              }

            </Text>


            <View
              style={
                cameraPermissionStyles.modalButtons
              }
            >

              <TouchableOpacity
                style={
                  cameraPermissionStyles.cancelButton
                }
                onPress={() =>
                  setModalVisible(false)
                }
              >

                <Text
                  style={
                    cameraPermissionStyles.cancelButtonText
                  }
                >
                  إلغاء
                </Text>

              </TouchableOpacity>


              <TouchableOpacity
                style={[

                  cameraPermissionStyles.confirmButton,

                  isError &&
                  cameraPermissionStyles.confirmButtonDanger

                ]}
                onPress={
                  handleMainButton
                }
              >

                <Text
                  style={
                    cameraPermissionStyles.confirmButtonText
                  }
                >

                  {
                    modalType === 'granted'
                      ? 'متابعة'

                      : modalType === 'blocked'
                        ? 'الإعدادات'

                        : 'حسنًا'
                  }

                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>

    </View>

  );

};

export default CameraPermissionScreen;