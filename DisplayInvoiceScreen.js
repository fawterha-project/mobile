import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { displayInvoiceStyles, colors } from './styles';

const DisplayInvoiceScreen = ({ navigation }) => {
  return (
    <View style={displayInvoiceStyles.container}>
      {/* رجوع */}
      <TouchableOpacity
        style={displayInvoiceStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={28} color={colors.black} />
      </TouchableOpacity>

      {/* العنوان */}
      <Text style={displayInvoiceStyles.title}>تفاصيل الفاتورة</Text>

      {/* كرت الفاتورة */}
      <View style={displayInvoiceStyles.card}>
        {/* صورة الفاتورة */}
        <Image
          source={{
              uri: 'asset:/image/receipt.png'}}
          style={displayInvoiceStyles.receiptImage}
          resizeMode="stretch"
        />

        <View style={displayInvoiceStyles.line} />

        {/* اسم المتجر والمبلغ */}
        <View style={displayInvoiceStyles.infoRow}>
          <View>
            <Text style={displayInvoiceStyles.storeName}>بندة</Text>

            <Text style={displayInvoiceStyles.amount}>
              84
              <Text style={displayInvoiceStyles.currency}> ريال</Text>
            </Text>
          </View>

          <View style={displayInvoiceStyles.iconBox}>
            <MaterialIcons name="shopping-basket" size={35} color="#57C77A" />
          </View>
        </View>

        {/* التفاصيل */}
        <View style={displayInvoiceStyles.detailsRow}>
          <Text>#789321</Text>
          <Text>رقم الفاتورة</Text>
        </View>

        <View style={displayInvoiceStyles.detailsRow}>
          <Text>2026/04/29</Text>
          <Text>التاريخ</Text>
        </View>

        <View style={displayInvoiceStyles.detailsRow}>
          <Text>مواد غذائية</Text>
          <Text>الفئة</Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayInvoiceScreen;