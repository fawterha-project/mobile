import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { commonStyles, categoriesStyles, colors } from './styles';

const categoriesData = [
  {
    id: '1',
    title: 'الفواتير الحكومية',
    count: '12 فاتورة حالية',
    iconType: 'MaterialCommunityIcons',
    iconName: 'bank-outline',
    favorite: false,
    screen: 'GovernmentBillsScreen',
  },
  {
    id: '2',
    title: 'المواد الغذائية',
    count: '12 فاتورة حالية',
    iconType: 'MaterialCommunityIcons',
    iconName: 'silverware-fork-knife',
    favorite: false,
    screen: 'FoodBillsScreen',
  },
  {
    id: '3',
    title: 'المشتريات',
    count: '12 فاتورة حالية',
    iconType: 'MaterialCommunityIcons',
    iconName: 'shopping-outline',
    favorite: false,
    screen: 'ShoppingScreen',
  },
  {
    id: '4',
    title: 'الاشتراكات',
    count: '12 فاتورة حالية',
    iconType: 'MaterialCommunityIcons',
    iconName: 'credit-card-outline',
    favorite: true,
    screen: 'SubscriptionsScreen',
  },
  {
    id: '5',
    title: 'الفواتير الصحية',
    count: '12 فاتورة حالية',
    iconType: 'MaterialCommunityIcons',
    iconName: 'medical-bag',
    favorite: false,
    screen: 'HealthBillsScreen',
  },
  {
    id: '6',
    title: 'السكن والإيجار',
    count: '12 فاتورة حالية',
    iconType: 'FontAwesome5',
    iconName: 'home',
    favorite: false,
    screen: 'HousingScreen',
  },
];

const renderCategoryIcon = (item) => {
  if (item.iconType === 'FontAwesome5') {
    return (
      <FontAwesome5
        name={item.iconName}
        size={34}
        color={colors.purple}
        solid
      />
    );
  }

  return (
    <MaterialCommunityIcons
      name={item.iconName}
      size={38}
      color={colors.purple}
    />
  );
};

export default function CategoriesScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('الكل');
  const [favorites, setFavorites] = useState({});

  const handleCategoryPress = (item) => {
    if (navigation?.navigate && item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView style={commonStyles.safeAreaLight}>
      <View style={categoriesStyles.container}>
        <View style={categoriesStyles.headerRow}>
          <TouchableOpacity
            style={categoriesStyles.backButton}
            onPress={() => navigation?.goBack?.()}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={24} color={colors.purple} />
          </TouchableOpacity>

          <TouchableOpacity
            style={categoriesStyles.avatarButton}
            onPress={() => navigation?.navigate?.('ProfileScreen')}
            activeOpacity={0.8}
          >
            <View style={categoriesStyles.avatarCircle}>
              <Text style={categoriesStyles.avatarText}>A</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="ابحث عن فاتورة أو تصنيف "
          placeholderTextColor="#9A95A2"
          style={categoriesStyles.searchInput}
        />

        <View style={categoriesStyles.tabsRow}>
          {['غير مصنفة', 'مفضلة', 'هذه السنة', 'هذا الشهر ', 'الكل'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={
                activeTab === tab
                  ? categoriesStyles.activeTab
                  : categoriesStyles.inactiveTab
              }
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.8}
            >
              <Text
                style={
                  activeTab === tab
                    ? categoriesStyles.activeTabText
                    : categoriesStyles.inactiveTabText
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={categoriesStyles.grid}>
          {categoriesData.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handleCategoryPress(item)}
              style={categoriesStyles.card}
            >
              {({ pressed }) => (
                <>
                  <View
                    style={[
                      categoriesStyles.cardTop,
                      pressed && categoriesStyles.pressedCardTop,
                    ]}
                  >
                    <TouchableOpacity
                      style={categoriesStyles.favoriteButton}
                      onPress={() => toggleFavorite(item.id)}
                      activeOpacity={0.8}
                    >
                      <Ionicons
                        name={favorites[item.id] ? 'heart' : 'heart-outline'}
                        size={18}
                        color={colors.purple}
                      />
                    </TouchableOpacity>

                    {renderCategoryIcon(item)}

                    <Text style={categoriesStyles.cardTitle}>
                      {item.title}
                    </Text>
                  </View>

                  <View style={categoriesStyles.cardBottom}>
                    <Text style={categoriesStyles.cardBottomText}>
                      {item.count}
                    </Text>
                  </View>
                </>
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}