import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { profileStyles, bottomNavStyles, COLORS } from './styles';

const MenuItem = ({ title, icon, danger, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[profileStyles.menuItem, danger && profileStyles.deleteItem]}
      onPress={onPress}
    >
      <MaterialIcons
        name="chevron-left"
        size={32}
        color={danger ? COLORS.DARK_RED : COLORS.BLACK}
      />

      <View style={profileStyles.menuRight}>
        <Text style={[profileStyles.menuText, danger && profileStyles.deleteText]}>
          {title}
        </Text>

        <MaterialIcons
          name={icon}
          size={30}
          color={danger ? COLORS.DARK_RED : COLORS.BLUE}
        />
      </View>
    </TouchableOpacity>
  );
};

const BottomTab = ({ icon, label, active }) => {
  return (
    <TouchableOpacity style={bottomNavStyles.tabItem} activeOpacity={0.7}>
      <MaterialIcons
        name={icon}
        size={22}
        color={active ? COLORS.BLUE : COLORS.GRAY}
      />
      <Text style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function ProfileSettingScreen({ navigation }) {
  return (
    <View style={profileStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.BG} />

      <View style={profileStyles.header}>
        <View style={profileStyles.statusFake}>
          <Text style={profileStyles.timeText}>9:41</Text>

          <View style={profileStyles.statusIcons}>
            <MaterialIcons name="signal-cellular-4-bar" size={15} color={COLORS.BLACK} />
            <MaterialIcons name="wifi" size={15} color={COLORS.BLACK} />
            <MaterialIcons name="battery-full" size={18} color={COLORS.BLACK} />
          </View>
        </View>

        <View style={profileStyles.titleRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation?.goBack?.()}
          >
            <MaterialIcons name="arrow-back" size={22} color={COLORS.BLUE} />
          </TouchableOpacity>

          <Text style={profileStyles.title}>إعدادات الملف الشخصي</Text>

          <View style={{ width: 22 }} />
        </View>

        <ImageBackground
          source={{ uri: 'asset:/image/background.png' }}
          style={profileStyles.waveImage}
          resizeMode="cover"
        />

        <View style={profileStyles.avatarWrapper}>
          <View style={profileStyles.avatarCircle}>
            <MaterialIcons name="person" size={72} color={COLORS.BLUE} />
          </View>
        </View>
      </View>

      <Text style={profileStyles.userName}>غيداء بندر</Text>

      <View style={profileStyles.menuContainer}>
        <MenuItem
          title="تعديل حسابي "
          icon="person"
          onPress={() => navigation.navigate('ProfileEdit')}
        />

        <MenuItem title="تغيير كلمة السر " icon="lock" />
        <MenuItem title="إدارة حد الإنفاق" icon="insert-chart" />
        <MenuItem title="حذف الحساب" icon="warning" danger />
      </View>

      <View style={bottomNavStyles.bottomNav}>
        <BottomTab icon="more-horiz" label="المزيد" active />
        <BottomTab icon="bar-chart" label="التقارير" />

        <TouchableOpacity style={bottomNavStyles.addButton} activeOpacity={0.8}>
          <MaterialIcons name="add" size={42} color={COLORS.WHITE} />
        </TouchableOpacity>

        <BottomTab icon="receipt-long" label="الفواتير" />
        <BottomTab icon="home" label="الرئيسية" />
      </View>
    </View>
  );
}