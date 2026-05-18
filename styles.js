import { StyleSheet } from 'react-native';

export const colors = {
  blue: '#0052C9',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#9CA3AF',
  border: '#D9E2EF',
  red: '#DC2626',
  lightBlue: '#F4F7FF',
  lightBackground: '#F9FAFB',
  navShadow: '#000000',
  overlay: 'rgba(0,0,0,0.45)',
  lightGray: '#F3F4F6',
  lightRed: '#FEE2E2',
  green: '#22C55E',
  yellow: '#FACC15',
  purple: '#8B5CF6',
  cyan: '#12C6D7',
};

export const splashStyles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  splashContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashLogo: {
    width: 220,
    height: 220,
  },

  splashSubText: {
    marginTop: 12,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
    color: colors.black,
  },
});

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
    left: 40,
  },

  forgotTextValue: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  rememberBox: {
    position: 'absolute',
    top: 445,
    right: 40,
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
  loginButtonDisabled: {
    opacity: 0.5,
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

export const forgotPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  waveImage: {
    position: 'absolute',
    top: 135,
    left: 0,
    right: 0,
    width: '100%',
    height: 120,
  },

  mainImage: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: 250,
    height: 250,
    zIndex: 2,
  },

  title: {
    position: 'absolute',
    top: 275,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 315,
    alignSelf: 'center',
    width: 260,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
  },

  emailLabel: {
    position: 'absolute',
    top: 385,
    right: 45,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  emailInput: {
    position: 'absolute',
    top: 415,
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

  resendRow: {
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  codeText: {
    fontSize: 13,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  resendLink: {
    fontSize: 13,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  verifyButton: {
    position: 'absolute',
    top: 535,
    alignSelf: 'center',
    width: 220,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },

  orText: {
    position: 'absolute',
    top: 605,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  smsText: {
    position: 'absolute',
    top: 630,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  phoneIcon: {
    position: 'absolute',
    top: 662,
    alignSelf: 'center',
  },

  rememberText: {
    position: 'absolute',
    top: 755,
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  loginLink: {
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
  },
});

export const forgotPasswordPhoneStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  waveImage: {
    position: 'absolute',
    top: 135,
    left: 0,
    right: 0,
    width: '100%',
    height: 120,
  },

  mainImage: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: 250,
    height: 250,
    zIndex: 2,
  },

  title: {
    position: 'absolute',
    top: 275,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 315,
    alignSelf: 'center',
    width: 260,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 24,
  },

  phoneLabel: {
    position: 'absolute',
    top: 385,
    right: 45,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  phoneBox: {
    position: 'absolute',
    top: 415,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },

  phoneInput: {
    flex: 1,
    height: 45,
    textAlign: 'left',
    fontFamily: 'Tajawal-Regular',
  },

  countryCode: {
    fontSize: 13,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    marginLeft: 8,
  },

  resendRow: {
    position: 'absolute',
    top: 485,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  codeText: {
    fontSize: 13,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  resendLink: {
    fontSize: 13,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
    marginRight: 5,
  },

  verifyButton: {
    position: 'absolute',
    top: 535,
    alignSelf: 'center',
    width: 220,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyButtonDisabled: {
    opacity: 0.5,
  },

  verifyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },

  orText: {
    position: 'absolute',
    top: 605,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  smsText: {
    position: 'absolute',
    top: 630,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  phoneIcon: {
    position: 'absolute',
    top: 662,
    alignSelf: 'center',
  },

  rememberText: {
    position: 'absolute',
    top: 755,
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  loginLink: {
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
    textDecorationLine: 'underline',
  },
});

export const verifyCodeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    top: 55,
    left: 20,
  },

  title: {
    position: 'absolute',
    top: 58,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  label: {
    position: 'absolute',
    top: 290,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  codeRow: {
    position: 'absolute',
    top: 365,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 25,
  },

  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeBoxActive: {
    borderColor: colors.blue,
  },

  codeText: {
    fontSize: 24,
    color: colors.blue,
    fontFamily: 'Tajawal-Bold',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },

  resendRow: {
    position: 'absolute',
    top: 455,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  resendText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  resendLink: {
    fontSize: 14,
    color: colors.gray,
    textDecorationLine: 'underline',
    fontFamily: 'Tajawal-Regular',
    marginRight: 5,
  },

  verifyButton: {
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    width: 200,
    height: 55,
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyButtonDisabled: {
    opacity: 0.5,
  },

  verifyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },
});

export const verifyEmailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    top: 55,
    left: 20,
  },

  title: {
    position: 'absolute',
    top: 58,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  label: {
    position: 'absolute',
    top: 290,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  codeRow: {
    position: 'absolute',
    top: 365,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 25,
  },

  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#D9E2EF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  codeBoxActive: {
    borderColor: colors.blue,
  },

  codeText: {
    fontSize: 24,
    color: colors.blue,
    fontFamily: 'Tajawal-Bold',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },

  resendRow: {
    position: 'absolute',
    top: 455,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  resendText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  resendLink: {
    fontSize: 14,
    color: colors.gray,
    textDecorationLine: 'underline',
    fontFamily: 'Tajawal-Regular',
    marginRight: 5,
  },

  verifyButton: {
    position: 'absolute',
    top: 600,
    alignSelf: 'center',
    width: 200,
    height: 55,
    backgroundColor: colors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  verifyButtonDisabled: {
    opacity: 0.5,
  },

  verifyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },
});

export const successfulSignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },

  image: {
    position: 'absolute',
    top: 210,
    alignSelf: 'center',
    width: 280,
    height: 280,
  },

  title: {
    position: 'absolute',
    top: 470,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
  },

  description: {
    position: 'absolute',
    top: 510,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
  },
});

export const resetPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    top: 55,
    left: 20,
    zIndex: 5,
  },

  title: {
    position: 'absolute',
    top: 58,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
    zIndex: 5,
  },

  waveImage: {
    position: 'absolute',
    top: 135,
    left: 0,
    right: 0,
    width: '100%',
    height: 120,
  },

  image: {
    position: 'absolute',
    top: 70,
    alignSelf: 'center',
    width: 260,
    height: 260,
    zIndex: 2,
  },

  description: {
    position: 'absolute',
    top: 275,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  passwordLabel: {
    position: 'absolute',
    top: 340,
    right: 45,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  passwordBox: {
    position: 'absolute',
    top: 370,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },

  confirmPasswordLabel: {
    position: 'absolute',
    top: 440,
    right: 45,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  confirmPasswordBox: {
    position: 'absolute',
    top: 470,
    left: 30,
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },

  passwordInput: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  strengthRow: {
    position: 'absolute',
    top: 535,
    left: 60,
    right: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  strengthLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },

  strengthLine: {
    width: 55,
    height: 4,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginHorizontal: 2,
  },

  strengthLineActive: {
    backgroundColor: colors.blue,
  },

  strengthText: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginRight: 4,
  },

  requirementsBox: {
    position: 'absolute',
    top: 565,
    left: 30,
    width: 330,
    backgroundColor: colors.lightBlue,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },

  requirementsTitle: {
    alignSelf: 'flex-end',
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
    marginBottom: 8,
  },

  requirementRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 5,
  },

  requirementText: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    marginRight: 5,
  },

  validText: {
    color: colors.gray,
  },

  invalidText: {
    color: colors.red,
  },

  button: {
    position: 'absolute',
    top: 715,
    alignSelf: 'center',
    width: 200,
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
  },
});
export const noInternetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBackground,
  },

  logo: {
    position: 'absolute',
    top: 55,
    right: 20,
    width: 100,
    height: 45,
  },

  notificationIcon: {
    position: 'absolute',
    top: 62,
    left: 25,
  },

  noWifiImage: {
    position: 'absolute',
    top: 245,
    alignSelf: 'center',
    width: 280,
    height: 210,
  },

  title: {
    position: 'absolute',
    top: 470,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 505,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },
});

