import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
import { inputClasses } from "@core/components";
import { CSSProperties } from "react";
import Select from "./Select";
import ButtonIconTooltip from "./ButtonIconTooltip";
import paginationClasses from "./paginationClasses";

const hoverColor = theme.colors.atmo3;

export const StyledRoot = styled("div")({
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
  marginTop: theme.space.sm,
  [`& .${paginationClasses.pageSizeInput}`]: {
    ...(theme.typography.label as CSSProperties),
  },
  [`& .${paginationClasses.pageSizeInputContainer}`]: {
    width: 40,
    minWidth: 40,
    maxWidth: theme.spacing(8),
  },
  [`&& .${paginationClasses.pageSizeInputRoot}`]: {
    backgroundColor: "transparent",
    "&:focus, &:focus-within, &:hover": {
      backgroundColor: hoverColor,
    },
  },
});

export const StyledPageSizeOptions = styled("div")({
  display: "flex",
  position: "absolute",
  height: 32,
  marginRight: 40,
  top: "50%",
  transform: "translateY(-50%)",
  left: "0",
});

export const StyledPageSizePrev = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  padding: "8px 0",
});

export const StyledSelect = styled(Select)({
  display: "inline-block",
  margin: `0px ${theme.space.xs}`,
  width: "auto",
});

export const StyledPageSizeTextContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "32px",
  padding: "8px 0",
});

export const StyledPageNavigator = styled("div")({
  display: "flex",
  alignItems: "stretch",
  height: "32px",
  "&>*": {
    margin: `0 4px`,
  },
});

export const StyledButtonIconTooltip = styled(ButtonIconTooltip)({
  padding: 0,
});

export const StyledPageInfo = styled("div")({
  display: "inline-block",
  whiteSpace: "nowrap",
  height: "32px",
  lineHeight: "32px",
});

export const StyledPageJump = styled("div")({
  display: "inline-block",
  marginRight: `4px`,
  [`& .${inputClasses.inputRoot}`]: {
    [`& .${paginationClasses.pageSizeInput}`]: {
      paddingLeft: `4px`,
      paddingRight: `4px`,
      margin: 0,
      textAlign: "center",
      borderRadius: theme.radii.base,
      MozAppearance: "textfield",
      "&:focus": {
        backgroundColor: hoverColor,
      },
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
});
