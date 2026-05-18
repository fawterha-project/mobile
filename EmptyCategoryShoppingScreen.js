import React from 'react';
import BottomNavigation from './BottomNavigation';

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

const BottomTab = ({ icon, label, active }) => (
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

export default function EmptyCategoryShoppingScreen({
    navigation,
}) {

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
                    التسوق
                </Text>

                <View style={categoryFoodStyles.headerSpace} />

            </View>

            <View
                style={[
                    categoryFoodStyles.summaryCard,
                    {
                        borderColor: '#E9D5FF',
                        backgroundColor: '#F5EEFF',
                    },
                ]}
            >

                <View
                    style={categoryFoodStyles.summaryIconBox}
                >

                    <MaterialIcons
                        name="shopping-bag"
                        size={42}
                        color={colors.purple}
                    />

                </View>

                <View
                    style={categoryFoodStyles.summaryInfo}
                >

                    <Text
                        style={categoryFoodStyles.summaryTitle}
                    >
                        التسوق
                    </Text>

                    <Text
                        style={categoryFoodStyles.summaryCount}
                    >
                        0 فواتير
                    </Text>

                    <Text
                        style={[
                            categoryFoodStyles.summaryAmount,
                            {
                                color: colors.purple
                            },
                        ]}
                    >
                        0 ريال
                    </Text>

                    <Text
                        style={categoryFoodStyles.summarySubText}
                    >
                        إجمالي المبلغ
                    </Text>

                </View>

            </View>

            <View style={categoryFoodStyles.searchBox}>

                <MaterialIcons
                    name="search"
                    size={22}
                    color={colors.gray}
                />

                <TextInput
                    placeholder="ابحث عن فاتورة..."
                    placeholderTextColor={colors.gray}
                    style={categoryFoodStyles.searchInput}
                />

            </View>

            <View
                style={categoryFoodStyles.emptyCategoryContent}
            >

                <MaterialIcons
                    name="shopping-bag"
                    size={82}
                    color={colors.border}
                    style={categoryFoodStyles.emptyCategoryIcon}
                />

                <Text
                    style={categoryFoodStyles.emptyCategoryTitle}
                >
                    ما عندك فواتير تسوق
                </Text>

                <Text
                    style={categoryFoodStyles.emptyCategoryText}
                >
                    أول فاتورة تسوق تضيفها بتظهر هنا ✨
                </Text>

            </View>

            <BottomNavigation
                navigation={navigation}
            />

        </View>

    );

}