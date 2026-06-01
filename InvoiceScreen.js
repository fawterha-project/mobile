import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { invoiceStyles, colors } from './styles';
import { createInvoice, deleteAttachment } from './services/receiptService';

const categoryMapper = {
    'المقاضي والبيت': 'المقاضي',
    'المطاعم والترفيه': 'المطاعم',
    'التسوق والأناقة': 'التسوق',
    'النقل والسيارة': 'النقل',
    'الصحة والعافية': 'الصحة',
    'الفواتير والالتزامات': 'الالتزامات',
    أخرى: 'اخرى',
};

const getCategoryName = category => categoryMapper[category] || category;

const InvoiceScreen = ({ navigation, route }) => {
    const { extractedData, attachmentId, fileData } = route.params || {};

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    console.log('EXTRACTED:', extractedData);
    const handleSave = async () => {
        try {
            const result = await createInvoice(attachmentId);
            console.log('CREATE INVOICE RESULT:', JSON.stringify(result, null, 2));

            console.log('تم إنشاء الفاتورة:', result);

            navigation.navigate('InvoiceAddedScreen', {
                invoiceData: result,
                extractedData,
                attachmentId,
            });
        } catch (error) {
            console.log('خطأ إنشاء الفاتورة:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteAttachment(attachmentId);

            setShowDeleteModal(false);

            navigation.replace('CameraScreen');
        } catch (error) {
            console.log('خطأ حذف الفاتورة:', error);
        }
    };

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
                        uri: fileData?.uri,
                    }}
                    style={invoiceStyles.receiptImage}
                    resizeMode="stretch"
                />

                <View style={invoiceStyles.line} />

                <View style={invoiceStyles.infoRow}>
                    <View>
                        <Text
                            style={invoiceStyles.storeName}
                            numberOfLines={2}
                            ellipsizeMode="tail"
                        >
                            {extractedData?.merchant_name || 'غير معروف'}
                        </Text>

                        <Text style={invoiceStyles.amount}>
                            {extractedData?.subtotal || 0}
                            <Text style={invoiceStyles.currency}> ريال</Text>
                        </Text>
                    </View>

                    <View style={invoiceStyles.iconBox}>
                        <MaterialIcons
                            name="shopping-basket"
                            size={35}
                            color={colors.green}
                        />
                    </View>
                </View>

                <View style={invoiceStyles.line} />

                <View style={invoiceStyles.detailsRow}>
                    <Text style={invoiceStyles.detailValue}>
                        {extractedData?.invoice_number || 'غير متوفر'}
                    </Text>

                    <Text style={invoiceStyles.detailTitle}>رقم الفاتورة</Text>
                </View>

                <View style={invoiceStyles.detailsRow}>
                    <Text style={invoiceStyles.detailValue}>
                        {extractedData?.date?.split('T')[0]}
                    </Text>

                    <Text style={invoiceStyles.detailTitle}>التاريخ</Text>
                </View>

                <View style={invoiceStyles.detailsRow}>
                    <Text style={invoiceStyles.detailValue}>
                        {getCategoryName(extractedData?.suggested_category)}
                    </Text>

                    <Text style={invoiceStyles.detailTitle}>الفئة</Text>
                </View>
            </View>
            {/* الأزرار */}
            <View style={invoiceStyles.buttonContainer}>
                <TouchableOpacity
                    style={invoiceStyles.deleteButton}
                    onPress={() => setShowDeleteModal(true)}
                >
                    <MaterialIcons name="delete" size={20} color={colors.errorRed} />

                    <Text style={invoiceStyles.deleteText}>حذف</Text>
                </TouchableOpacity>

                <TouchableOpacity style={invoiceStyles.saveButton} onPress={handleSave}>
                    <Text style={invoiceStyles.saveText}>حفظ</Text>
                </TouchableOpacity>
            </View>

            {showDeleteModal && (
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: colors.overlay,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: '85%',
                            backgroundColor: colors.white,
                            borderRadius: 20,
                            padding: 24,
                            alignItems: 'center',
                        }}
                    >
                        <MaterialIcons name="delete" size={55} color={colors.errorRed} />

                        <Text
                            style={{
                                fontSize: 25,
                                marginTop: 10,
                                color: colors.errorRed,
                            }}
                        >
                            حذف الفاتورة
                        </Text>

                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: -5,
                                fontSize: 14,
                            }}
                        >
                            سيتم حذف الفاتورة ولن تتمكن من استعادتها لاحقاً
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 25,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginRight: 8,
                                    padding: 14,
                                    borderRadius: 12,
                                    backgroundColor: colors.dividerLight,
                                    alignItems: 'center',
                                }}
                                onPress={() => setShowDeleteModal(false)}
                            >
                                <Text
                                    style={{
                                        color: colors.black,
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}
                                >
                                    إلغاء
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginLeft: 8,
                                    padding: 14,
                                    borderRadius: 12,
                                    backgroundColor: colors.errorRed,
                                    alignItems: 'center',
                                }}
                                onPress={handleDelete}
                            >
                                <Text
                                    style={{
                                        color: colors.white,
                                        fontSize: 18,
                                        fontWeight: '600',
                                    }}
                                >
                                    حذف
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

export default InvoiceScreen;