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
    navigation,
    route
}) {
    const receipt =
        route?.params?.receipt;

    console.log(
        'Receipt Details:',
        JSON.stringify(receipt, null, 2)
    );

    const invoiceData = {

        invoiceNumber:
            receipt?.invoice_number ||
            'غير متوفر',

        date:
            receipt?.issued_at
                ?.split('T')[0] ||
            '-',

        merchantName:
            receipt?.merchant_name ||
            '-',

        paymentMethod:
            receipt?.payment_method ||
            '-',

        total:
            receipt?.total_price ||
            0,

    };

    return (

        <View style={invoiceDetailsStyles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={invoiceDetailsStyles.scroll}
                contentContainerStyle={{
                    paddingBottom: 80,
                }}
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

                        <Text
                            style={invoiceDetailsStyles.longValue}
                            numberOfLines={3}
                            ellipsizeMode="tail"
                        >
                            {invoiceData.merchantName}
                        </Text>
                    </View>

                    {
                        receipt?.merchant?.address && (

                            <View style={invoiceDetailsStyles.row}>

                                <Text style={invoiceDetailsStyles.label}>
                                    عنوان المتجر
                                </Text>

                                <Text
                                    style={invoiceDetailsStyles.longValue}
                                    numberOfLines={3}
                                    ellipsizeMode="tail"
                                >
                                    {receipt.merchant.address}
                                </Text>

                            </View>

                        )
                    }

                    {
                        receipt?.merchant?.vat_number && (

                            <View style={invoiceDetailsStyles.row}>

                                <Text style={invoiceDetailsStyles.label}>
                                    الرقم الضريبي
                                </Text>

                                <Text style={invoiceDetailsStyles.value}>
                                    {receipt.merchant.vat_number}
                                </Text>

                            </View>

                        )
                    }

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

                    {
                        receipt?.invoice_items?.length > 0 ?

                            receipt.invoice_items.map(
                                (product, index) => (

                                    <View
                                        key={index}
                                        style={invoiceDetailsStyles.productHeader}
                                    >

                                        <Text
                                            style={invoiceDetailsStyles.cell}
                                        >
                                            {product.invoice_item_name}
                                        </Text>

                                        <Text
                                            style={invoiceDetailsStyles.cell}
                                        >
                                            {product.quantity || '-'}
                                        </Text>

                                        <Text
                                            style={invoiceDetailsStyles.cell}
                                        >
                                            {product.price_before_vat || '-'}
                                        </Text>

                                        <Text
                                            style={invoiceDetailsStyles.cell}
                                        >
                                            {product.vat_amount || '-'}
                                        </Text>

                                        <Text
                                            style={invoiceDetailsStyles.cell}
                                        >
                                            {product.price_with_vat || '-'}
                                        </Text>

                                    </View>

                                )

                            )

                            :

                            <View
                                style={{
                                    padding: 20,
                                    alignItems: 'center',
                                }}
                            >

                                <Text>
                                    لا توجد تفاصيل منتجات متاحة
                                </Text>

                            </View>
                    }

                    <View style={invoiceDetailsStyles.card}>

                        <SectionHeader
                            title="ملخص الفاتورة"
                            icon="payments"
                        />

                        <View style={invoiceDetailsStyles.row}>

                            <Text style={invoiceDetailsStyles.label}>
                                طريقة الدفع
                            </Text>

                            <Text style={invoiceDetailsStyles.value}>
                                {invoiceData.paymentMethod}
                            </Text>

                        </View>

                        {
                            receipt?.subtotal != null && (

                                <View style={invoiceDetailsStyles.row}>

                                    <Text style={invoiceDetailsStyles.label}>
                                        المجموع قبل الضريبة
                                    </Text>

                                    <Text style={invoiceDetailsStyles.value}>
                                        {receipt.subtotal} ريال
                                    </Text>

                                </View>

                            )
                        }
                        {
                            receipt?.vat_amount != null && (

                                <View style={invoiceDetailsStyles.row}>

                                    <Text style={invoiceDetailsStyles.label}>
                                        الضريبة
                                    </Text>

                                    <Text style={invoiceDetailsStyles.value}>
                                        {receipt.vat_amount} ريال
                                    </Text>

                                </View>

                            )
                        }
                        {
                            receipt?.discount_amount != null && (

                                <View style={invoiceDetailsStyles.row}>

                                    <Text style={invoiceDetailsStyles.label}>
                                        الخصم
                                    </Text>

                                    <Text style={invoiceDetailsStyles.value}>
                                        {receipt.discount_amount} ريال
                                    </Text>

                                </View>

                            )
                        }
                        <View style={invoiceDetailsStyles.row}>

                            <Text style={invoiceDetailsStyles.label}>
                                الإجمالي
                            </Text>

                            <Text style={invoiceDetailsStyles.value}>
                                {invoiceData.total} ريال
                            </Text>

                        </View>

                    </View>

                    <View style={invoiceDetailsStyles.row}>

                        <Text style={invoiceDetailsStyles.label}>
                            الإجمالي
                        </Text>

                        <Text style={invoiceDetailsStyles.value}>
                            {invoiceData.total} ريال
                        </Text>

                    </View>

                </View>

            </ScrollView>

        </View>

    )

}