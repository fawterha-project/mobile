import React from 'react';
import { colors } from './styles';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { uploadInvoiceStyles as styles } from './styles';

const UploadInvoiceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons
                    name="arrow-back"
                    size={24}
                    color={colors.black}
                />
            </TouchableOpacity>

            <Text style={styles.title}>
                رفع فاتورة
            </Text>

            <Text style={styles.subtitle}>
                اختر الطريقة التي تفضلها لرفع الفاتورة
            </Text>

            {/* بطاقة الصورة */}

            <View style={styles.imageCard}>

                <View style={styles.imageCircle}>
                    <MaterialIcons
                        name="image"
                        size={28}
                        color={colors.blue}
                    />
                </View>

                <Text style={styles.cardTitle}>
                    اختر صورة من المعرض
                </Text>

                <Text style={styles.cardSubTitle}>
                    PNG, JPG
                </Text>

                <TouchableOpacity style={styles.uploadButton}>

                    <MaterialIcons
                        name="image"
                        size={18}
                        color={colors.blue}
                    />

                    <Text
                        style={[
                            styles.uploadButtonText,
                            { marginHorizontal: 8 }
                        ]}
                    >
                        اختيار من المعرض
                    </Text>

                </TouchableOpacity>

            </View>

            {/* بطاقة PDF */}

            <View style={styles.pdfCard}>

                <View style={styles.pdfCircle}>
                    <MaterialIcons
                        name="picture-as-pdf"
                        size={28}
                        color={colors.red}
                    />
                </View>

                <Text style={styles.cardTitle}>
                    أو اختر ملف PDF
                </Text>

                <Text style={styles.cardSubTitle}>
                    PDF
                </Text>

                <TouchableOpacity style={styles.uploadButton}>

                    <MaterialIcons
                        name="picture-as-pdf"
                        size={18}
                        color={colors.blue}
                    />

                    <Text
                        style={[
                            styles.uploadButtonText,
                            { marginHorizontal: 8 }
                        ]}
                    >
                        اختيار ملف PDF
                    </Text>

                </TouchableOpacity>

            </View>

            {/* الأمان */}

            <View style={styles.securityCard}>

                <MaterialIcons
                    name="security"
                    size={30}
                    color={colors.blue}
                />

                <View style={styles.securityTextContainer}>
                    <Text style={styles.securityTitle}>
                        ملفاتك آمنة
                    </Text>

                    <Text style={styles.securityDescription}>
                        نحن نحافظ على خصوصية بياناتك ونستخدمها فقط لمعالجة الفواتير
                    </Text>
                </View>

            </View>

        </View>
    );
};

export default UploadInvoiceScreen;