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

  bg: '#EAF1FF', // ← هذا ناقص غالبًا
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
    top: 350,
    alignSelf: 'center',
    width: 220,
    height: 100,
  },

  title: {
    position: 'absolute',
    top: 550,
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  description: {
    position: 'absolute',
    top: 595,
    alignSelf: 'center',
    width: 300,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'center',
  },

  button: {
    position: 'absolute',
    top: 650,
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
    fontSize: 16,
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
  errorOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.45)',
  justifyContent: 'center',
  alignItems: 'center',
},

errorModal: {
  width: 320,
  backgroundColor: colors.white,
  borderRadius: 30,
  paddingVertical: 30,
  paddingHorizontal: 25,
  alignItems: 'center',
},

errorIconCircle: {
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: '#FFEAEA',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},

errorTitle: {
  fontSize: 24,
  fontFamily: 'Tajawal-Bold',
  color: '#E53935',
  textAlign: 'center',
},

errorText: {
  fontSize: 15,
  fontFamily: 'Tajawal-Regular',
  color: colors.gray,
  textAlign: 'center',
  marginTop: 12,
  lineHeight: 28,
},

errorButton: {
  width: 180,
  height: 50,
  borderRadius: 14,
  backgroundColor: '#E53935',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25,
},

errorButtonText: {
  color: colors.white,
  fontSize: 18,
  fontFamily: 'Tajawal-Bold',
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
  signupButtonDisabled: {
    opacity: 0.5,
  },
  passwordOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.45)',
  justifyContent: 'center',
  alignItems: 'center',
},

passwordModal: {
  width: 320,
  backgroundColor: colors.white,
  borderRadius: 30,
  paddingVertical: 30,
  paddingHorizontal: 25,
  alignItems: 'center',
},

passwordIconCircle: {
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: '#F2F6FF',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},

passwordTitle: {
  fontSize: 24,
  fontFamily: 'Tajawal-Bold',
  color: colors.blue,
  textAlign: 'center',
},

passwordText: {
  fontSize: 15,
  fontFamily: 'Tajawal-Regular',
  color: colors.gray,
  textAlign: 'center',
  marginTop: 12,
  lineHeight: 28,
},

passwordButton: {
  width: 180,
  height: 50,
  borderRadius: 14,
  backgroundColor: colors.blue,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25,
},

passwordButtonText: {
  color: colors.white,
  fontSize: 18,
  fontFamily: 'Tajawal-Bold',
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
  invoiceItem: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1'

  },

  invoiceStore: {

    fontSize: 16,
    fontWeight: '700',
    color: '#111827'

  },

  invoiceDate: {

    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4

  },

  invoiceAmount: {

    fontSize: 18,
    fontWeight: '700',
    color: '#111827'

  },
});

export const homeWithInvoicesStyles = {

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 45,
  },

  logo: {
    alignSelf: 'flex-end',
    width: 95,
    height: 40,
  },

  helloText: {
    marginTop: 15,
    textAlign: 'right',
    fontSize: 25,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  subText: {
    marginTop: 5,
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },


  /* scan */

  scanCard: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#0D5BD7',
    borderRadius: 28,
    padding: 20,
    elevation: 5,
  },

  scanTitle: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
    textAlign: 'center',
  },

  scanSub: {
    fontSize: 16,
    color: '#DCE8FF',
    marginTop: 1,
    textAlign: 'center',
  },

  scanRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  uploadButton: {
    width: '48%',
    height: 100,
    borderRadius: 18,
    backgroundColor: '#B55CFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraButton: {
    width: '48%',
    height: 100,
    borderRadius: 18,
    backgroundColor: '#3D7BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanText: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
    color: 'white',
  },

  supportText: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
    color: '#D8E6FF',
  },


  /* sections */

  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
    textAlign: 'right',
  },

  journeySub: {
    fontSize: 18,
    color: colors.gray,
    textAlign: 'right',
    marginTop: 1,
  },


  /* journey */

  journeyCard: {
    marginHorizontal: 15,
    marginTop: 18,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    elevation: 5,
  },

  timelineContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
  },

  stepBlock: {
    width: '20%',
    alignItems: 'center',
  },

  timelineLine: {
    flex: 1,
    height: 3,
    backgroundColor: '#E6EAFF',
    marginTop: 28,
    marginHorizontal: 4,
  },

  stepCircle: {
    width: 60,
    height: 60,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  stepTitle: {
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
    textAlign: 'center',
    marginTop: 5,
  },

  stepDesc: {
    fontSize: 12,
    textAlign: 'center',
    color: '#8C93A3',
    marginTop: 4,
  },

  bottomJourneyText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    color: '#8C93A3',
  },


  /* categories */

  chartCard: {
    marginHorizontal: 15,
    marginTop: 18,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 15,
    elevation: 5,
  },

  categoriesGrid: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  categoryItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 8,
  },

  categoryCircle: {
    width: 65,
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryName: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  categoryAmount: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 3,
  },


  /* invoices */

  invoiceCard: {
    marginHorizontal: 15,
    marginTop: 18,
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 18,
    elevation: 5,
  },

  invoiceHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  showAll: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  invoiceRow: {
    height: 78,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  invoiceRight: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '72%',
    overflow: 'hidden'
  },

  invoiceLogo: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 12,
    backgroundColor: '#F3F4F6',
  },

  invoiceInfo: {
    flex: 1,
    maxWidth: 160
  },

  invoiceStore: {
    fontSize: 15,
    fontFamily: 'Tajawal-Medium',
    color: colors.black,
    textAlign: 'right',
    lineHeight: 22,
  },

  invoiceDate: {
    fontSize: 13,
    marginTop: 4,
    color: colors.gray,
    textAlign: 'right',
  },

  invoiceAmountBox: {
    width: '28%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  invoiceAmount: {
    fontSize: 22,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  invoiceCurrency: {
    fontSize: 13,
    color: colors.gray,
    marginBottom: 3,
  },

  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
    textAlign: 'center',
  },

  emptySub: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

  notificationOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 25,
    paddingTop: 85,
    alignItems: 'center',

  },
  notificationModal: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 22,
    maxHeight: 500,
    width: '100%',
    elevation: 12
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 20,
    color: colors.black
  },

  notificationCard: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10
  },

  notificationIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: '#EEF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12
  },

  notificationContent: {
    flex: 1
  },

  notificationCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 4
  },

  notificationMessage: {
    fontSize: 14,
    color: '#777',
    textAlign: 'right',
    lineHeight: 20
  },

  emptyNotificationText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#888'
  },

};

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  header: {
    height: 245,
    backgroundColor: colors.bg,
    overflow: 'hidden',
  },

  statusFake: {
    height: 44,
    paddingHorizontal: 28,
    paddingTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  timeText: {
    fontSize: 12,
    fontFamily: 'Tajawal-Medium',
    color: colors.black,
  },

  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleRow: {
    height: 42,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 5,
  },

  title: {
    fontSize: 20,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  waveImage: {
    position: 'absolute',
    top: 82,
    left: 0,
    right: 0,
    width: '100%',
    height: 145,
    zIndex: 1,
  },

  avatarWrapper: {
    marginTop: 50,
    alignItems: 'center',
    zIndex: 10,
  },

  avatarCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.white,
  },

  userName: {
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 35,
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  menuContainer: {
    paddingHorizontal: 35,
    gap: 11,
  },

  menuItem: {
    height: 53,
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  deleteItem: {
    backgroundColor: colors.lightRed,
  },

  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  menuText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },

  deleteText: {
    color: colors.red,
  },

  deleteOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  deleteModalBox: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingTop: 28,
    paddingBottom: 22,
    paddingHorizontal: 22,
    alignItems: 'center',
    elevation: 12,
  },

  deleteIconCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  deleteModalTitle: {
    fontSize: 22,
    color: colors.red,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 8,
  },

  deleteModalText: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },

  deleteModalButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  deleteCancelBtn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteCancelText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  deleteConfirmBtn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteConfirmText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Tajawal-Medium',
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
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabText: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 2,
    fontFamily: 'Tajawal-Regular',
  },

  activeTabText: {
    color: colors.blue,
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -34,
  },
});

export const profileEditStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  editHeader: {
    height: 220,
    backgroundColor: colors.bg,
  },

  editTitleRow: {
    height: 42,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  editTitle: {
    fontSize: 20,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  editAvatarWrapper: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  editAvatarCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.white,
  },

  cameraBtn: {
    position: 'absolute',
    bottom: 0,
    right: '39%',
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    paddingHorizontal: 32,
    marginTop: 2,
  },

  inputGroup: {
    marginBottom: 9,
  },

  inputLabel: {
    textAlign: 'right',
    color: colors.blue,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 3,
    paddingRight: 8,
  },

  inputBox: {
    height: 46,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    textAlign: 'right',
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    paddingVertical: 0,
  },

  inputArrow: {
    marginLeft: 4,
  },

  genderValue: {
    flex: 1,
    textAlign: 'right',
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
  },

  genderDropdown: {
    marginTop: 5,
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },

  genderOption: {
    height: 40,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },

  genderOptionActive: {
    backgroundColor: '#D1D5DB',
  },

  genderOptionText: {
    width: '100%',
    textAlign: 'right',
    writingDirection: 'rtl',
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
  },

  genderDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  editButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 56,
    marginTop: 10,
  },

  cancelBtn: {
    width: 82,
    height: 31,
    borderRadius: 10,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    color: colors.red,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },

  saveBtn: {
    width: 82,
    height: 31,
    borderRadius: 10,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },
});

export const changePasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backBtn: {
    position: 'absolute',
    top: 58,
    left: 22,
    zIndex: 10,
  },

  title: {
    marginTop: 58,
    textAlign: 'center',
    fontSize: 20,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  subtitle: {
    marginTop: -40,
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  subtitle2: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  waveImage: {
    position: 'absolute',
    top: 100,
    width: '100%',
    height: 100,
  },

  headerImage: {
    width: 385,
    height: 220,
    alignSelf: 'center',
    marginTop: -30,
  },

  label: {
    marginTop: 10,
    marginRight: 36,
    textAlign: 'right',
    color: '#374151',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
  },

  label2: {
    marginTop: 10,
    marginRight: 36,
    textAlign: 'right',
    color: '#374151',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
  },

  label3: {
    marginTop: 10,
    marginRight: 36,
    textAlign: 'right',
    color: '#374151',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
  },

  inputBox: {
    height: 46,
    marginHorizontal: 28,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  inputBox2: {
    height: 46,
    marginHorizontal: 28,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  inputBox3: {
    height: 46,
    marginHorizontal: 28,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  input: {
    flex: 1,
    textAlign: 'right',
    color: '#111827',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
  },

  strengthRow: {
    marginTop: 12,
    marginHorizontal: 34,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  strengthText: {
    fontSize: 12,
    color: '#6B7280',
    marginHorizontal: 5,
    fontFamily: 'Tajawal-Regular',
  },

  linesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  line: {
    flex: 1,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginHorizontal: 2,
  },

  lineActive: {
    backgroundColor: colors.blue,
  },

  errorRow: {
    marginTop: 8,
    marginRight: 34,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  errorText: {
    marginRight: 4,
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Tajawal-Regular',
  },

  requirementsBox: {
    marginHorizontal: 28,
    marginTop: 18,
    backgroundColor: '#F5F7FF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },

  requirementsTitle: {
    textAlign: 'right',
    color: colors.blue,
    fontSize: 15,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 10,
  },

  requirementRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 6,
  },

  requirementText: {
    marginRight: 6,
    fontSize: 13,
    color: '#374151',
    fontFamily: 'Tajawal-Regular',
  },

  saveBtn: {
    height: 50,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: colors.blue,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveBtnDisabled: {
    opacity: 0.5,
  },

  saveText: {
    marginRight: 8,
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Medium',
  },
});

export const spendingLimitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backBtn: {
    position: 'absolute',
    top: 62,
    left: 24,
    zIndex: 10,
  },

  headerContent: {
    alignItems: 'center',
    marginTop: 42,
  },

  title: {
    fontSize: 20,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  imageWrapper: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: -8,
  },

  waveImage: {
    position: 'absolute',
    bottom: 24,
    width: '130%',
    height: 160,
    opacity: 0.9,
  },

  headerImage: {
    width: 280,
    height: 200,
    zIndex: 2,
  },

  subtitle: {
    marginTop: -18,
    fontSize: 18,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  card: {
    marginHorizontal: 24,
    marginTop: 18,
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 18,
    elevation: 4,
  },

  cardHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 14,
  },

  walletIcon: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  cardTitle: {
    fontSize: 18,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  selectBox: {
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectText: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  optionsBox: {
    marginTop: 2,
    backgroundColor: colors.white,
  },

  optionRow: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
    color: '#0F2A56',
    fontFamily: 'Tajawal-Regular',
    paddingRight: 10,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginTop: 34,
  },

  cancelBtn: {
    width: 150,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.lightRed,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    color: colors.red,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },

  saveBtn: {
    width: 150,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },

  customInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    marginTop: 12,
    paddingHorizontal: 14,
    textAlign: 'right',
    writingDirection: 'rtl',
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    backgroundColor: colors.white,
  },
});

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

export const billsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerRow: {
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  headerSpace: {
    width: 32,
  },

  searchBox: {
    height: 36,
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 36,
    textAlign: 'right',
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    paddingVertical: 0,
  },

  filterRow: {
    marginTop: 18,
    paddingHorizontal: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 12,
  },

  filterBtnActive: {
    width: 58,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterBtn: {
    width: 74,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterTextActive: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Tajawal-Medium',
  },

  filterText: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  billItem: {
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  amount: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },

  amountBox: {
    width: 80,
    alignItems: 'flex-start',
    marginLeft: 20,
  },

  currency: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    marginTop: 2,
  },

  billInfo: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    marginLeft: 12,
    marginTop: 30,
  },

  billName: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    textAlign: 'right',
    maxWidth: 190,
    marginTop: -15,
  },

  billDate: {
    marginTop: -3,
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  billLogo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  billLogoCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export const categoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerRow: {
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  headerSpace: {
    width: 32,
  },

  searchBox: {
    height: 36,
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 36,
    textAlign: 'right',
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    paddingVertical: 0,
  },

  filterRow: {
    marginTop: 18,
    paddingHorizontal: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 12,
  },

  filterAllInactive: {
    width: 58,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterCategoryActive: {
    width: 74,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterTextActive: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Tajawal-Medium',
  },

  filterTextInactive: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  listContainer: {
    marginTop: 20,
    paddingHorizontal: 38,
    gap: 10,
  },

  categoryItem: {
    height: 65,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },

  categoryInfo: {
  flex: 1,
  alignItems: 'flex-end',
  paddingRight: 12,
  marginLeft: 10,
},

  categoryName: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  categoryCount: {
  marginTop: 2,
  fontSize: 16,
  color: colors.gray,
  fontFamily: 'Tajawal-Regular',
  textAlign: 'right',
  alignSelf: 'stretch',
},

  categoryIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const categoryFoodStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerRow: {
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  headerSpace: {
    width: 32,
  },

  summaryCard: {
    height: 122,
    marginHorizontal: 40,
    marginTop: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1FAE5',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIconBox: {
    width: 58,
    height: 58,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

summaryInfo: {
  flex: 1,
  alignItems: 'flex-end',
  paddingLeft: 20,
},

  summaryTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  summaryCount: {
  marginTop: 4,
  fontSize: 16,
  color: colors.gray,
  fontFamily: 'Tajawal-Regular',
  paddingLeft: 30,
},

  summaryAmount: {
    marginTop: 4,
    fontSize: 20,
    color: colors.green,
    fontFamily: 'Tajawal-Medium',
  },

  summarySubText: {
    marginTop: 2,
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  searchBox: {
    height: 36,
    marginHorizontal: 40,
    marginTop: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 36,
    textAlign: 'right',
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    paddingVertical: 0,
  },

  listContainer: {
    marginTop: 20,
    paddingHorizontal: 38,
  },

  billItem: {
    height: 85,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  amountBox: {
  width: 80,
  alignItems: 'flex-start',
  marginLeft: 20,
},

  amount: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },

  currency: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    marginTop: 2,
  },

  billInfo: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    marginLeft: 12,
  },

  billName: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    textAlign: 'right',
    maxWidth: 190,
  },

  billDate: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },


  billLogo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  billLogoCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  emptyCategoryContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  emptyCategoryIcon: {
    marginBottom: 18,
  },

  emptyCategoryTitle: {
    fontSize: 22,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 8,
  },

  emptyCategoryText: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
    lineHeight: 28,
  },

});

export const emptyCategoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerRow: {
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  headerSpace: {
    width: 32,
  },

  searchBox: {
    height: 36,
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 36,
    textAlign: 'right',
    fontSize: 13,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    paddingVertical: 0,
  },

  filterRow: {
    marginTop: 18,
    paddingHorizontal: 40,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 12,
  },

  filterAllInactive: {
    width: 58,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterCategoryActive: {
    width: 74,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterTextActive: {
    fontSize: 15,
    color: colors.white,
    fontFamily: 'Tajawal-Medium',
  },

  filterTextInactive: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  emptyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },

  emptyImage: {
    width: 220,
    height: 220,
    marginBottom: 5,
  },

  emptyTitle: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 5,
  },

  emptyText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
  },
});

