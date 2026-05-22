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
  billsStyles,
  profileStyles,
  colors,
  notFoundStyles,
} from './styles';

const bills = [
  {
    id: 1,
    name: 'أتش اند أم',
    date: 'اليوم - 10:30 ص',
    amount: '320',
    image: { uri: 'asset:/image/H&M.png' },
  },

  {
    id: 2,
    name: 'اكسترا',
    date: 'أمس - 10:30 ص',
    amount: '230',
    image: { uri: 'asset:/image/extra.png' },
  },

  {
    id: 3,
    name: 'نون للتسوق',
    date: '12 مايو - 1:20 م',
    amount: '120',
    image: { uri: 'asset:/image/noon.png' },
  },
];

export default function BillsScreen({
  navigation,
}) {

  const [searchText, setSearchText] =
    useState('');

  const filteredBills =
    bills.filter(item =>
      item.name.includes(searchText)
    );

  const showNotFound =
    searchText.trim().length > 0 &&
    filteredBills.length === 0;

  return (

    <View style={billsStyles.container}>

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


      <View style={billsStyles.headerRow}>

        <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <MaterialIcons
            name="chevron-left"
            size={32}
            color={colors.black}
          />
        </TouchableOpacity>

        <Text style={billsStyles.title}>
          الفواتير
        </Text>

        <View style={{ width: 32 }} />

      </View>


      <View style={billsStyles.searchBox}>

        <MaterialIcons
          name="search"
          size={22}
          color={colors.gray}
        />

        <TextInput
          placeholder="ابحث عن فاتورة..."
          placeholderTextColor={colors.gray}
          style={billsStyles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />

      </View>


      <View style={billsStyles.filterRow}>

        <TouchableOpacity
          style={billsStyles.filterBtnActive}
        >
          <Text
            style={billsStyles.filterTextActive}
          >
            الكل
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={billsStyles.filterBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.push(
              'CategoriesScreen'
            )
          }
        >
          <Text
            style={billsStyles.filterText}
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
            جربي تبحث بكلمة ثانية أو تأكد من كتابة الاسم صح ✨
          </Text>

        </View>

      ) : (

        <View
          style={billsStyles.listContainer}
        >

          {filteredBills.map(item => (

            <TouchableOpacity
              key={item.id}
              style={billsStyles.billItem}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(
                  'InvoiceDetails'
                )
              }
            >

              <Text
                style={billsStyles.amount}
              >

                {item.amount}

                <Text
                  style={billsStyles.currency}
                >
                  ريال
                </Text>

              </Text>


              <View
                style={billsStyles.billInfo}
              >

                <Text
                  style={billsStyles.billName}
                >
                  {item.name}
                </Text>

                <Text
                  style={billsStyles.billDate}
                >
                  {item.date}
                </Text>

              </View>


              <Image
                source={item.image}
                style={
                  billsStyles.billLogo
                }
                resizeMode="contain"
              />

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