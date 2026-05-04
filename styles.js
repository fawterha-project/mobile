import { StyleSheet } from 'react-native';

const BLUE = '#0052C9';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const GRAY = '#9CA3AF';
const LIGHT_RED = '#FEE2E2';
const DARK_RED = '#DC2626';
const BG = '#EAF1FF';
export const COLORS = {
  BLUE,
  WHITE,
  BLACK,
  GRAY,
  LIGHT_RED,
  DARK_RED,
  BG,
};

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },

  header: {
    height: 245,
    backgroundColor: BG,
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
    color: BLACK,
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
    color: BLUE,
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
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: WHITE,
  },

  userName: {
    textAlign: 'center',
    marginTop: -18,
    marginBottom: 35,
    fontSize: 20,
    color: BLACK,
    fontFamily: 'Tajawal-Medium',
  },

  menuContainer: {
    paddingHorizontal: 35,
    gap: 11,
  },

  menuItem: {
    height: 53,
    borderRadius: 10,
    backgroundColor: WHITE,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  deleteItem: {
    backgroundColor: LIGHT_RED,
  },

  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  menuText: {
    fontSize: 18,
    color: BLACK,
    fontFamily: 'Tajawal-Regular',
  },

  deleteText: {
    color: DARK_RED,
  },
});

export const bottomNavStyles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: WHITE,
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
    color: GRAY,
    marginTop: 2,
    fontFamily: 'Tajawal-Regular',
  },

  activeTabText: {
    color: BLUE,
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -34,
  },
});

export const profileEditStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },

  editHeader: {
    height: 220,
    backgroundColor: BG,
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
    color: BLUE,
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
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: WHITE,
  },

  cameraBtn: {
    position: 'absolute',
    bottom: 0,
    right: '39%',
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: BLUE,
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
    color: BLUE,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 3,
    paddingRight: 8,
  },
  inputBox: {
    height: 46,
    backgroundColor: WHITE,
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
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },

  genderOption: {
    height: 40,
    backgroundColor: '#F3F4F6',
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
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelText: {
    color: '#DC2626',
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },

  saveBtn: {
    width: 82,
    height: 31,
    borderRadius: 10,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveText: {
    color: WHITE,
    fontSize: 18,
    fontFamily: 'Tajawal-Medium',
  },
});
export const splashStyles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: WHITE,
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
    color: BLACK,
  },
});