export const cameraPermissionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logo: {
    position: 'absolute',
    top: 55,
    right: 20,
    width: 100,
    height: 45,
  },

  image: {
    position: 'absolute',
    top: 210,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },

  title: {
    position: 'absolute',
    top: 440,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 495,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  button: {
    position: 'absolute',
    top: 550,
    alignSelf: 'center',
    width: 180,
    height: 48,
    backgroundColor: colors.blue,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
  },

  skipText: {
    position: 'absolute',
    top: 610,
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
    textDecorationLine: 'underline',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: 'center',
  },

  modalIconCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  modalIconCircleDanger: {
    backgroundColor: colors.lightRed,
  },

  modalTitle: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
    marginBottom: 8,
  },

  modalTitleDanger: {
    color: colors.red,
  },

  modalDescription: {
    width: 230,
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  cancelButton: {
    width: 115,
    height: 45,
    borderRadius: 12,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButtonText: {
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  confirmButton: {
    width: 115,
    height: 45,
    borderRadius: 12,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirmButtonDanger: {
    backgroundColor: colors.red,
  },

  confirmButtonText: {
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
  },
});
export const faqStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    top: 65,
    left: 28,
  },

  title: {
    position: 'absolute',
    top: 65,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  subtitle: {
    position: 'absolute',
    top: 125,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  listContainer: {
    position: 'absolute',
    top: 180,
    left: 28,
    right: 28,
  },

  questionBox: {
    backgroundColor: colors.lightBlue,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 12,
  },

  questionBoxActive: {
    backgroundColor: colors.blue,
    paddingBottom: 22,
  },

  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  questionText: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  questionTextActive: {
    color: colors.white,
  },

  answerText: {
    marginTop: 16,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
  },

  contactContainer: {
    position: 'absolute',
    bottom: 62,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  contactText: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    marginLeft: 4,
  },

  contactLink: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    textDecorationLine: 'underline',
  },
});
export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  notificationIcon: {
    position: 'absolute',
    top: 55,
    left: 22,
  },

  logo: {
    position: 'absolute',
    top: 55,
    right: 25,
    width: 95,
    height: 40,
  },

  helloText: {
    position: 'absolute',
    top: 92,
    right: 25,
    textAlign: 'right',
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  subText: {
    position: 'absolute',
    top: 124,
    right: 25,
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  summaryCard: {
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    width: 340,
    height: 135,
    backgroundColor: colors.blue,
    borderRadius: 14,
    paddingTop: 14,
    paddingHorizontal: 14,
  },

  monthBadge: {
    backgroundColor: colors.white,
    borderRadius: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  monthBadgeText: {
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  summaryTitle: {
    position: 'absolute',
    top: 10,
    right: 16,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
  },

  amount: {
    position: 'absolute',
    top: 35,
    right: 18,
    fontSize: 25,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
  },

  currency: {
    position: 'absolute',
    top: 60,
    right: 15,
    fontSize: 15,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
  },

  progressLine: {
    position: 'absolute',
    left: 22,
    bottom: 42,
    width: 170,
    height: 2,
    backgroundColor: colors.white,
    borderRadius: 10,
  },

  progressDot: {
    position: 'absolute',
    left: 0,
    top: -3,
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
  },

  progressNumbers: {
    position: 'absolute',
    left: 20,
    width: 170,
    bottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressText: {
    fontSize: 9,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
  },

  averageBadge: {
    position: 'absolute',
    right: 12,
    bottom: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },

  averageText: {
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  chartCard: {
    position: 'absolute',
    top: 305,
    marginTop: -10,
    paddingTop: 10,
    alignSelf: 'center',
    width: 340,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 16,
    elevation: 4,
  },

  sectionTitle: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  chartWrapper: {
    width: 140,
    height: 140,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
  },

  chartCenter: {
    position: 'absolute',
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chartCenterTitle: {
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  chartCenterAmount: {
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  chartCenterCurrency: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: -4,
  },

  categoriesGrid: {
    width: 190,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: -15,
  },

  categoryItem: {
    width: 45,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 8,
  },

  categoryCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryName: {
    marginTop: 4,
    fontSize: 9,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    textAlign: 'center',
  },

  amountRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  categoryAmount: {
    fontSize: 9,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginLeft: 3,
  },

  categoryCurrency: {
    fontSize: 9,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  greenDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.green,
    zIndex: 2,
  },

  blueDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.blue,
    zIndex: 2,
  },

  yellowDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.yellow,
    zIndex: 2,
  },

  purpleDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.purple,
    zIndex: 2,
  },

  grayDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.gray,
    zIndex: 2,
  },

  cyanDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.cyan,
    zIndex: 2,
  },

  redDot: {
    position: 'absolute',
    top: -2,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.red,
    zIndex: 2,
  },

  expenseCard: {
    position: 'absolute',
    top: 510,
    alignSelf: 'center',
    width: 340,
    height: 95,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 12,
    elevation: 4,
  },

  expenseCardTitle: {
    position: 'absolute',
    top: 10,
    right: 16,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  basketImage: {
    position: 'absolute',
    left: 30,
    top: 490,
    width: 130,
    height: 130,
    zIndex: 10,
  },

  emptyTitle: {
    position: 'absolute',
    top: 42,
    right: 15,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  emptyDescription: {
    position: 'absolute',
    top: 72,
    right: 15,
    width: 190,
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'right',
  },

  invoiceCard: {
    position: 'absolute',
    top: 615,
    alignSelf: 'center',
    width: 340,
    height: 150,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 12,
    elevation: 4,
    alignItems: 'center',
  },

  invoiceHeader: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  invoiceSectionTitle: {
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  showAllText: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  receiptImage: {
    position: 'absolute',
    top: 35,
    alignSelf: 'center',
    width: 55,
    height: 55,
  },

  invoiceEmptyTitle: {
    position: 'absolute',
    top: 83,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  invoiceEmptyDescription: {
    position: 'absolute',
    top: 103,
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },
});

export const bottomNavStyles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    elevation: 10,
  },

  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },

  tabLabel: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  tabLabelActive: {
    color: colors.blue,
    fontFamily: 'Tajawal-Bold',
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -34,
  },
});
export const addBillStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingTop: 24,
    paddingHorizontal: 18,
    paddingBottom: 26,
    marginBottom: 28,
  },

  closeButton: {
    position: 'absolute',
    top: 14,
    left: 18,
    zIndex: 5,
  },

  closeText: {
    fontSize: 28,
    color: colors.black,
    fontFamily: 'Tajawal-Bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 10,
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  option: {
    width: '100%',
    height: 62,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 9,
    marginTop: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  optionTextBox: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 12,
  },

  optionTitle: {
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  optionDescription: {
    marginTop: 3,
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },
});
export const moreStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingTop: 24,
    paddingHorizontal: 22,
    paddingBottom: 28,
    marginBottom: 28,
  },

  closeButton: {
    position: 'absolute',
    top: 14,
    left: 18,
    zIndex: 5,
  },

  closeText: {
    fontSize: 28,
    color: colors.black,
    fontFamily: 'Tajawal-Bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
    marginBottom: 22,
  },

  item: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#BFD3F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  itemText: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  smallLogo: {
    width: 40,
    height: 20,
  },

  logoutItem: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  logoutText: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    marginRight: 24,
  },

  profileText: {
    marginRight: 20,
  },

  limitText: {
    marginRight: 30,
  },

  supportText: {
    marginRight: 25,
  },

  aboutText: {
    marginRight: 16,
  },

  logoutTextCustom: {
    marginRight: 26,
  },
});
export const supportStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  closeButton: {
    position: 'absolute',
    top: 14,
    left: 16,
    zIndex: 5,
  },

  closeText: {
    fontSize: 28,
    color: colors.black,
    fontFamily: 'Tajawal-Bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 18,
    fontSize: 13,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  contactBox: {
    height: 58,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    marginTop: 12,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  contactText: {
    marginRight: 12,
    fontSize: 14,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },
});
export const homeWithInvoicesStyles = {
  ...homeStyles,

  //ستايل الرسم البياني الي فوق الخط
  summaryChart: {
    position: 'absolute',
    left: 14,
    top: 40,
  },

  averageBadge: {
    position: 'absolute',
    right: 12,
    bottom: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingHorizontal: 2,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  averagePercent: {
    fontSize: 10,
    fontFamily: 'Tajawal-Bold',
    color: colors.green,
    marginRight: 5,
  },

  chartCenterAmount: {
    ...homeStyles.chartCenterAmount,
    fontFamily: 'Tajawal-Bold',
  },

  highExpenseSmallText: {
    position: 'absolute',
    top: 30,
    right: 15,
    width: 170,
    fontSize: 10,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'right',
  },

  invoiceRow: {
    width: '100%',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  invoiceRight: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  invoiceLogo: {
    width: 34,
    height: 34,
    borderRadius: 34,
    marginLeft: 10,
  },

  invoiceInfo: {
    alignItems: 'flex-end',
  },

  invoiceStore: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  invoiceDate: {
    fontSize: 9,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 2,
  },

  invoiceAmountBox: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  invoiceAmount: {
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    marginLeft: 5,
  },

  invoiceCurrency: {
    fontSize: 11,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },
};
export const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  camera: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 10,
  },

  title: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanFrame: {
    width: 260,
    height: 320,
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 18,
    backgroundColor: 'transparent',
  },

  captureButton: {
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerButton: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: colors.white,
  },

  soundButton: {
    position: 'absolute',
    bottom: 58,
    right: 35,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  popupOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  popupCard: {
    width: 320,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F2F6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  popupTitle: {
    fontSize: 28,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  popupSubtitle: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 10,
    marginBottom: 30,
  },

  popupButton: {
    width: 150,
    height: 50,
    borderRadius: 14,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },

  popupButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
  },
});
