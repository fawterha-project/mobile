import React, { useState } from 'react';
import BottomNavigation from './BottomNavigation';

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
  bottomNavStyles,
  profileStyles,
  colors,
  notFoundStyles,
} from './styles';

const otherBills = [
  {
    id: 1,
    name: 'خدمات رقمية',
    date: 'اليوم - 4:20 م',
    amount: '80',
    image: { uri: 'asset:/image/other1.png' },
  },

  {
    id: 2,
    name: 'اشتراك تطبيق',
    date: 'أمس - 9:15 ص',
    amount: '45',
    image: { uri: 'asset:/image/other2.png' },
  },

  {
    id: 3,
    name: 'رسوم أخرى',
    date: 'قبل يومين - 1:00 م',
    amount: '120',
    image: { uri: 'asset:/image/other3.png' },
  },
];

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

export default function CategoryOtherScreen({
  navigation,
}) {

  const [searchText, setSearchText] =
    useState('');

  const filteredBills =
    otherBills.filter(item =>
      item.name.includes(
        searchText.trim()
      )
    );

  const showNotFound =
    searchText.trim().length > 0 &&
    filteredBills.length === 0;

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
          أخرى
        </Text>

        <View
          style={categoryFoodStyles.headerSpace}
        />

      </View>


      {!showNotFound && (

        <View
          style={[
            categoryFoodStyles.summaryCard,
            {
              borderColor: '#E5E7EB',
              backgroundColor: '#F9FAFB',
            },
          ]}
        >

          <View
            style={
              categoryFoodStyles.summaryIconBox
            }
          >

            <MaterialIcons
              name="more-horiz"
              size={42}
              color="#9CA3AF"
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
              أخرى
            </Text>

            <Text
              style={
                categoryFoodStyles.summaryCount
              }
            >
              3 فواتير </Text>

            <Text
              style={[
                categoryFoodStyles.summaryAmount,
                {
                  color: '#6B7280'
                }
              ]}
            >
              245 ريال
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

      )}


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
          value={searchText}
          onChangeText={setSearchText}
        />

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
            categoryFoodStyles.listContainer
          }
        >

          {filteredBills.map(item => (

            <View
              key={item.id}
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
                resizeMode="contain"
              />

            </View>

          ))}

        </View>

      )}

      <BottomNavigation
        navigation={navigation}
      />

    </View>

  );
}