export const notFoundStyles = StyleSheet.create({
  emptySearchContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },

  emptySearchTitle: {
    fontSize: 22,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 12,
  },

  emptySearchText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
  },
});

export const weeklyReportsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  headerRow: {
    height: 48,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  headerSpace: {
    width: 32,
  },

  tabsRow: {
    height: 48,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 3,
    paddingHorizontal: 6,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tabBtnActive: {
    width: 70,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabBtn: {
    width: 70,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabTextActive: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Tajawal-Medium',
  },

  tabText: {
    fontSize: 15,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  summaryCard: {
    height: 100,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIconBox: {
    width: 65,
    height: 65,
    borderRadius: 12,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },

  summaryTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  summaryAmount: {
    marginTop: 6,
    fontSize: 18,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  percentRow: {
    marginTop: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  percentText: {
    fontSize: 14,
    color: '#EF4444',
    fontFamily: 'Tajawal-Medium',
  },

  summarySubText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  chartCard: {
    height: 230,
    marginHorizontal: 34,
    marginTop: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingTop: 5,
  },

  chartHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  chartTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  daysBtn: {
    width: 78,
    height: 30,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  daysBtnText: {
    fontSize: 14,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  chartGraph: {
    marginTop: 6,
    alignSelf: 'center',
    borderRadius: 8,
  },

  categoryCard: {
    height: 240,
    marginHorizontal: 20,
    marginTop: 6,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    padding: 7,
    elevation: 4,
  },

  categoryTitle: {
    textAlign: 'right',
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 8,
  },

  donutWrapper: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  donutInner: {
    position: 'absolute',
    width: 75,
    height: 75,
    borderRadius: 37,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  donutAmount: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  donutCurrency: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  categoriesGrid: {
    width: 180,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },

  categoryItem: {
    width: 45,
    alignItems: 'center',
    marginBottom: 8,
  },

  categoryDot: {
    position: 'absolute',
    top: -2,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: 7,
    zIndex: 2,
  },

  categoryCircle: {
    width: 35,
    height: 35,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryName: {
    marginTop: 4,
    fontSize: 12,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
  },

  amountRow: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  categoryAmount: {
    fontSize: 11,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    marginLeft: 3,
  },

  categoryCurrency: {
    fontSize: 9,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

});

export const monthlyReportsStyles = StyleSheet.create({
  ...weeklyReportsStyles,
});

export const yearlyReportsStyles = StyleSheet.create({
  ...monthlyReportsStyles,

  percentText: {
    ...monthlyReportsStyles.percentText,
    color: '#22C55E',
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
    marginRight: 20,
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

export const invoiceDetailsStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  scroll: {
  flex: 1,
},

  headerRow: {
    height: 55,
    paddingHorizontal: 18,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  card: {
    marginHorizontal: 10,
    marginTop: 14,
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BFD3F6',
    backgroundColor: colors.white,
  },

  cardHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
  },

  label: {
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.blue,
  },

  value: {
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
  },

  productHeader: {
    flexDirection: 'row-reverse',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DCE7FA',
  },

  productRow: {
    flexDirection: 'row-reverse',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
  },

  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: colors.black,
  },

  totalBox: {
    marginTop: 14,
    backgroundColor: '#EEF4FF',
    padding: 14,
    borderRadius: 8,
  },

  totalText: {
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
    textAlign: 'right',
  },

  qrBox: {
    alignItems: 'center',
    paddingVertical: 12,
  },

  qrText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: colors.gray,
  },

  mainInvoiceTitle: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
    textAlign: 'center',
    marginBottom: 18,
  },

  headerTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(11,95,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  invoiceBadge: {
    backgroundColor: colors.blue,
    height: 42,
    paddingHorizontal: 26,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 4,
  },

  invoiceBadgeText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
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
    top: 85,
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
    paddingBottom: 10,
  },

  // ✨ تم تكبير وتطويل إطار السكان
  scanFrame: {
    width: '80%',
    height: 600,
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

export const failedScanStyles = {
  ...cameraStyles,
  scanFrame: {
    ...cameraStyles.scanFrame,

    borderColor: '#FF3B3B',
    borderWidth: 2,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',
  },

  errorIconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,

    backgroundColor: '#FF2E2E',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 25,
  },

  errorTitle: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
    textAlign: 'center',
  },

  errorSubtitle: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,
    textAlign: 'center',

    width: 180,
    marginTop: 10,
  },
};

export const blurScanStyles = {
  ...cameraStyles,

  scanFrame: {
    ...cameraStyles.scanFrame,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.04)',
  },

  warningIcon: {
    marginBottom: 18,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.white,
    textAlign: 'center',
    marginTop: 5,
  },

  subtitle: {
    width: 180,

    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.white,

    textAlign: 'center',
    lineHeight: 24,
    marginTop: 8,
  },
};

export const invoiceAddedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 70,
  },

  closeButton: {
    position: 'absolute',
    top: 55,
    left: 25,
  },

  image: {
    width: 270,
    height: 270,
    marginTop: 50,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
    marginTop: 25,
  },

  subtitle: {
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 10,
  },

  viewButton: {
    width: '75%',
    height: 55,
    borderRadius: 10,
    backgroundColor: colors.blue,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 70,
  },

  viewText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
  },

  newButton: {
    width: '75%',
    height: 55,
    borderRadius: 10,

    borderWidth: 1.5,
    borderColor: colors.blue,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 15,
  },

  newText: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
  },
});

export const invoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingTop: 60,
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 25,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Tajawal-Bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 35,
  },

  card: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 15,
    padding: 15,
  },

  receiptImage: {
    width: 300,
    height: 260,
    alignSelf: 'center',
  },

  line: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: 15,
  },

  infoRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#E6FAEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storeName: {
    fontSize: 20,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'right',
  },

  amount: {
    fontSize: 35,
    fontFamily: 'Tajawal-Bold',
    textAlign: 'right',
  },

  currency: {
    fontSize: 18,
  },

  // ✨ عدلته
  detailsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ECECEC',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  // ✨ جديد
  detailTitle: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    textAlign: 'right',
  },

  // ✨ جديد
  detailValue: {
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    textAlign: 'left',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  deleteButton: {
    width: 70,
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    color: '#FF4D4D',
    marginTop: 5,
  },

  saveButton: {
    flex: 1,
    height: 60,
    borderRadius: 15,
    backgroundColor: colors.blue,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  saveText: {
    color: colors.white,
    fontSize: 22,
    fontFamily: 'Tajawal-Bold',
  },
});

