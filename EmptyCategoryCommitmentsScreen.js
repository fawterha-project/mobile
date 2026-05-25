import React, {
    useEffect,
    useState
} from 'react';

import EmptyBottomNavigation from './EmptyBottomNavigation';
import {
    getReceipts
}
    from './services/homeService';

import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    categoryFoodStyles,
    bottomNavStyles,
    profileStyles,
    colors,
} from './styles';

const BottomTab = ({
    icon,
    label,
    active
}) => (

    <TouchableOpacity
        style={bottomNavStyles.tabItem}
        activeOpacity={0.7}
    >

        <MaterialIcons
            name={icon}
            size={22}
            color={
                active
                    ? colors.blue
                    : colors.gray
            }
        />

        <Text
            style={[
                bottomNavStyles.tabText,
                active &&
                bottomNavStyles.activeTabText,
            ]}
        >
            {label}
        </Text>

    </TouchableOpacity>

);

export default function EmptyCategoryCommitmentsScreen({
    navigation,
}) {
    const [
        receipts,
        setReceipts
    ] = useState([]);

    useEffect(() => {

        loadData();

    }, []);


    const loadData =
        async () => {

            try {

                const data =
                    await getReceipts();

                const commitmentsReceipts =

                    data.filter(

                        item =>

                            item?.categories
                                ?.categorie_name ===
                            'الالتزامات'

                    );

                setReceipts(
                    commitmentsReceipts
                );

            }

            catch (error) {

                console.log(
                    error
                );

            }

        };


    const totalAmount =

        receipts.reduce(

            (sum, item) =>

                sum +
                (item.total_price || 0),

            0

        );

    return (

        <View style={categoryFoodStyles.container}>

            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
            />

            <View style={profileStyles.statusFake}>

                <Text style={profileStyles.timeText}>
                    9:41
                </Text>

                <View style={profileStyles.statusIcons}>

                    <MaterialIcons
                        name="signal-cellular-4-bar"
                        size={15}
                        color={colors.black}
                    />

                    <MaterialIcons
                        name="wifi"
                        size={15}
                        color={colors.black}
                    />

                    <MaterialIcons
                        name="battery-full"
                        size={18}
                        color={colors.black}
                    />

                </View>

            </View>


            <View style={categoryFoodStyles.headerRow}>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation?.goBack?.()
                    }
                >

                    <MaterialIcons
                        name="chevron-left"
                        size={32}
                        color={colors.black}
                    />

                </TouchableOpacity>

                <Text style={categoryFoodStyles.title}>
                    الالتزامات
                </Text>

                <View
                    style={categoryFoodStyles.headerSpace}
                />

            </View>


            <View
                style={[
                    categoryFoodStyles.summaryCard,
                    {
                        borderColor: '#A5F3FC',
                        backgroundColor: '#ECFEFF',
                    },
                ]}
            >

                <View
                    style={
                        categoryFoodStyles.summaryIconBox
                    }
                >

                    <MaterialIcons
                        name="event"
                        size={42}
                        color={colors.cyan}
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
                        الالتزامات
                    </Text>

                    <Text
                        style={
                            categoryFoodStyles.summaryCount
                        }
                    >
                        {receipts.length} فواتير
                    </Text>

                    <Text
                        style={[
                            categoryFoodStyles.summaryAmount,
                            {
                                color: colors.cyan
                            }
                        ]}
                    >
                        {totalAmount} ريال
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


            <View
                style={categoryFoodStyles.searchBox}
            >

                <MaterialIcons
                    name="search"
                    size={22}
                    color={colors.gray}
                />

                <TextInput
                    placeholder="ابحث عن فاتورة..."
                    placeholderTextColor={
                        colors.gray
                    }
                    style={
                        categoryFoodStyles.searchInput
                    }
                />

            </View>


            {

                receipts.length === 0

                    ?

                    <View
                        style={
                            categoryFoodStyles.emptyCategoryContent
                        }
                    >

                        <MaterialIcons
                            name="event"
                            size={82}
                            color={colors.border}
                        />

                        <Text
                            style={
                                categoryFoodStyles.emptyCategoryTitle
                            }
                        >

                            ما عندك فواتير التزامات

                        </Text>

                    </View>

                    :

                    receipts.map(item => (

                        <View
                            key={item.invoice_id}
                            style={{
                                padding: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: '#EEE'
                            }}
                        >

                            <Text>

                                {item.merchant_name}

                            </Text>

                            <Text>

                                {item.total_price}
                                ريال

                            </Text>

                        </View>

                    ))

            }


            <EmptyBottomNavigation
                navigation={navigation}
            />

        </View>

    );

}