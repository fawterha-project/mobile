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

export default function EmptyCategoryTransportScreen({
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
                    النقل
                </Text>

                <View style={categoryFoodStyles.headerSpace} />

            </View>

            <View
                style={[
                    categoryFoodStyles.summaryCard,
                    {
                        borderColor: '#FDE68A',
                        backgroundColor: '#FFF7E8',
                    },
                ]}
            >

                <View
                    style={categoryFoodStyles.summaryIconBox}
                >

                    <MaterialIcons
                        name="directions-bus"
                        size={42}
                        color={colors.yellow}
                    />

                </View>

                <View
                    style={categoryFoodStyles.summaryInfo}
                >

                    <Text style={categoryFoodStyles.summaryTitle}>
                        النقل
                    </Text>

                    <Text style={categoryFoodStyles.summaryCount}>
                        0 فواتير
                    </Text>

                    <Text
                        style={[
                            categoryFoodStyles.summaryAmount,
                            {
                                color: colors.yellow
                            },
                        ]}
                    >
                        0 ريال
                    </Text>

                    <Text style={categoryFoodStyles.summarySubText}>
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

            <View style={categoryFoodStyles.emptyCategoryContent}>

                <MaterialIcons
                    name="directions-bus"
                    size={82}
                    color={colors.border}
                    style={categoryFoodStyles.emptyCategoryIcon}
                />

                <Text style={categoryFoodStyles.emptyCategoryTitle}>
                    ما عندك فواتير نقل
                </Text>

                <Text style={categoryFoodStyles.emptyCategoryText}>
                    أول فاتورة نقل تضيفها بتظهر هنا ✨
                </Text>

            </View>

            <BottomNavigation
                navigation={navigation}
            />

        </View>

    );

}