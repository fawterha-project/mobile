import React, { useState } from 'react';
import More from './More';
import { View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { bottomNavStyles, colors } from './styles';

import AddBill from './AddBill';

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

export default function BottomNavigation({ navigation }) {
  const [showAddBill, setShowAddBill] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <View style={bottomNavStyles.bottomNav}>
        <BottomTab
          icon="more-horiz"
          label="المزيد"
          active={showMore}
          onPress={() => setShowMore(true)}
        />
        <BottomTab
          icon="bar-chart"
          label="التقارير"
          onPress={() => navigation.navigate('Reports')}
        />
        <TouchableOpacity
          style={bottomNavStyles.addButton}
          activeOpacity={0.8}
          onPress={() => setShowAddBill(true)}
        >
          <MaterialIcons name="add" size={42} color={colors.white} />
        </TouchableOpacity>
        <BottomTab
          icon="receipt"
          label="الفواتير"
          onPress={() => navigation.navigate('Bills')}
        />
        <BottomTab
          icon="home"
          label="الرئيسية"
          active={!showMore}
          onPress={() => navigation.navigate('HomeWithInvoicesScreen')}
        />
      </View>

      <AddBill
        visible={showAddBill}
        onClose={() => setShowAddBill(false)}
        navigation={navigation}
      />
      <More
        visible={showMore}
        onClose={() => setShowMore(false)}
        navigation={navigation}
      />
    </>
  );
}
