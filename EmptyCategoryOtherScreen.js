import React, { useEffect, useState } from 'react';
import EmptyBottomNavigation from './EmptyBottomNavigation';
import InvoiceSwipeActions from './InvoiceSwipeActions';
import { getReceipts } from './services/homeService';
import {
  updateInvoiceCategory,
  deleteReceipt,
} from './services/receiptService';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { categoryFoodStyles, profileStyles, colors } from './styles';

export default function EmptyCategoryOtherScreen({ navigation }) {
  const [receipts, setReceipts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getReceipts();

      const otherReceipts = data.filter(
        item => item?.categories?.categorie_name === 'أخرى',
      );

      setReceipts(otherReceipts);
    } catch (error) {
      console.log(error);
    }
  };
  const categoriesMap = {
    مقاضي: 'b4301466-4e5e-4cf6-b237-68d4224aaed0',

    مطاعم: '98be0b0f-bac7-4538-acb3-7e8435cf0c7a',

    التسوق: 'cdc3f0de-ffac-41d9-8b45-df5c8d310462',

    النقل: 'f562b33f-a945-44a9-aab7-88d4024bbb42',

    الصحة: '4d4a1594-25da-4e2f-bec7-6abeccca9756',

    الالتزامات: 'bf5a7c93-bf60-4e45-9167-f1ac86ae2869',

    أخرى: '02c80bae-7876-4030-894b-41745bf2c12e',
  };

  const handleChangeCategory = async (invoice, categoryName) => {
    try {
      const categoryId = categoriesMap[categoryName];

      await updateInvoiceCategory(invoice.invoice_id, categoryId);

      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async invoice => {
    try {
      await deleteReceipt(invoice.invoice_id);

      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  const totalAmount = receipts.reduce(
    (sum, item) => sum + (item.total_price || 0),

    0,
  );
  const filteredReceipts = receipts.filter(item =>
    item.merchant_name?.toLowerCase().includes(searchText.trim().toLowerCase()),
  );

  return (
    <View style={categoryFoodStyles.container}>
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

      <View style={categoryFoodStyles.headerRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation?.goBack?.()}
        >
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={categoryFoodStyles.title}>أخرى</Text>

        <View style={categoryFoodStyles.headerSpace} />
      </View>

      <View
        style={[
          categoryFoodStyles.summaryCard,
          {
            borderColor: colors.border,
            backgroundColor: colors.lightGray,
          },
        ]}
      >
        <View style={categoryFoodStyles.summaryIconBox}>
          <MaterialIcons name="more-horiz" size={42} color={colors.gray} />
        </View>

        <View style={categoryFoodStyles.summaryInfo}>
          <Text style={categoryFoodStyles.summaryTitle}>أخرى</Text>

          <Text style={categoryFoodStyles.summaryCount}>
            {receipts.length} فواتير
          </Text>

          <Text
            style={[
              categoryFoodStyles.summaryAmount,
              {
                color: colors.gray,
              },
            ]}
          >
            {totalAmount} ريال
          </Text>

          <Text style={categoryFoodStyles.summarySubText}>إجمالي المبلغ</Text>
        </View>
      </View>

      <View style={categoryFoodStyles.searchBox}>
        <MaterialIcons name="search" size={22} color={colors.gray} />

        <TextInput
          placeholder="ابحث عن فاتورة..."
          placeholderTextColor={colors.gray}
          style={categoryFoodStyles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {filteredReceipts.length === 0 ? (
        <View style={categoryFoodStyles.emptyCategoryContent}>
          <MaterialIcons name="more-horiz" size={82} color={colors.border} />

          <Text style={categoryFoodStyles.emptyCategoryTitle}>
            ما عندك فواتير أخرى
          </Text>
        </View>
      ) : (
        filteredReceipts.map(item => (
          <InvoiceSwipeActions
            key={item.invoice_id}
            item={item}
            onDelete={handleDelete}
            onChangeCategory={handleChangeCategory}
          >
            <TouchableOpacity
              style={categoryFoodStyles.billItem}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('InvoiceDetails', {
                  receipt: item,
                })
              }
            >
              <View style={categoryFoodStyles.amountBox}>
                <Text style={categoryFoodStyles.amount}>
                  {item.total_price}
                </Text>

                <Text style={categoryFoodStyles.currency}>ريال</Text>
              </View>

              <View style={categoryFoodStyles.billInfo}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={categoryFoodStyles.billName}
                >
                  {item.merchant_name}
                </Text>

                <Text style={categoryFoodStyles.billDate}>
                  {item.issued_at?.split('T')[0]}
                </Text>
              </View>

              <View
                style={[
                  categoryFoodStyles.billLogoCircle,
                  {
                    backgroundColor: colors.lightGray,
                  },
                ]}
              >
                <MaterialIcons
                  name="more-horiz"
                  size={25}
                  color={colors.gray}
                />
              </View>
            </TouchableOpacity>
          </InvoiceSwipeActions>
        ))
      )}

      <EmptyBottomNavigation navigation={navigation} />
    </View>
  );
}