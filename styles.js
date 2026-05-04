import { StyleSheet } from 'react-native';

export const colors = {
  blue: '#0052C9',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#9CA3AF',
};

export const introStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  mainImage: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    width: 140,
    height: 260,
    zIndex: 2,
  },

  waveImage: {
    position: 'absolute',
    top: 214,
    left: 0,
    right: 0,
    width: '100%',
    height: 130,
    zIndex: 1,
  },

  logo: {
    position: 'absolute',
    top: 390,
    alignSelf: 'center',
    width: 220,
    height: 100,
  },

  title: {
    position: 'absolute',
    top: 560,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 604,
    alignSelf: 'center',
    width: 260,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'center',
  },

  button: {
    position: 'absolute',
    top: 690,
    alignSelf: 'center',
    width: 200,
    height: 48,
    backgroundColor: colors.blue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
  },
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
  },

  title: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  illustration: {
    position: 'absolute',
    top: 125,
    right: 30,
    width: 80,
    height: 80,
  },

  welcome: {
    position: 'absolute',
    top: 132,
    right: 110,
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    textAlign: 'right',
  },

  subtitle: {
    position: 'absolute',
    top: 170,
    right: 110,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'right',
  },

  emailLabel: {
    position: 'absolute',
    top: 260,
    right: 54,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  emailInput: {
    position: 'absolute',
    top: 295,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
  },

  passwordLabel: {
    position: 'absolute',
    top: 360,
    right: 54,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  passwordBox: {
    position: 'absolute',
    top: 395,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  passwordInput: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
  },

  forgotText: {
    position: 'absolute',
    top: 445,
    left: 58,
  },

  forgotTextValue: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  rememberBox: {
    position: 'absolute',
    top: 445,
    right: 54,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rememberText: {
    fontSize: 11,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    marginRight: 5,
  },

  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxActive: {
    backgroundColor: colors.blue,
  },

  loginButton: {
    position: 'absolute',
    top: 520,
    alignSelf: 'center',
    width: 180,
    height: 44,
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },

  signupText: {
    position: 'absolute',
    top: 570,
    alignSelf: 'center',
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  signupLink: {
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
  },
});

export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
  },

  title: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  illustration: {
    position: 'absolute',
    top: 125,
    right: 30,
    width: 80,
    height: 80,
  },

  welcome: {
    position: 'absolute',
    top: 132,
    right: 110,
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    textAlign: 'right',
  },

  subtitle: {
    position: 'absolute',
    top: 170,
    right: 110,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'right',
  },

  nameLabel: {
    position: 'absolute',
    top: 225,
    right: 45,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  nameInput: {
    position: 'absolute',
    top: 255,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
  },

  emailLabel: {
    position: 'absolute',
    top: 322,
    right: 45,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  emailInput: {
    position: 'absolute',
    top: 352,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
  },

  passwordLabel: {
    position: 'absolute',
    top: 424,
    right: 45,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  passwordBox: {
    position: 'absolute',
    top: 454,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  confirmPasswordLabel: {
    position: 'absolute',
    top: 526,
    right: 45,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  confirmPasswordBox: {
    position: 'absolute',
    top: 556,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  passwordInput: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
  },

  termsBox: {
    position: 'absolute',
    top: 620,
    right: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

  termsText: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Tajawal-Bold',
    marginRight: 5,
  },

  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxActive: {
    backgroundColor: colors.blue,
  },

  signupButton: {
    position: 'absolute',
    top: 690,
    alignSelf: 'center',
    width: 168,
    height: 44,
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },

  loginText: {
    position: 'absolute',
    top: 748,
    alignSelf: 'center',
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  loginLink: {
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
  },
});