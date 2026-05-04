import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, notificationsStyles } from './styles';

const todayNotifications = [
  { id: 1, text: 'تم اضافة فاتورة ضريبية مبسطة', dot: true, dark: true },
  { id: 2, text: 'تم اضافة فاتورة ضريبية مبسطة', dot: true, dark: true },
  { id: 3, text: 'تقريرك الاسبوعي جاهز', dot: false, dark: true },
];

const weekNotifications = [
  { id: 4, text: 'تقريرك الاسبوعي جاهز', dot: false, dark: false },
  { id: 5, text: 'تم اضافة فاتورة ضريبية مبسطة', dot: true, dark: false },
  { id: 6, text: 'تجاوزت حدود ميزانيتك الشهرية', dot: false, dark: false },
];

const NotificationItem = ({ item }) => {
  return (
    <View
      style={[
        notificationsStyles.notificationItem,
        item.dark
          ? notificationsStyles.notificationItemDark
          : notificationsStyles.notificationItemLight,
      ]}
    >
      {item.dot ? <View style={notificationsStyles.yellowDot} /> : <View style={notificationsStyles.dotPlaceholder} />}
      <Text style={notificationsStyles.notificationText}>{item.text}</Text>
    </View>
  );
};

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={notificationsStyles.container}>
     <View style={notificationsStyles.headerRow}>
  <TouchableOpacity
    style={notificationsStyles.backButton}
    onPress={() => navigation?.goBack?.()}
  >
    <MaterialIcons name="arrow-back" size={30} color={colors.purple} />
  </TouchableOpacity>

  <View style={notificationsStyles.avatarCircle}>
    <Text style={notificationsStyles.avatarText}>A</Text>
  </View>
</View>

<Text style={notificationsStyles.title}>الإشعارات</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={notificationsStyles.scrollContent}
      >
        <Text style={notificationsStyles.sectionTitle}>اليوم</Text>

        {todayNotifications.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}

        <Text style={notificationsStyles.sectionTitleWeek}>هذا الاسبوع</Text>

        {weekNotifications.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;