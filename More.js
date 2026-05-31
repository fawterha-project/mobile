import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage
  from '@react-native-async-storage/async-storage';

import {
  moreStyles,
  colors,
} from './styles';

import Support from './Support';

const More = ({
  visible,
  onClose,
  navigation,
}) => {

  const [showSupport, setShowSupport] =
    useState(false);

  return (

    <>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
      >

        <View style={moreStyles.overlay}>

          <View style={moreStyles.card}>

            <TouchableOpacity
              style={moreStyles.closeButton}
              onPress={onClose}
            >

              <Text style={moreStyles.closeText}>
                ×
              </Text>

            </TouchableOpacity>


            <Text style={moreStyles.title}>
              المزيد
            </Text>


            {/* الملف الشخصي */}

            <TouchableOpacity
              style={moreStyles.item}
              onPress={() => {

                onClose();

                navigation.navigate(
                  'ProfileSettingScreen'
                );

              }}
            >

              <Text
                style={[
                  moreStyles.itemText,
                  moreStyles.profileText,
                ]}
              >

                الملف الشخصي

              </Text>

              <MaterialIcons
                name="person"
                size={26}
                color={colors.blue}
                style={{ marginRight: 8 }}
              />

            </TouchableOpacity>



            {/* سقف الإنفاق */}

            <TouchableOpacity
              style={moreStyles.item}
              onPress={() => {

                onClose();

                navigation.navigate(
                  'SpendingLimit'
                );

              }}
            >

              <Text
                style={[
                  moreStyles.itemText,
                  moreStyles.limitText,
                ]}
              >

                سقف الإنفاق

              </Text>

              <MaterialIcons
                name="report"
                size={26}
                color={colors.blue}
                style={{ marginRight: 12 }}
              />

            </TouchableOpacity>



            {/* الدعم */}

            <TouchableOpacity
              style={moreStyles.item}
              onPress={() => {

                setShowSupport(
                  true
                );

              }}
            >

              <Text
                style={[
                  moreStyles.itemText,
                  moreStyles.supportText,
                ]}
              >

                الدعم

              </Text>

              <MaterialIcons
                name="support-agent"
                size={26}
                color={colors.blue}
                style={{ marginRight: 6 }}
              />

            </TouchableOpacity>



            {/* عن التطبيق */}

            <TouchableOpacity
              style={moreStyles.item}
              onPress={() => {

                onClose();

                navigation.navigate(
                  'FAQScreen'
                );

              }}
            >

              <Text
                style={[
                  moreStyles.itemText,
                  moreStyles.aboutText,
                ]}
              >

                عن التطبيق

              </Text>

              <Image
                source={{
                  uri: 'asset:/image/fawterha.jpg'
                }}
                style={[
                  moreStyles.smallLogo,
                  moreStyles.aboutLogo,
                ]}
                resizeMode="contain"
              />

            </TouchableOpacity>

            {/* تسجيل خروج */}

            <TouchableOpacity
              style={moreStyles.logoutItem}
              onPress={async () => {

                await AsyncStorage.removeItem(
                  'userToken'
                );

                await AsyncStorage.removeItem(
                  'user'
                );

                onClose();

                navigation.replace(
                  'LoginScreen'
                );

              }}
            >

              <Text
                style={[
                  moreStyles.logoutText,
                  moreStyles.logoutTextCustom,
                ]}
              >

                تسجيل خروج

              </Text>

              <MaterialIcons
                name="logout"
                size={26}
                color={colors.blue}
                style={{ marginRight: 4 }}
              />

            </TouchableOpacity>

          </View>

        </View>

      </Modal>


      <Support
        visible={showSupport}
        onClose={() =>
          setShowSupport(false)
        }
      />

    </>

  );

};

export default More;