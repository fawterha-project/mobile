import React, { useState, useEffect} from 'react';

import EmptyBottomNavigation from './EmptyBottomNavigation';
import { getReceipts } from './services/homeService';
import InvoiceSwipeActions from './InvoiceSwipeActions';
import { deleteReceipt } from './services/receiptService';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  billsStyles,
  bottomNavStyles,
  profileStyles,
  colors,
  notFoundStyles,
} from './styles';

const BottomTab = ({ icon, label, active, onPress }) => (
  <TouchableOpacity
    style={bottomNavStyles.tabItem}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <MaterialIcons
      name={icon}
      size={22}
      color={active ? colors.blue : colors.gray}
    />

    <Text
      style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default function EmptyBillsScreen({ navigation }) {
  const [receipts, setReceipts] = useState([]);
const [searchText, setSearchText] = useState('');

useEffect(() => {
  loadData(searchText);
}, [searchText]);

const loadData = async (search = '') => {
    try {
      console.log('Loading Search:', search);
      const data = await getReceipts(search);

      setReceipts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredReceipts = receipts;

const showNotFound =
  searchText.trim().length > 0 &&
  receipts.length === 0;

  const handleDelete = async invoice => {

  try {

    await deleteReceipt(
      invoice.invoice_id
    );

    loadData(searchText);

  } catch (error) {

    console.log(error);

  }

};

  return (
    <View style={billsStyles.container}>
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

      <View style={billsStyles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={billsStyles.title}>الفواتير</Text>

        <View style={{ width: 32 }} />
      </View>

      <View style={billsStyles.searchBox}>
        <MaterialIcons name="search" size={22} color={colors.gray} />

        <TextInput
          placeholder="ابحث عن فاتورة..."
          placeholderTextColor={colors.gray}
          style={billsStyles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={billsStyles.filterRow}>
        <TouchableOpacity style={billsStyles.filterBtnActive}>
          <Text style={billsStyles.filterTextActive}>الكل</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={billsStyles.filterBtn}
          activeOpacity={0.8}
          onPress={() => navigation?.push?.('EmptyCategories')}
        >
          <Text style={billsStyles.filterText}>الفئات</Text>
        </TouchableOpacity>
      </View>

      {showNotFound ? (
        <View style={notFoundStyles.emptySearchContent}>
          <Text style={notFoundStyles.emptySearchTitle}>
            ما لقينا أي فاتورة
          </Text>

          <Text style={notFoundStyles.emptySearchText}>
            جرب تبحث بكلمة ثانية ✨
          </Text>
        </View>
      ) : filteredReceipts.length === 0 ? (
        <View style={billsStyles.emptyContent}>
          <MaterialIcons name="receipt-long" size={82} color={colors.gray} />

          <Text style={billsStyles.emptyText}>
            أول فاتورة تضيفها بتظهر هنا ✨
          </Text>
        </View>
     ) : (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 120 }}
  >
  {filteredReceipts.map(item => (

  <InvoiceSwipeActions
    key={item.invoice_id}
    item={item}
    deleteOnly={true}
    onDelete={handleDelete}
  >

    <TouchableOpacity
      style={billsStyles.billItem}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate(
          'InvoiceDetails',
          {
            receipt: item,
          }
        )
      }
    >

      <View style={billsStyles.amountBox}>
        <Text style={billsStyles.amount}>
          {item.total_price}
        </Text>

        <Text style={billsStyles.currency}>
          ريال
        </Text>
      </View>

      <View style={billsStyles.billInfo}>
        <Text style={billsStyles.billName}>
          {item.merchant_name}
        </Text>

        <Text style={billsStyles.billDate}>
          {item.date}
        </Text>
      </View>

      <View style={billsStyles.billLogoCircle}>
        <MaterialIcons
          name="receipt-long"
          size={24}
          color={colors.blue}
        />
      </View>

    </TouchableOpacity>

  </InvoiceSwipeActions>

))}
  </ScrollView>
)}

      <EmptyBottomNavigation
        navigation={navigation}
        activeScreen="EmptyBills"
      />
    </View>
  );
}