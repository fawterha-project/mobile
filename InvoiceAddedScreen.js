import React, {
  useEffect,
} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  invoiceAddedStyles,
  colors
} from './styles';

const InvoiceAddedScreen = ({
  navigation,
  route
}) => {

  const {
    invoiceData,
    extractedData,
    attachmentId,
  } = route.params || {};

useEffect(() => {

  const timer = setTimeout(() => {

    navigation.navigate(
      'HomeScreen'
    );

  }, 3000);

  return () =>
    clearTimeout(timer);

}, []);

  return (

    <View
      style={invoiceAddedStyles.container}
    >

      <TouchableOpacity
        style={invoiceAddedStyles.closeButton}

        onPress={() =>
          navigation.goBack()
        }
      >

        <MaterialIcons
          name="close"
          size={30}
          color={colors.black}
        />

      </TouchableOpacity>



      <Image
        source={{
          uri: 'asset:/image/invoice_success.png'
        }}

        style={
          invoiceAddedStyles.image
        }

        resizeMode="contain"
      />



      <Text
        style={invoiceAddedStyles.title}
      >

        أصبحت الفاتورة مضافة!

      </Text>



      <Text
        style={invoiceAddedStyles.subtitle}
      >

        تقدر تشوفها في خانة الفواتير </Text>

    </View>

  );

};

export default InvoiceAddedScreen;