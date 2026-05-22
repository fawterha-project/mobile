import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BottomNavigation from './BottomNavigation';

import {
    homeWithInvoicesStyles,
    colors
} from './styles';

export default function HomeWithInvoicesScreen({
    navigation
}) {

    const categories = [

        {
            icon: 'shopping-basket',
            name: 'المقاضي',
            amount: '270',
            iconColor: '#22C55E',
            bgColor: '#EAFBF0',
        },

        {
            icon: 'restaurant',
            name: 'مطاعم',
            amount: '240',
            iconColor: '#2563FF',
            bgColor: '#EEF4FF',
        },

        {
            icon: 'shopping-bag',
            name: 'التسوق',
            amount: '500',
            iconColor: '#A020F0',
            bgColor: '#F6EAFF',
        },

        {
            icon: 'directions-bus',
            name: 'النقل',
            amount: '300',
            iconColor: '#FFB000',
            bgColor: '#FFF6E7',
        },

        {
            icon: 'favorite-border',
            name: 'الصحة',
            amount: '200',
            iconColor: '#FF4B5C',
            bgColor: '#FFECEF',
        },

        {
            icon: 'event',
            name: 'الالتزامات',
            amount: '150',
            iconColor: '#12C6D7',
            bgColor: '#EAFBFC',
        },

        {
            icon: 'more-horiz',
            name: 'أخرى',
            amount: '245',
            iconColor: '#8C8FA1',
            bgColor: '#F3F3F6',
        },

    ];

    const invoices = [

        {
            store: 'أتش اند أم',
            amount: '320',
            time: 'اليوم - 10:30 ص',
            logo: {
                uri: 'asset:/image/H&M.png'
            }
        },

        {
            store: 'اكسترا',
            amount: '230',
            time: 'أمس - 10:30 ص',
            logo: {
                uri: 'asset:/image/extra.png'
            }
        },

        {
            store: 'نون للتسوق',
            amount: '120',
            time: '12 مايو - 1:20 م',
            logo: {
                uri: 'asset:/image/noon.png'
            }
        }

    ];


    return (

        <>

            <ScrollView
                style={homeWithInvoicesStyles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 120
                }}
            >

                {/* Header */}

                <View
                    style={homeWithInvoicesStyles.header}
                >

                    <TouchableOpacity>

                        <MaterialIcons
                            name="notifications"
                            size={24}
                            color={colors.blue}
                        />

                    </TouchableOpacity>


                    <View>

                        <Image
                            source={{
                                uri: 'asset:/image/fawterha.jpg'
                            }}
                            style={homeWithInvoicesStyles.logo}
                        />

                        <Text
                            style={homeWithInvoicesStyles.helloText}
                        >

                            👋 أهلاً أريام

                        </Text>

                        <Text
                            style={homeWithInvoicesStyles.subText}
                        >

                            نساعدك على تنظيم مصروفاتك بسهولة

                        </Text>

                    </View>

                </View>



                {/* Scan Card */}

                <View
                    style={homeWithInvoicesStyles.scanCard}
                >

                    <Text
                        style={homeWithInvoicesStyles.scanTitle}
                    >

                        جاهز تسجل فاتورتك؟

                    </Text>

                    <Text
                        style={homeWithInvoicesStyles.scanSub}
                    >

                        اختر الطريقة المناسبة لك

                    </Text>


                    <View
                        style={homeWithInvoicesStyles.scanRow}
                    >

                        <TouchableOpacity
                            style={homeWithInvoicesStyles.uploadButton}
                        >

                            <MaterialIcons
                                name="upload-file"
                                size={28}
                                color={colors.white}
                            />

                            <Text
                                style={homeWithInvoicesStyles.scanText}
                            >

                                رفع فاتورة

                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity
                            style={homeWithInvoicesStyles.cameraButton}

                            onPress={() =>
                                navigation.navigate(
                                    'CameraScreen'
                                )
                            }
                        >

                            <MaterialIcons
                                name="qr-code-scanner"
                                size={28}
                                color={colors.white}
                            />

                            <Text
                                style={homeWithInvoicesStyles.scanText}
                            >

                                مسح فاتورة

                            </Text>

                        </TouchableOpacity>

                    </View>

                    <Text
                        style={homeWithInvoicesStyles.supportText}
                    >

                        ندعم الصور و PDF واستخراج البيانات تلقائياً

                    </Text>

                </View>


                <View style={homeWithInvoicesStyles.journeyCard}>

                    <Text style={homeWithInvoicesStyles.sectionTitle}>
                        رحلة فواتيرك
                    </Text>

                    <Text style={homeWithInvoicesStyles.journeySub}>
                        من إضافة الفاتورة إلى الاسترجاع
                    </Text>

                    <View style={homeWithInvoicesStyles.timelineContainer}>


                        <View style={homeWithInvoicesStyles.stepBlock}>

                            <View style={[
                                homeWithInvoicesStyles.stepCircle,
                                { backgroundColor: '#4D8DFF' }
                            ]}>
                                <MaterialIcons
                                    name="photo-camera"
                                    size={24}
                                    color="white"
                                />
                            </View>

                            <Text style={homeWithInvoicesStyles.stepTitle}>
                                إضافة الفاتورة
                            </Text>

                            <Text style={homeWithInvoicesStyles.stepDesc}>
                                تصنيفها بأي طريقة
                            </Text>

                        </View>

                        <View style={homeWithInvoicesStyles.timelineLine} />


                        <View style={homeWithInvoicesStyles.stepBlock}>

                            <View style={[
                                homeWithInvoicesStyles.stepCircle,
                                { backgroundColor: '#35C98B' }
                            ]}>
                                <MaterialIcons
                                    name="psychology"
                                    size={24}
                                    color="white"
                                />
                            </View>

                            <Text style={homeWithInvoicesStyles.stepTitle}>
                                تحليل ذكي
                            </Text>

                            <Text style={homeWithInvoicesStyles.stepDesc}>
                                نستخرج البيانات
                            </Text>

                        </View>

                        <View style={homeWithInvoicesStyles.timelineLine} />


                        <View style={homeWithInvoicesStyles.stepBlock}>

                            <View style={[
                                homeWithInvoicesStyles.stepCircle,
                                { backgroundColor: '#A855F7' }
                            ]}>
                                <MaterialIcons
                                    name="folder-open"
                                    size={24}
                                    color="white"
                                />
                            </View>

                            <Text style={homeWithInvoicesStyles.stepTitle}>
                                تصنيف تلقائي
                            </Text>

                            <Text style={homeWithInvoicesStyles.stepDesc}>
                                نضعها في التصنيف
                            </Text>

                        </View>

                        <View style={homeWithInvoicesStyles.timelineLine} />


                        <View style={homeWithInvoicesStyles.stepBlock}>

                            <View style={[
                                homeWithInvoicesStyles.stepCircle,
                                { backgroundColor: '#FBBF24' }
                            ]}>
                                <MaterialIcons
                                    name="hourglass-empty"
                                    size={24}
                                    color="white"
                                />
                            </View>

                            <Text style={homeWithInvoicesStyles.stepTitle}>
                                الاسترجاع</Text>

                            <Text style={homeWithInvoicesStyles.stepDesc}>
                                تذكير قبل الموعد
                            </Text>

                        </View>

                    </View>

                    <Text
                        style={homeWithInvoicesStyles.bottomJourneyText}
                    >

                        كل شيء يتم تلقائيًا وأنت تستمتع براحة أكبر</Text>

                </View>
                {/* توزيع المصروفات */}

                <View
                    style={homeWithInvoicesStyles.chartCard}
                >

                    <View
                        style={homeWithInvoicesStyles.invoiceHeader}
                    >

                        <Text
                            style={homeWithInvoicesStyles.sectionTitle}
                        >

                            توزيع المصروفات

                        </Text>

                    </View>


                    <View
                        style={homeWithInvoicesStyles.categoriesGrid}
                    >

                        {
                            categories.map((item, index) => (

                                <TouchableOpacity
                                    key={index}
                                    style={homeWithInvoicesStyles.categoryItem}

                                    onPress={() => {

                                        if (item.name === 'المقاضي')
                                            navigation.navigate(
                                                'CategoryGroceries'
                                            );

                                        else if (item.name === 'مطاعم')
                                            navigation.navigate(
                                                'CategoryRestaurants'
                                            );

                                        else if (item.name === 'التسوق')
                                            navigation.navigate(
                                                'CategoryShopping'
                                            );

                                        else if (item.name === 'النقل')
                                            navigation.navigate(
                                                'CategoryTransport'
                                            );

                                        else if (item.name === 'الصحة')
                                            navigation.navigate(
                                                'CategoryHealth'
                                            );

                                        else if (item.name === 'الالتزامات')
                                            navigation.navigate(
                                                'CategoryCommitments'
                                            );

                                        else if (item.name === 'أخرى')
                                            navigation.navigate(
                                                'CategoryOther'
                                            );

                                    }}
                                >
                                    <View
                                        style={[
                                            homeWithInvoicesStyles.categoryCircle,
                                            {
                                                backgroundColor: item.bgColor
                                            }
                                        ]}
                                    >

                                        <MaterialIcons
                                            name={item.icon}
                                            size={22}
                                            color={item.iconColor}
                                        />

                                    </View>

                                    <Text
                                        style={homeWithInvoicesStyles.categoryName}
                                    >

                                        {item.name}

                                    </Text>

                                    <Text
                                        style={homeWithInvoicesStyles.categoryAmount}
                                    >

                                        {item.amount} ريال

                                    </Text>

                                </TouchableOpacity>

                            ))
                        }

                    </View>

                </View>




                {/* آخر الفواتير */}

                <View
                    style={homeWithInvoicesStyles.invoiceCard}
                >

                    <View
                        style={homeWithInvoicesStyles.invoiceHeader}
                    >

                        <Text
                            style={homeWithInvoicesStyles.sectionTitle}
                        >

                            آخر الفواتير </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    'BillsScreen'
                                )
                            }
                        >

                            <Text
                                style={homeWithInvoicesStyles.showAll}
                            >

                                عرض الكل

                            </Text>

                        </TouchableOpacity>
                    </View>


                    {
                        invoices.map((invoice, index) => (

                            <TouchableOpacity
                                key={index}
                                style={homeWithInvoicesStyles.invoiceRow}
                            >

                                <View
                                    style={homeWithInvoicesStyles.invoiceRight}
                                >

                                    <Image
                                        source={invoice.logo}
                                        style={homeWithInvoicesStyles.invoiceLogo}
                                    />

                                    <View>

                                        <Text
                                            style={homeWithInvoicesStyles.invoiceStore}
                                        >

                                            {invoice.store}

                                        </Text>

                                        <Text
                                            style={homeWithInvoicesStyles.invoiceDate}
                                        >

                                            {invoice.time}

                                        </Text>

                                    </View>

                                </View>


                                <View
                                    style={homeWithInvoicesStyles.invoiceAmountBox}
                                >

                                    <Text
                                        style={homeWithInvoicesStyles.invoiceAmount}
                                    >

                                        {invoice.amount}

                                    </Text>

                                    <Text
                                        style={homeWithInvoicesStyles.invoiceCurrency}
                                    >

                                        ريال

                                    </Text>

                                </View>

                            </TouchableOpacity>

                        ))
                    }

                </View>

            </ScrollView>


            <BottomNavigation
                navigation={navigation}
                activeScreen="Home"
            />

        </>

    );

}