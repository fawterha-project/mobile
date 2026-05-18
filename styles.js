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
    marginTop: -18,
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

  listContainer: {
    marginTop: 24,
    paddingHorizontal: 38,
  },

  billItem: {
    height: 58,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  amount: {
    width: 80,
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    textAlign: 'left',
  },

  currency: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  billInfo: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },

  billName: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  billDate: {
    marginTop: 2,
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  billLogo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  emptyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  emptyIcon: {
    marginBottom: 18,
  },

  emptyTitle: {
    fontSize: 22,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
    textAlign: 'center',
    lineHeight: 28,
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
    height: 58,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  amount: {
    width: 80,
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
    textAlign: 'left',
  },

  currency: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  billInfo: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },

  billName: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Medium',
  },

  billDate: {
    marginTop: 2,
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  billLogo: {
    width: 42,
    height: 42,
    borderRadius: 21,
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
export const reportsStyles = StyleSheet.create({
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

  tabsRow: {
    height: 48,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
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
    height: 128,
    marginHorizontal: 34,
    marginTop: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryImage: {
    width: 150,
    height: 150,
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
    marginTop: 8,
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  summarySubText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  percentText: {
    fontSize: 16,
    color: colors.red,
    fontFamily: 'Tajawal-Medium',
  },

  countCard: {
    width: 145,
    height: 100,
    alignSelf: 'flex-end',
    marginRight: 34,
    marginTop: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },

  countValue: {
    marginTop: 12,
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  chartCard: {
    height: 250,
    marginHorizontal: 34,
    marginTop: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingTop: 14,
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
    height: 34,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  daysBtnText: {
    fontSize: 14,
    color: colors.blue,
    fontFamily: 'Tajawal-Regular',
  },

  chartImage: {
    width: '100%',
    height: 130,
    marginTop: 10,
  },

  chartGraph: {
    marginTop: 6,
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export const emptyReportsStyles = StyleSheet.create({
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
    height: 135,
    marginHorizontal: 34,
    marginTop: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryImage: {
    width: 145,
    height: 110,
    opacity: 0.45,
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

  emptyAmount: {
    marginTop: 10,
    fontSize: 24,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  summarySubText: {
    marginTop: 10,
    fontSize: 15,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  countCard: {
    height: 110,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  countIconBox: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },

  countTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Tajawal-Regular',
  },

  countValue: {
    marginTop: 8,
    fontSize: 22,
    color: colors.blue,
    fontFamily: 'Tajawal-Medium',
  },

  countSubText: {
    marginTop: 4,
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  chartCard: {
    height: 250,
    marginHorizontal: 34,
    marginTop: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingTop: 14,
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
    height: 34,
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

  emptyChart: {
    flex: 1,
    marginTop: 16,
    position: 'relative',
    justifyContent: 'center',
  },

  gridRow: {
    position: 'relative',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
    marginLeft: 55,
    marginRight: 8,
    opacity: 0.7,
  },

  emptyChartCenter: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: 58,
  },

  chartIconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  noDataText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  yAxis: {
    position: 'absolute',
    left: 0,
    top: 3,
    height: 150,
    justifyContent: 'space-between',
  },

  axisText: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  daysRow: {
    position: 'absolute',
    left: 50,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayText: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
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
    height: 105,
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
    width: 70,
    height: 70,
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
    fontSize: 16,
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
    height: 240,
    marginHorizontal: 34,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingTop: 14,
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
    height: 220,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: colors.white,
    padding: 14,
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
    alignItems: 'center',
    marginTop: 8,
  },

  donutWrapper: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },

  donutInner: {
    position: 'absolute',
    width: 74,
    height: 74,
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
    fontSize: 14,
    color: colors.gray,
    fontFamily: 'Tajawal-Regular',
  },

  categoriesGrid: {
    width: 190,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryName: {
    marginTop: 4,
    fontSize: 9,
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
    fontSize: 9,
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
    paddingBottom: 120,
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
    backgroundColor: colors.overlay,
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
    backgroundColor: colors.overlay,
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
    backgroundColor: colors.lightBlue,
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