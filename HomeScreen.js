import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import EmptyBottomNavigation from './EmptyBottomNavigation';

import {
  homeWithInvoicesStyles,
  colors
} from './styles';

export default function HomeScreen({
  navigation
}) {

  const categories = [

    {
      icon: 'shopping-basket',
      name: 'المقاضي',
      amount: '0',
      iconColor: '#22C55E',
      bgColor: '#EAFBF0',
      screen: 'EmptyCategoryGroceries'
    },

    {
      icon: 'restaurant',
      name: 'مطاعم',
      amount: '0',
      iconColor: '#2563FF',
      bgColor: '#EEF4FF',
      screen: 'EmptyCategoryRestaurants'
    },

    {
      icon: 'shopping-bag',
      name: 'التسوق',
      amount: '0',
      iconColor: '#A020F0',
      bgColor: '#F6EAFF',
      screen: 'EmptyCategoryShopping'
    },

    {
      icon: 'directions-bus',
      name: 'النقل',
      amount: '0',
      iconColor: '#FFB000',
      bgColor: '#FFF6E7',
      screen: 'EmptyCategoryTransport'
    },

    {
      icon: 'favorite',
      name: 'الصحة',
      amount: '0',
      iconColor: '#FF4B5C',
      bgColor: '#FFECEF',
      screen: 'EmptyCategoryHealth'
    },

    {
      icon: 'event',
      name: 'الالتزامات',
      amount: '0',
      iconColor: '#12C6D7',
      bgColor: '#EAFBFC',
      screen: 'EmptyCategoryCommitments'
    },

    {
      icon: 'more-horiz',
      name: 'أخرى',
      amount: '0',
      iconColor: '#8C8FA1',
      bgColor: '#F3F3F6',
      screen: 'EmptyCategoryOther'
    }

  ];
  return (

    <>

      <ScrollView
        style={homeWithInvoicesStyles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120
        }}
      >

        {/* Header */}

        <View style={homeWithInvoicesStyles.header}>

          <TouchableOpacity>

            <MaterialIcons
              name="notifications"
              size={24}
              color={colors.blue}
            />

          </TouchableOpacity>

          <View>

            <Image
              source={{
                uri: 'asset:/image/fawterha.jpg'
              }}
              style={homeWithInvoicesStyles.logo}
            />

            <Text
              style={homeWithInvoicesStyles.helloText}
            >

              👋 أهلاً أريام

            </Text>

            <Text
              style={homeWithInvoicesStyles.subText}
            >

              ابدأ رحلتك بتنظيم فواتيرك

            </Text>

          </View>

        </View>



        {/* Scan Card */}

        <View
          style={homeWithInvoicesStyles.scanCard}
        >

          <Text
            style={homeWithInvoicesStyles.scanTitle}
          >

            جاهز تسجل فاتورتك؟

          </Text>

          <Text
            style={homeWithInvoicesStyles.scanSub}
          >

            اختر الطريقة المناسبة لك

          </Text>

          <View
            style={homeWithInvoicesStyles.scanRow}
          >

            <TouchableOpacity
              style={homeWithInvoicesStyles.uploadButton}
            >

              <MaterialIcons
                name="upload-file"
                size={28}
                color="white"
              />

              <Text
                style={homeWithInvoicesStyles.scanText}
              >

                رفع فاتورة

              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={homeWithInvoicesStyles.cameraButton}

              onPress={() =>
                navigation.navigate(
                  'CameraScreen'
                )
              }
            >

              <MaterialIcons
                name="qr-code-scanner"
                size={28}
                color="white"
              />

              <Text
                style={homeWithInvoicesStyles.scanText}
              >

                مسح فاتورة

              </Text>

            </TouchableOpacity>

          </View>


          <Text
            style={homeWithInvoicesStyles.supportText}
          >

            ندعم الصور و PDF واستخراج البيانات تلقائياً

          </Text>

        </View>




        {/* رحلة فواتيرك */}

        <View
          style={homeWithInvoicesStyles.journeyCard}
        >

          <Text
            style={homeWithInvoicesStyles.sectionTitle}
          >

            رحلة فواتيرك

          </Text>

          <Text
            style={homeWithInvoicesStyles.journeySub}
          >

            من إضافة الفاتورة إلى الاسترجاع

          </Text>

          <View
            style={homeWithInvoicesStyles.timelineContainer}
          >

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#4D8DFF'
                  }
                ]}
              >

                <MaterialIcons
                  name="photo-camera"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                إضافة الفاتورة

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تصوير أو رفع

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#35C98B'
                  }
                ]}
              >

                <MaterialIcons
                  name="psychology"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                تحليل

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                استخراج البيانات

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#A855F7'
                  }
                ]}
              >

                <MaterialIcons
                  name="folder-open"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                تصنيف

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تصنيف تلقائي

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#FBBF24'
                  }
                ]}
              >

                <MaterialIcons
                  name="hourglass-empty"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                استرجاع

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تنبيه بالموعد

              </Text>

            </View>

          </View>

          <Text
            style={homeWithInvoicesStyles.bottomJourneyText}
          >

            كل شيء سيتم تلقائيًا بعد إضافة أول فاتورة ✨

          </Text>

        </View>
        {/* توزيع المصروفات */}

        <View
          style={homeWithInvoicesStyles.chartCard}
        >

          <Text
            style={homeWithInvoicesStyles.sectionTitle}
          >

            توزيع المصروفات

          </Text>

          <View
            style={homeWithInvoicesStyles.categoriesGrid}
          >

            {[

              {
                icon: 'shopping-basket',
                name: 'المقاضي',
                amount: '0',
                iconColor: '#22C55E',
                bgColor: '#EAFBF0',
                screen: 'EmptyCategoryGroceries'
              },

              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '0',
                iconColor: '#2563FF',
                bgColor: '#EEF4FF',
                screen: 'EmptyCategoryRestaurants'
              },

              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '0',
                iconColor: '#A020F0',
                bgColor: '#F6EAFF',
                screen: 'EmptyCategoryShopping'
              },

              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '0',
                iconColor: '#FFB000',
                bgColor: '#FFF6E7',
                screen: 'EmptyCategoryTransport'
              },

              {
                icon: 'favorite',
                name: 'الصحة',
                amount: '0',
                iconColor: '#FF4B5C',
                bgColor: '#FFECEF',
                screen: 'EmptyCategoryHealth'
              },

              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '0',
                iconColor: '#12C6D7',
                bgColor: '#EAFBFC',
                screen: 'EmptyCategoryCommitments'
              },

              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '0',
                iconColor: '#8C8FA1',
                bgColor: '#F3F3F6',
                screen: 'EmptyCategoryOther'
              }

            ].map((item, index) => (

              <TouchableOpacity
                key={index}
                style={homeWithInvoicesStyles.categoryItem}

                onPress={() =>
                  navigation.navigate(
                    item.screen
                  )
                }
              >

                <View
                  style={[
                    homeWithInvoicesStyles.categoryCircle,
                    {
                      backgroundColor: item.bgColor
                    }
                  ]}
                >

                  <MaterialIcons
                    name={item.icon}
                    size={22}
                    color={item.iconColor}
                  />

                </View>

                <Text
                  style={homeWithInvoicesStyles.categoryName}
                >

                  {item.name}

                </Text>

                <Text
                  style={homeWithInvoicesStyles.categoryAmount}
                >

                  {item.amount} ريال

                </Text>

              </TouchableOpacity>

            ))}

          </View>



        </View>
        {/* Empty invoices */}

        <View
          style={homeWithInvoicesStyles.invoiceCard}
        >

          <View
            style={homeWithInvoicesStyles.emptyCard}
          >

            <View
              style={homeWithInvoicesStyles.emptyIcon}
            >

              <MaterialIcons
                name="receipt-long"
                size={40}
                color="#C9CED8"
              />

            </View>

            <Text
              style={homeWithInvoicesStyles.emptyTitle}
            >

              لا توجد فواتير

            </Text>

            <Text
              style={homeWithInvoicesStyles.emptySub}
            >

              ابدأ بإضافة أول فاتورة لرؤية بياناتك وتحليلاتك

            </Text>

          </View>

        </View>

      </ScrollView>


      <EmptyBottomNavigation
        navigation={navigation}
        activeScreen="Home"
      />

    </>

  );

}