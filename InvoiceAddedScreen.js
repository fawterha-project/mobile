import React from 'react';

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

        تقدر تشوفها في الفواتير

      </Text>



      <TouchableOpacity

        style={
          invoiceAddedStyles.viewButton
        }

        onPress={() =>
          navigation.navigate(
            'InvoiceDetails',
            {
              extractedData,
              attachmentId,
            }
          )
        }

      >

        <Text
          style={
            invoiceAddedStyles.viewText
          }
        >

          عرض الفاتورة

        </Text>

      </TouchableOpacity>



      <TouchableOpacity

        style={
          invoiceAddedStyles.newButton
        }

        onPress={() =>
          navigation.navigate(
            'CameraScreen'
          )
        }

      >

        <Text
          style={
            invoiceAddedStyles.newText
          }
        >

          إنشاء فاتورة جديدة

        </Text>

      </TouchableOpacity>

    </View>

  );

};

export default InvoiceAddedScreen;