import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { successfulSignUpStyles, colors } from './styles';

const SuccessfulSignUpScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(
'HomeScreen'
);//هنا احط الشاشه الريسيه الفاضيه
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={successfulSignUpStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <Image
        source={{
              uri: 'asset:/image/success_signup.png'
            }}
        style={successfulSignUpStyles.image}
        resizeMode="contain"
      />

      <Text style={successfulSignUpStyles.title}>أكدنا حسابك 🎉</Text>

      <Text style={successfulSignUpStyles.description}>
        هلا فيك! حسابك صار جاهز </Text>
    </View>
  );
};

export default SuccessfulSignUpScreen;