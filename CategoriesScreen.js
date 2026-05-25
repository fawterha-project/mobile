import React, { useState } from 'react';
import BottomNavigation from './BottomNavigation';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  categoriesStyles,
  bottomNavStyles,
  profileStyles,
  colors,
  notFoundStyles,
} from './styles';

const categories = [
  {
    id: 1,
    name: 'مقاضي',
    count: ' 2 فواتير ',
    icon: 'shopping-basket',
    color: '#22C55E',
    bg: '#EAFBF0',
  },

  {
    id: 2,
    name: 'المطاعم',
    count: '2 فواتير ',
    icon: 'restaurant',
    color: '#2563EB',
    bg: '#EEF4FF',
  },

  {
    id: 3,
    name: 'التسوق',
    count: '2 فواتير ',
    icon: 'shopping-bag',
    color: '#8B5CF6',
    bg: '#F5EEFF',
  },

  {
    id: 4,
    name: 'النقل',
    count: '1 فاتورة ',
    icon: 'directions-bus',
    color: '#F59E0B',
    bg: '#FFF7E8',
  },

  {
    id: 5,
    name: 'الصحة',
    count: '1 فاتورة ',
    icon: 'favorite-border',
    color: '#F43F5E',
    bg: '#FFF1F2',
  },

  {
    id: 6,
    name: 'الالتزامات',
    count: '2 فواتير ',
    icon: 'event',
    color: '#06B6D4',
    bg: '#ECFEFF',
  },

  {
    id: 7,
    name: 'أخرى',
    count: '3 فواتير ',
    icon: 'more-horiz',
    color: '#9CA3AF',
    bg: '#F3F4F6',
  },
];

const BottomTab = ({
  icon,
  label,
  active,
  onPress,
}) => (

  <TouchableOpacity
    style={bottomNavStyles.tabItem}
    activeOpacity={0.7}
    onPress={onPress}
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

export default function CategoriesScreen({
  navigation,
}) {

  const [searchText, setSearchText] =
    useState('');

  const filteredCategories =
    categories.filter(item =>
      item.name.includes(
        searchText.trim()
      )
    );

  const showNotFound =
    searchText.trim().length > 0 &&
    filteredCategories.length === 0;

  const handleCategoryPress =
    item => {

      if (item.id === 1)
        navigation.navigate(
          'CategoryGroceries'
        );

      if (item.id === 2)
        navigation.navigate(
          'CategoryRestaurants'
        );

      if (item.id === 3)
        navigation.navigate(
          'CategoryShopping'
        );

      if (item.id === 4)
        navigation.navigate(
          'CategoryTransport'
        );

      if (item.id === 5)
        navigation.navigate(
          'CategoryHealth'
        );

      if (item.id === 6)
        navigation.navigate(
          'CategoryCommitments'
        );

      if (item.id === 7)
        navigation.navigate(
          'CategoryOther'
        );
    };

  return (

    <View
      style={categoriesStyles.container}
    >

      <StatusBar
        barStyle="dark-content"
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

      <View
        style={categoriesStyles.headerRow}
      >

        <TouchableOpacity
          onPress={() =>
            navigation?.goBack?.()
          }
          activeOpacity={0.7}
        >

          <MaterialIcons
            name="chevron-left"
            size={32}
            color={colors.black}
          />

        </TouchableOpacity>

        <Text
          style={categoriesStyles.title}
        >
          الفئات
        </Text>

        <View
          style={
            categoriesStyles.headerSpace
          }
        />

      </View>


      <View
        style={categoriesStyles.searchBox}
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
            categoriesStyles.searchInput
          }
          value={searchText}
          onChangeText={
            setSearchText
          }
        />

      </View>


      <View
        style={categoriesStyles.filterRow}
      >

        <TouchableOpacity
          style={
            categoriesStyles.filterAllInactive
          }
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'BillsScreen'
            )
          }
        >

          <Text
            style={
              categoriesStyles.filterTextInactive
            }
          >
            الكل
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={
            categoriesStyles.filterCategoryActive
          }
          activeOpacity={0.8}
        >

          <Text
            style={
              categoriesStyles.filterTextActive
            }
          >
            الفئات
          </Text>

        </TouchableOpacity>

      </View>


      {showNotFound ? (

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
            جرب تبحث بكلمة ثانية أو تأكد من كتابة الاسم صح ✨
          </Text>

        </View>

      ) : (

        <View
          style={
            categoriesStyles.listContainer
          }
        >

          {filteredCategories.map(
            item => (

              <TouchableOpacity
                key={item.id}
                style={
                  categoriesStyles.categoryItem
                }
                activeOpacity={0.75}
                onPress={() =>
                  handleCategoryPress(item)
                }
              >

                <MaterialIcons
                  name="chevron-left"
                  size={30}
                  color={colors.lightGray}
                />

                <View
                  style={
                    categoriesStyles.categoryInfo
                  }
                >

                  <Text
                    style={
                      categoriesStyles.categoryName
                    }
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={
                      categoriesStyles.categoryCount
                    }
                  >
                    {item.count}
                  </Text>

                </View>


                <View
                  style={[
                    categoriesStyles.categoryIconBox,
                    {
                      backgroundColor:
                        item.bg
                    },
                  ]}
                >

                  <MaterialIcons
                    name={item.icon}
                    size={28}
                    color={item.color}
                  />

                </View>

              </TouchableOpacity>

            ))}

        </View>

      )}

      <BottomNavigation
        navigation={navigation}
        activeScreen="Bills"
      />

    </View>

  );

}