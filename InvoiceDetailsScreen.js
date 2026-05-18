import React from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import MaterialIcons from
    'react-native-vector-icons/MaterialIcons';

import QRCode from
    'react-native-qrcode-svg';

import {
    invoiceDetailsStyles,
    colors
} from './styles';

const invoiceData = {

    invoiceNumber: 'INV10111',
    date: '2024/12/12',

    store: {
        name: 'نون',
        address: 'الرياض - حي النرجس',
        tax: '12345678900003'
    },

    products: [

        {
            name: 'لابتوب',
            qty: 1,
            price: '50',
            tax: '7.5',
            total: '57.5'
        },

        {
            name: 'كاشينو',
            qty: 1,
            price: '70',
            tax: '10.5',
            total: '80.5'
        },

        {
            name: 'موبينو',
            qty: 1,
            price: '100',
            tax: '15',
            total: '115'
        }

    ],

    summary: {
        subtotal: '220',
        vat: '33',
        total: '253'
    },

    additionalInfo: {
        branch: 'فرع النرجس',
        cashier: 'أحمد محمد',
        payment: 'بطاقة مدى',
        order: 'طلب داخلي'
    },

    qr: 'invoice123'

};

const SectionHeader = ({
    title,
    icon
}) => (

    <View style={invoiceDetailsStyles.cardHeader}>

        <View
            style={invoiceDetailsStyles.headerTitleBox}>

            <Text
                style={invoiceDetailsStyles.cardTitle}>
                {title}
            </Text>

            <View
                style={invoiceDetailsStyles.iconCircle}>

                <MaterialIcons
                    name={icon}
                    size={16}
                    color={colors.blue}
                />

            </View>

        </View>

    </View>

);

export default function InvoiceDetailsScreen({
    navigation
}) {

    return (

        <View style={invoiceDetailsStyles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={invoiceDetailsStyles.scroll}
            >

                <View
                    style={invoiceDetailsStyles.headerRow}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>

                        <MaterialIcons
                            name="arrow-back-ios"
                            size={24}
                            color={colors.blue}
                        />

                    </TouchableOpacity>


                    <View
                        style={invoiceDetailsStyles.invoiceBadge}>

                        <Text
                            style={invoiceDetailsStyles.invoiceBadgeText}>
                            فاتورة ضريبية مبسطة
                        </Text>

                        <MaterialIcons
                            name="description"
                            size={18}
                            color={colors.white}
                        />

                    </View>

                    <View style={{ width: 24 }} />

                </View>


                <View style={invoiceDetailsStyles.card}>

                    <Text
                        style={invoiceDetailsStyles.mainInvoiceTitle}>
                        فاتورة ضريبية مبسطة
                    </Text>

                    <SectionHeader
                        title="بيانات الفاتورة"
                        icon="receipt-long"
                    />

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            رقم الفاتورة
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.invoiceNumber}
                        </Text>

                    </View>

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            تاريخ إصدار الفاتورة
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.date}
                        </Text>

                    </View>

                </View>


                <View style={invoiceDetailsStyles.card}>

                    <SectionHeader
                        title="بيانات المتجر"
                        icon="store"
                    />

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            اسم المتجر
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.store.name}
                        </Text>

                    </View>

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            عنوان المتجر
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.store.address}
                        </Text>

                    </View>

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            الرقم الضريبي
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.store.tax}
                        </Text>

                    </View>

                </View>


                <View style={invoiceDetailsStyles.card}>

                    <SectionHeader
                        title="المنتجات"
                        icon="shopping-cart"
                    />

                    <View
                        style={invoiceDetailsStyles.productHeader}>

                        <Text style={invoiceDetailsStyles.cell}>
                            المنتج
                        </Text>

                        <Text style={invoiceDetailsStyles.cell}>
                            الكمية
                        </Text>

                        <Text style={invoiceDetailsStyles.cell}>
                            سعر الوحدة
                        </Text>

                        <Text style={invoiceDetailsStyles.cell}>
                            الضريبة
                        </Text>

                        <Text style={invoiceDetailsStyles.cell}>
                            الإجمالي
                        </Text>

                    </View>

                    {invoiceData.products.map(
                        (item, index) => (

                            <View
                                key={index}
                                style={invoiceDetailsStyles.productRow}>

                                <Text style={invoiceDetailsStyles.cell}>
                                    {item.name}
                                </Text>

                                <Text style={invoiceDetailsStyles.cell}>
                                    {item.qty}
                                </Text>

                                <Text style={invoiceDetailsStyles.cell}>
                                    {item.price}
                                </Text>

                                <Text style={invoiceDetailsStyles.cell}>
                                    {item.tax}
                                </Text>

                                <Text style={invoiceDetailsStyles.cell}>
                                    {item.total}
                                </Text>

                            </View>

                        ))}

                </View>

            </ScrollView>

        </View>

    )

}