export const uploadInvoiceStyles = StyleSheet.create({
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

  subtitle: {
    position: 'absolute',
    top: 95,
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

 imageCard: {
  position: 'absolute',
  top: 145,
  left: 30,
  width: 330,
  height: 235,
    borderWidth: 1,
   borderColor: '#D9E7FF',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },

  imageCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

 cardTitle: {
  marginTop: 18,
  fontSize: 16,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  cardSubTitle: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  uploadButton: {
  marginTop: 22,

  width: 190,
  height: 44,

  backgroundColor: colors.white,

  borderRadius: 12,

  justifyContent: 'center',
  alignItems: 'center',

  flexDirection: 'row-reverse',
},

  uploadButtonText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: 'Tajawal-Bold',
  },

  pdfCard: {
  position: 'absolute',
  top: 400,
  left: 30,
  width: 330,
  height: 235,
    borderWidth: 1,
   borderColor: '#D9E7FF',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },

  pdfCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightRed,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  securityCard: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    width: 340,
    height: 90,
    backgroundColor: colors.lightBlue,
    borderRadius: 16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  securityTextContainer: {
    flex: 1,
    marginRight: 10,
  },

  securityTitle: {
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
    textAlign: 'right',
  },

  securityDescription: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 4,
    textAlign: 'right',
  },
});
export const invoicePreviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
    zIndex: 1,
  },

  title: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  invoiceImage: {
    position: 'absolute',
    top: 130,
    left: 35,
    width: 300,
    height: 300,
    borderRadius: 16,
  },

  changeButton: {
    position: 'absolute',
    top: 450,
    alignSelf: 'center',

    width: 170,
    height: 42,

    backgroundColor: colors.lightBlue,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row-reverse',
  },

  changeButtonText: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
  },

  checkTitle: {
    position: 'absolute',
    top: 510,
    alignSelf: 'center',

    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  checkRow1: {
    position: 'absolute',
    top: 550,
    right: 100,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  checkRow2: {
    position: 'absolute',
    top: 580,
    right: 100,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  checkRow3: {
    position: 'absolute',
    top: 610,
    right: 100,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },

  checkText: {
    marginRight: 8,
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  uploadButton: {
    position: 'absolute',
    bottom: 75,
    alignSelf: 'center',

    width: 310,
    height: 50,

    backgroundColor: colors.blue,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
  },
});
export const uploadingInvoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
    zIndex: 1,
  },

  title: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  circleContainer: {
    position: 'absolute',
    top: 190,
    alignSelf: 'center',
    width: 220,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  percentText: {
    position: 'absolute',
    top: 400,
    alignSelf: 'center',
    fontSize: 34,
    fontFamily: 'Tajawal-Bold',
    color: colors.blue,
  },

  uploadingTitle: {
    position: 'absolute',
    top: 480,
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  uploadingSubtitle: {
    position: 'absolute',
    top: 520,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  securityCard: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    width: 340,
    height: 90,
    backgroundColor: colors.lightBlue,
    borderRadius: 16,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  securityTextContainer: {
    flex: 1,
    marginRight: 10,
  },

  securityTitle: {
    fontSize: 16,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
    textAlign: 'right',
  },

  securityDescription: {
    fontSize: 12,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
    marginTop: 4,
    textAlign: 'right',
  },
});

export const processingInvoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
    zIndex: 1,
  },

  title: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  iconContainer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    width: 340,
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    position: 'absolute',
    bottom: 100,
    right: 110,
  },

  processingSubtitle: {
    position: 'absolute',
    top: 380,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  processingSubtitle2: {
    position: 'absolute',
    top: 410,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  progressBarBackground: {
    position: 'absolute',
    top: 480,
    alignSelf: 'center',
    width: 280,
    height: 10,
    backgroundColor: '#EEF2FF',
    borderRadius: 10,
  },

  progressBarFill: {
    width: '65%',
    height: 10,
    backgroundColor: colors.blue,
    borderRadius: 10,
  },

  percentText: {
    position: 'absolute',
    top: 500,
    right: 50,
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  noteCard: {
    position: 'absolute',
    bottom: 55,
    left: 25,
    width: 340,
    height: 95,
    backgroundColor: colors.lightBlue,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noteText: {
    fontSize: 15,
    fontFamily: 'Tajawal-Regular',
    color: colors.black,
    marginTop: 3,
    textAlign: 'center',
  },
});

export const invoiceSuccessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  backIcon: {
    position: 'absolute',
    left: 20,
    top: 55,
    zIndex: 1,
  },

  title: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  successContainer: {
    position: 'absolute',
    top: 220,
    alignSelf: 'center',
  },

  outerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#EAF8EE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },

  successTitle: {
    position: 'absolute',
    top: 450,
    alignSelf: 'center',
    fontSize: 28,
    fontFamily: 'Tajawal-Bold',
    color: colors.black,
  },

  successSubtitle: {
    position: 'absolute',
    top: 510,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  successSubtitle2: {
    position: 'absolute',
    top: 545,
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
    color: colors.gray,
  },

  viewButton: {
    position: 'absolute',
    bottom: 140,
    alignSelf: 'center',

    width: 320,
    height: 55,

    backgroundColor: colors.blue,
    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
  },

  viewButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Tajawal-Bold',
  },

  uploadAnotherButton: {
    position: 'absolute',
    bottom: 65,
    alignSelf: 'center',

    width: 320,
    height: 55,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadAnotherButtonText: {
    color: colors.black,
    fontSize: 18,
    fontFamily: 'Tajawal-Regular',
  },
});