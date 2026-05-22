import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { invoiceStyles, colors } from './styles';

const InvoiceScreen = ({ navigation }) => {
    return (
        <View style={invoiceStyles.container}>
            {/* زر الرجوع */}
            <TouchableOpacity
                style={invoiceStyles.backButton}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name="arrow-back" size={28} color={colors.black} />
            </TouchableOpacity>

            <Text style={invoiceStyles.title}>تفاصيل الفاتورة</Text>

            {/* كرت الفاتورة */}
            <View style={invoiceStyles.card}>
                <Image
                    source={{
              uri: 'asset:/image/receipt.png'}}
                    style={invoiceStyles.receiptImage}
                    resizeMode="stretch"
                />

                <View style={invoiceStyles.line} />

                <View style={invoiceStyles.infoRow}>
                    <View>
                        <Text style={invoiceStyles.storeName}>بندة</Text>

                        <Text style={invoiceStyles.amount}>
                            84
                            <Text style={invoiceStyles.currency}> ريال</Text>
                        </Text>
                    </View>

                    <View style={invoiceStyles.iconBox}>
                        <MaterialIcons name="shopping-basket" size={35} color="#57C77A" />
                    </View>
                </View>

                <View style={invoiceStyles.line} />

                <View style={invoiceStyles.detailsRow}>
                    <Text>#789321</Text>
                    <Text>رقم الفاتورة</Text>
                </View>

                <View style={invoiceStyles.detailsRow}>
                    <Text>2026/04/29</Text>
                    <Text>التاريخ</Text>
                </View>

                <View style={invoiceStyles.detailsRow}>
                    <Text>مواد غذائية</Text>
                    <Text>الفئة</Text>
                </View>
            </View>

            {/* الأزرار */}
            <View style={invoiceStyles.buttonContainer}>
                <TouchableOpacity style={invoiceStyles.deleteButton}>
                    <MaterialIcons name="delete" size={20} color="#FF4D4D" />

                    <Text style={invoiceStyles.deleteText}>حذف</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    style={invoiceStyles.saveButton}

                    onPress={() =>
                        navigation.navigate(
                            'InvoiceAddedScreen'
                        )
                    }

                >

                    <Text
                        style={invoiceStyles.saveText}
                    >

                        حفظ

                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InvoiceScreen;