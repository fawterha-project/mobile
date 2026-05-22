import React, { useState } from 'react';
import BottomNavigation from './BottomNavigation';
import InvoiceSwipeActions from './InvoiceSwipeActions';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    categoryFoodStyles,
    profileStyles,
    colors,
    notFoundStyles,
} from './styles';


const healthBills = [

    {
        id: 1,
        name: 'النهدي',
        date: 'أمس - 7:10 م',
        amount: '200',
        image: { uri: 'asset:/image/nahdi.png' },
    }

];


export default function CategoryHealthScreen({
    navigation
}) {


    const [searchText, setSearchText] =
        useState('');

    const [bills, setBills] =
        useState(healthBills);

    const [
        successMessage,
        setSuccessMessage
    ] = useState('');



    const filteredBills =

        bills.filter(item =>

            item.name.includes(
                searchText.trim()
            )

        );


    const showNotFound =

        searchText.trim().length > 0 &&
        filteredBills.length === 0;



    return (

        <View
            style={categoryFoodStyles.container}
        >

            <StatusBar
                barStyle='dark-content'
                backgroundColor={colors.white}
            />


            <View
                style={profileStyles.statusFake}
            >

                <Text
                    style={profileStyles.timeText}
                >

                    9:41

                </Text>

                <View
                    style={profileStyles.statusIcons}
                >

                    <MaterialIcons
                        name='signal-cellular-4-bar'
                        size={15}
                        color={colors.black}
                    />

                    <MaterialIcons
                        name='wifi'
                        size={15}
                        color={colors.black}
                    />

                    <MaterialIcons
                        name='battery-full'
                        size={18}
                        color={colors.black}
                    />

                </View>

            </View>



            <View
                style={categoryFoodStyles.headerRow}
            >

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation?.goBack?.()
                    }
                >

                    <MaterialIcons
                        name='chevron-left'
                        size={32}
                        color={colors.black}
                    />

                </TouchableOpacity>


                <Text
                    style={categoryFoodStyles.title}
                >

                    الصحة

                </Text>

                <View
                    style={categoryFoodStyles.headerSpace}
                />

            </View>



            {
                !showNotFound && (

                    <View

                        style={[

                            categoryFoodStyles.summaryCard,

                            {
                                borderColor: '#FFE4E6',
                                backgroundColor: '#FFF1F2',
                            }

                        ]}

                    >

                        <View
                            style={
                                categoryFoodStyles.summaryIconBox
                            }
                        >

                            <MaterialIcons
                                name='favorite-border'
                                size={42}
                                color='#F43F5E'
                            />

                        </View>


                        <View
                            style={
                                categoryFoodStyles.summaryInfo
                            }
                        >

                            <Text
                                style={
                                    categoryFoodStyles.summaryTitle
                                }
                            >

                                الصحة

                            </Text>


                            <Text
                                style={
                                    categoryFoodStyles.summaryCount
                                }
                            >

                                {bills.length} فواتير

                            </Text>


                            <Text

                                style={[

                                    categoryFoodStyles.summaryAmount,

                                    {
                                        color: '#F43F5E'
                                    }

                                ]}

                            >

                                {
                                    bills.reduce(

                                        (sum, item) =>

                                            sum +
                                            Number(item.amount),

                                        0

                                    )
                                }

                                ريال

                            </Text>


                            <Text
                                style={
                                    categoryFoodStyles.summarySubText
                                }
                            >

                                إجمالي المبلغ

                            </Text>

                        </View>

                    </View>

                )
            }



            <View
                style={
                    categoryFoodStyles.searchBox
                }
            >

                <MaterialIcons
                    name='search'
                    size={22}
                    color={colors.gray}
                />

                <TextInput

                    placeholder='ابحث عن فاتورة...'

                    placeholderTextColor={
                        colors.gray
                    }

                    style={
                        categoryFoodStyles.searchInput
                    }

                    value={searchText}

                    onChangeText={
                        setSearchText
                    }

                />

            </View>



            {
                showNotFound ?

                    (

                        <View
                            style={
                                notFoundStyles.emptySearchContent
                            }
                        >

                            <Text
                                style={
                                    notFoundStyles.emptySearchTitle
                                }
                            >

                                ما لقينا أي فاتورة

                            </Text>

                            <Text
                                style={
                                    notFoundStyles.emptySearchText
                                }
                            >

                                جرب تبحث بكلمة ثانية ✨

                            </Text>

                        </View>

                    )

                    :

                    (

                        <View
                            style={
                                categoryFoodStyles.listContainer
                            }
                        >

                            {

                                filteredBills.map(item => (

                                    <InvoiceSwipeActions

                                        key={item.id}

                                        item={item}

                                        onDelete={(item) => {

                                            setBills(

                                                prev =>

                                                    prev.filter(

                                                        bill =>
                                                            bill.id !== item.id

                                                    )

                                            );

                                            setSuccessMessage(
                                                'تم حذف الفاتورة'
                                            );

                                            setTimeout(() => {

                                                setSuccessMessage('');

                                            }, 3000);

                                        }}


                                        onChangeCategory={(
                                            item,
                                            newCategory
                                        ) => {

                                            setBills(

                                                prev =>

                                                    prev.filter(

                                                        bill =>
                                                            bill.id !== item.id

                                                    )

                                            );

                                            setSuccessMessage(

                                                `تم نقل الفاتورة إلى ${newCategory}`

                                            );

                                            setTimeout(() => {

                                                setSuccessMessage('');

                                            }, 3000);

                                        }}

                                    >

                                        <View
                                            style={
                                                categoryFoodStyles.billItem
                                            }
                                        >

                                            <Text
                                                style={
                                                    categoryFoodStyles.amount
                                                }
                                            >

                                                {item.amount}

                                                <Text
                                                    style={
                                                        categoryFoodStyles.currency
                                                    }
                                                >

                                                    ريال

                                                </Text>

                                            </Text>


                                            <View
                                                style={
                                                    categoryFoodStyles.billInfo
                                                }
                                            >

                                                <Text
                                                    style={
                                                        categoryFoodStyles.billName
                                                    }
                                                >

                                                    {item.name}

                                                </Text>

                                                <Text
                                                    style={
                                                        categoryFoodStyles.billDate
                                                    }
                                                >

                                                    {item.date}

                                                </Text>

                                            </View>


                                            <Image
                                                source={item.image}
                                                style={
                                                    categoryFoodStyles.billLogo
                                                }
                                                resizeMode='contain'
                                            />

                                        </View>

                                    </InvoiceSwipeActions>

                                ))

                            }

                        </View>

                    )

            }



            {
                successMessage !== '' && (

                    <View

                        style={{

                            position: 'absolute',
                            top: 100,
                            left: 20,
                            right: 20,
                            backgroundColor: '#E8F9EE',
                            padding: 16,
                            borderRadius: 18,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            elevation: 6,
                            zIndex: 999

                        }}

                    >

                        <MaterialIcons
                            name='check-circle'
                            size={28}
                            color='#16A34A'
                        />

                        <Text

                            style={{

                                marginRight: 10,
                                fontSize: 16,
                                color: '#15803D',
                                fontFamily:
                                    'Tajawal-Medium'

                            }}

                        >

                            {successMessage}

                        </Text>

                    </View>

                )
            }


            <BottomNavigation
                navigation={navigation}
            />

        </View>

    );

}