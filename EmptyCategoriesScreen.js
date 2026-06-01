import React, { useState, useEffect } from 'react';

import EmptyBottomNavigation from './EmptyBottomNavigation';

import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { categoriesStyles, profileStyles, colors } from './styles';

import { getReceipts } from './services/homeService';

const categories = [
  {
    id: 1,
    name: 'مقاضي',
    count: '0 فواتير ',
    icon: 'shopping-basket',
    color: colors.green,
    bg: colors.lightGreen,
  },

  {
    id: 2,
    name: 'المطاعم',
    count: '0 فواتير ',
    icon: 'restaurant',
    color: colors.blue,
    bg: colors.lightRestaurant,
  },

  {
    id: 3,
    name: 'التسوق',
    count: '0 فواتير ',
    icon: 'shopping-bag',
    color: colors.purple,
    bg: colors.lightPurple,
  },

  {
    id: 4,
    name: 'النقل',
    count: '0 فواتير ',
    icon: 'directions-bus',
    color: colors.yellow,
    bg: colors.lightYellow,
  },

  {
    id: 5,
    name: 'الصحة',
    count: '0 فواتير ',
    icon: 'favorite-border',
    color: colors.red,
    bg: colors.lightPink,
  },

  {
    id: 6,
    name: 'الالتزامات',
    count: '0 فواتير ',
    icon: 'event',
    color: colors.cyan,
    bg: colors.lightCyan,
  },

  {
    id: 7,
    name: 'أخرى',
    count: '0 فواتير ',
    icon: 'more-horiz',
    color: colors.gray,
    bg: colors.lightGray,
  },
];

export default function EmptyCategoriesScreen({ navigation }) {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getReceipts();

      setReceipts(data || []);
    } catch (error) {
      console.log('categories error:', error);
    }
  };

  const categoriesWithCount = categories.map(item => ({
    ...item,

    count:
      receipts.filter(
        receipt => receipt?.categories?.categorie_name === item.name,
      ).length + ' فواتير',
  }));

  const handleCategoryPress = item => {
    if (item.id === 1) navigation.navigate('EmptyCategoryGroceries');

    if (item.id === 2) navigation.navigate('EmptyCategoryRestaurants');

    if (item.id === 3) navigation.navigate('EmptyCategoryShopping');

    if (item.id === 4) navigation.navigate('EmptyCategoryTransport');

    if (item.id === 5) navigation.navigate('EmptyCategoryHealth');

    if (item.id === 6) navigation.navigate('EmptyCategoryCommitments');

    if (item.id === 7) navigation.navigate('EmptyCategoryOther');
  };

  return (
    <View style={categoriesStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={profileStyles.statusFake}>
        <Text style={profileStyles.timeText}>9:41</Text>

        <View style={profileStyles.statusIcons}>
          <MaterialIcons
            name="signal-cellular-4-bar"
            size={15}
            color={colors.black}
          />

          <MaterialIcons name="wifi" size={15} color={colors.black} />

          <MaterialIcons name="battery-full" size={18} color={colors.black} />
        </View>
      </View>

      <View style={categoriesStyles.headerRow}>
        <TouchableOpacity
          onPress={() => navigation?.goBack?.()}
          activeOpacity={0.7}
        >
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={categoriesStyles.title}>الفئات</Text>

        <View style={categoriesStyles.headerSpace} />
      </View>

      <View style={categoriesStyles.filterRow}>
        <TouchableOpacity
          style={categoriesStyles.filterAllInactive}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EmptyBills')}
        >
          <Text style={categoriesStyles.filterTextInactive}>الكل</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={categoriesStyles.filterCategoryActive}
          activeOpacity={0.8}
        >
          <Text style={categoriesStyles.filterTextActive}>الفئات</Text>
        </TouchableOpacity>
      </View>

      <View style={categoriesStyles.listContainer}>
        {categoriesWithCount.map(item => (
          <TouchableOpacity
            key={item.id}
            style={categoriesStyles.categoryItem}
            activeOpacity={0.75}
            onPress={() => handleCategoryPress(item)}
          >
            <MaterialIcons
              name="chevron-left"
              size={30}
              color={colors.border}
            />

            <View style={categoriesStyles.categoryInfo}>
              <Text style={categoriesStyles.categoryName}>{item.name}</Text>

              <Text style={categoriesStyles.categoryCount}>{item.count}</Text>
            </View>

            <View
              style={[
                categoriesStyles.categoryIconBox,
                {
                  backgroundColor: item.bg,
                },
              ]}
            >
              <MaterialIcons name={item.icon} size={28} color={item.color} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <EmptyBottomNavigation
        navigation={navigation}
        activeScreen="EmptyBills"
      />
    </View>
  );
}