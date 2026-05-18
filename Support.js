import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  supportStyles,
  colors,
} from './styles';

const Support = ({
  visible,
  onClose
}) => {

  const openEmail = () => {

    Linking.openURL(
      'mailto:fawterha@gmail.com'
    );

  };

  const openTwitter = () => {

    Linking.openURL(
      'https://x.com/fawterha?s=21'
    );

  };

  return (

    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >

      <View style={supportStyles.overlay}>

        <View style={supportStyles.card}>

          <TouchableOpacity
            style={supportStyles.closeButton}
            onPress={onClose}
          >

            <Text style={supportStyles.closeText}>
              ×
            </Text>

          </TouchableOpacity>


          <Text style={supportStyles.title}>
            الدعم
          </Text>


          <Text style={supportStyles.subtitle}>
            تواصل معنا عبر:
          </Text>


          <TouchableOpacity
            style={supportStyles.contactBox}
            onPress={openEmail}
          >

            <MaterialIcons
              name="email"
              size={24}
              color={colors.blue}
            />

            <Text
              style={supportStyles.contactText}
            >
              fawterha@gmail.com
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            style={supportStyles.contactBox}
            onPress={openTwitter}
          >

            <MaterialIcons
              name="alternate-email"
              size={24}
              color={colors.blue}
            />

            <Text
              style={supportStyles.contactText}
            >
              @Fawterha
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </Modal>

  );

};

export default Support;