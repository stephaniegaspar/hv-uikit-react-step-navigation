import { colors } from "../tokens/colors";
import { shadows } from "../tokens/shadows";
import { makeTheme } from "../makeTheme";
import { Theme } from "../types";

const ds3 = makeTheme((theme: Theme) => ({
  colors: {
    modes: {
      dawn: { ...colors.common, ...colors.light },
      wicked: { ...colors.common, ...colors.dark },
    },
  },
  space: {
    base: 10,
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "60px",
    xl: "90px",
  },
  breakpoints: {
    unit: "px",
    step: 5,
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1270,
      xl: 1920,
    },
  },
  typography: {
    display: {
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 600,
    },
    title1: {
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 600,
    },
    title2: {
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 600,
    },
    title3: {
      color: theme.colors.acce1,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 600,
    },
    title4: {
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
    },
    label: {
      color: theme.colors.acce1,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    body: {
      color: theme.colors.acce1,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    caption1: {
      color: theme.colors.acce1,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 400,
    },
    caption2: {
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.xs,
      lineHeight: theme.lineHeights.sm,
    },
    // LEGACY
    ["5xlTitle"]: {
      color: theme.colors.acce1,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 600,
    },
    ["4xlTitle"]: {
      color: theme.colors.acce1,
      fontSize: "52px",
      letterSpacing: "0.02em",
      lineHeight: "60px",
      fontWeight: 400,
    },
    xxlTitle: {
      color: theme.colors.acce1,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 400,
    },
    lTitle: {
      color: theme.colors.acce1,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 400,
    },
    sTitle: {
      color: theme.colors.acce1,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 400,
    },
    xxsTitle: {
      color: theme.colors.acce1,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 400,
    },
    sectionTitle: {
      color: theme.colors.acce1,
      fontSize: "14px",
      letterSpacing: "0.32em",
      lineHeight: "18px",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    placeholderText: {
      color: theme.colors.atmo5,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
  },
  dropdown: {
    borderRadius: "2px",
    headerBorder: `1px solid ${theme.colors.atmo4}`,
    headerBorderHover: `1px solid ${theme.colors.acce4}`,
    disabledColor: theme.colors.atmo5,
    readOnlyBorder: "none",
    readOnlyBackgroundColor: theme.colors.atmo1,
    placeholderColor: theme.colors.atmo5,
    dropdownHeaderInvalidBorder: `1px solid ${theme.colors.sema4}`,
    dropdownHeaderOpenBorder: `1px solid ${theme.colors.atmo1}`,
    listBackgroundColor: theme.colors.atmo1,
    listBorder: "none",
    listBorderRadius: `none`,
    listContainerPadding: theme.space.sm,
    searchContainerMargin: theme.space.xs,
  },
  button: {
    borderRadius: theme.radii.base,
    marginIconRight: "0px",
    marginIconLeft: "-8px",
    semanticColor: "rgba(251, 252, 252, 0.3)",
    semanticColorDisabled: "rgba(251, 252, 252, 0.1)",
    hoverColor: theme.colors.atmo3,
  },
  header: {
    color: theme.colors.sema4,
    height: "44px",
    borderTopThickness: "4px",
    borderTopColor: `${theme.colors.sema4}`,
    selectedItemBorderTopColor: theme.colors.acce3,
    selectedItemBorderTopThickness: "2px",
    selectedItemBorderBottomColor: "transparent",
    selectedItemBorderBottomThickness: "0px",
    shadow: theme.shadows.md,
  },
  card: {
    iconMargin: "-24px",
    outline: "none",
    borderRadius: "0px",
    hoverColor: theme.colors.atmo4,
  },
  tab: {
    padding: "0 20px",
    hoverBackgroundColor: "transparent",
    hoverBackgroundBorderRadius: "0px",
    hoverUnderlineBackgroundColor: theme.colors.atmo5,
  },
  list: {
    hoverColor: theme.colors.atmo3,
    disabledBackgroundColor: "transparent",
  },
  dialog: {
    borderRadius: "0",
    margin: "100px",
  },
  baseCheckBox: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  checkbox: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  baseDropdown: {
    shadow: shadows.md,
    placeholderColor: theme.colors.atmo5,
    borderColor: theme.colors.atmo4,
    hoverBorderColor: theme.colors.acce1,
    disabledBorderColor: theme.colors.atmo4,
    disabledBackgroundColor: theme.colors.atmo3,
    readOnlyBorder: "none",
    readOnlyBackgroundColor: theme.colors.atmo1,
    openBorderColor: theme.colors.atmo1,
  },
  baseRadio: {
    hoverColor: theme.colors.atmo3,
    hoverBorderRadius: "0px",
  },
  baseSwitch: {
    padding: 0,
    height: "16px",
    width: "32px",
    track: {
      opacity: 1,
      borderRadius: "15px",
      height: "16px",
      width: "32px",
      border: `solid 1px ${theme.colors.acce1}`,
      backgroundColor: theme.colors.atmo2,
      hoverBackgroundColor: "transparent",
    },
    thumb: {
      width: "12px",
      height: "12px",
      left: "-9px",
      border: `solid 1px ${theme.colors.acce1}`,
      backgroundColor: theme.colors.atmo1,
      marginLeft: "2px",
      marginTop: 0,
      boxShadow: "none",
    },
    disabled: {
      thumbBackgroundColor: theme.colors.atmo3,
      thumbBorder: `solid 1px ${theme.colors.atmo5}`,
      trackBackgroundColor: theme.colors.atmo3,
      trackBorder: `solid 1px ${theme.colors.atmo5}`,
      trackOpacity: 1,
    },
    checkedTrackBackgroundColor: theme.colors.acce1,
    hoverBackgroundColor: "transparent",
    hoverBaseBackgroundColor: "transparent",
    checkedOpacity: 1,
    borderRadius: "0px",
    focusBorderRadius: "8px",
  },
  baseInput: {
    underlineHeight: "1px",
    placeholderColor: theme.colors.atmo5,
    borderColor: "none",
    hoverColor: theme.colors.acce1,
    disabledBorderColor: "transparent",
    disabledTextColor: theme.colors.atmo5,
    disabledBackgroundColor: theme.colors.atmo3,
    readOnlyBorderColor: "transparent",
    readOnlyTextColor: theme.colors.acce1,
    readOnlyBackgroundColor: theme.colors.atmo1,
    multilineBorderColor: theme.colors.atmo4,
    multilineDisabledBorderColor: theme.colors.atmo4,
  },
  radio: {
    hoverColor: theme.colors.atmo3,
    borderRadius: "0px",
  },
  tagsInput: {
    disabledBackgroundColor: theme.colors.atmo1,
    readOnlyBackgroundColor: theme.colors.atmo1,
    hoverColor: theme.colors.acce1,
    readOnlyBorderColor: "transparent",
  },
  switch: {
    invalidPaddingBottom: "0px",
  },
  fileUploader: {
    dropZone: {
      borderColor: theme.colors.atmo4,
      backgroundColor: theme.colors.atmo2,
      borderRadius: "0px",
      borderColorDrag: theme.colors.acce1,
      borderColorDisabled: theme.colors.atmo4,
      borderType: "dotted",
    },
    fileList: {
      itemBorder: "none",
      itemBorderRadius: "0px",
    },
    file: {
      progressHeight: "2px",
      borderWidth: "1px",
      previewContainerSize: "52px",
      imageSize: "100%",
    },
    preview: {
      buttonSize: "52px",
      overlayColor: theme.colors.atmo3,
      overlayOpacity: "0.75",
      overlayBorderRadius: "0px",
    },
  },
  dropDownMenu: {
    borderRadius: "0px",
    hoverColor: theme.colors.atmo3,
    borderOpened: "none",
    borderClosed: "none",
    extensionHeight: theme.spacing(1.25),
    extensionBorderColor: "transparent",
  },
  pagination: {
    pageSizeBorderColor: "transparent",
    pageSizeBorderRadius: "0px",
    pageJumpTextAlign: "right",
  },
  actionsGeneric: { buttonSize: "sm" },
  bulkActions: {
    separatorDisplay: "none",
    border: "none",
    backgroundColor: theme.colors.atmo1,
    padding: "0px",
    anySelectedBackgroundColor: theme.colors.sema7,
    buttonSize: "sm",
  },
  table: {
    headerHoverColor: theme.colors.atmo3,
    headerBorderTopColor: theme.colors.atmo4,
    selectedRowBackgroundColor: theme.colors.atmo1,
    rowBackgroundColor: "transparent",
    rowHoverColor: theme.colors.atmo1,
    rowStripedBackgroundColor: theme.colors.atmo1,
    rowExpandBackgroundColor: theme.colors.atmo1,
  },
}));

export default ds3;
