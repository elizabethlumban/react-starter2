import {
  brandBlack,
  white,
  brandRed,
  brandMedGrey1,
  brandMedGrey2,
  brandLightGrey,
  fadedBrandBlack,
  fadedBrandYellow,
  brandBrightRed,
  brandDarkRed,
  brandGrey,
} from "./colors";

import { createMuiTheme } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: brandRed.toString(),
      // light: brandRed.toString(),
      // dark: brandRed.toString(),
    },
    secondary: {
      main: brandBlack.toString(),
      // light: brandBlack.toString(),
      // dark: brandBlack.toString(),
    },
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    },
    MuiInputLabel: {
      shrink: true,
      color: brandBlack.toString(),
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        maxHeight: "64px",
        display: "flex",
        alignItems: "flex-start",
      },
      colorDefault: {
        backgroundColor: brandBlack.toString(),
      },
      colorPrimary: {
        backgroundColor: brandBlack.toString(),
      },
    },
    MuiToolbar: {
      root: {
        maxHeight: "60px",
        minHeight: "60px",
        width: "inherit",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: brandBlack.toString(),
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      },
    },
    MuiButton: {
      root: {
        margin: "0 4px",
        borderRadius: 0,
        textTransform: "none",
        "&$disabled": {
          backgroundColor: brandLightGrey.toString(),
        },
      },
      contained: {
        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.5)",
        backgroundColor: brandBrightRed.toString(),
        color: "white",
        "&:hover": {
          backgroundColor: brandDarkRed.toString(),
        },
      },
      outlined: {
        boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.5)",
        border: `1px solid ${brandGrey.toString()}`,
        color: brandGrey.toString(),
      },
      containedPrimary: {
        minWidth: "133px",
        height: "48px",
        color: white.toString(),
        backgroundColor: brandBlack.toString(),
        "&:hover": {
          backgroundColor: fadedBrandBlack.toString(),
        },
      },
      containedSecondary: {
        minWidth: "133px",
        height: "48px",
        color: white.toString(),
        backgroundColor: brandBlack.toString(),
        "&:hover": {
          backgroundColor: fadedBrandYellow.toString(),
        },
      },
      outlinedPrimary: {
        minWidth: "133px",
        height: "48px",
        color: brandBlack.toString(),
        border: `1px solid ${brandBlack.toString()}`,
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: brandBlack.toString(),
          color: white.toString(),
          border: `1px solid ${brandBlack.toString()}`,
        },
      },
      outlinedSecondary: {
        minWidth: "133px",
        height: "40px",
        color: brandBlack.toString(),
        border: `1px solid ${brandBlack.toString()}`,
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: fadedBrandBlack.toString(),
          color: brandBlack.toString(),
          border: `1px solid ${brandBlack.toString()}`,
        },
      },
      text: {
        minWidth: "133px",
        height: "48px",
        color: brandMedGrey2.toString(),
        background: "transparent",
        "&$disabled": {
          backgroundColor: "transparent",
        },
      },
      textPrimary: {
        color: "white",
      },
      textSecondary: {
        minWidth: "75px",
        height: "40px",
        color: brandBlack.toString(),
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: fadedBrandBlack.toString(),
        },
      },
    },
    MuiIconButton: {
      root: {
        color: "white",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.1)",
        },
      },
      colorSecondary: {
        "&:hover": { backgroundColor: brandMedGrey2.toString() },
      },
      edgeEnd: {
        marginRight: "auto",
      },
    },
    MuiFormGroup: {
      root: {
        flexDirection: "row",
      },
    },
    MuiFormHelperText: {
      root: {
        "&$error": {
          marginTop: "0",
          marginBottom: "5px",
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: brandBlack.toString(),
        fontSize: "1.3rem",
        fontWeight: "bold",
        "&$disabled": {
          color: "black important!",
        },
      },
    },

    MuiGridListTileBar: {
      root: {
        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
        alignItems: "flex-end",
      },
      title: {
        fontFamily: "Roboto Condensed Bold",
        whiteSpace: "inherit",
        lineHeight: "1.25rem",
        paddingBottom: "0.5rem",
      },
    },
    MuiListSubheader: {
      root: { color: brandRed.toString(), fontFamily: "Roboto Condensed Bold", fontSize: "1rem", lineHeight: "2.5rem" },
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    MuiInputBase: {
      root: {
        border: `solid 1px ${brandMedGrey1.toString()}`,
        backgroundColor: white.toString(),
        margin: "10px 0",
        padding: "4px 5px",
        color: brandBlack.toString(),
        fontSize: "0.875rem",
      },
    },
    MuiInput: {
      root: {
        "&$disabled": {
          color: brandBlack.toString(),
          backgroundColor: brandLightGrey.toString(),
        },
      },
      inputMultiline: {
        height: "100%",
        padding: "0.5rem",
      },
      underline: {
        "&:before": {
          borderBottom: `1px solid ${white.toString()}`,
        },
      },
    },
    MuiSelect: {
      select: {
        height: "auto",
        "&:focus": {
          backgroundColor: "none",
        },
      },
    },
    MuiNativeSelect: {
      select: {
        "&:focus": {
          backgroundColor: "none",
        },
      },
    },
    MuiCollapse: {
      wrapperInner: {
        lineHeight: "1.5rem",
      },
    },
    MuiSnackbarContent: {
      root: {
        width: "inherit",
        backgroundColor: "inherit",
        boxShadow: "none",
      },
    },
    MuiDialogActions: {
      root: {
        padding: "10px",
        justifyContent: "space-between",
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: brandBlack.toString(),
        color: white.toString(),
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: brandBlack.toString(),
      },
      rounded: {
        borderRadius: "0px",
      },
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: "none",
        borderBottom: "1px solid #efefef",
        "&$expanded": {
          boxShadow:
            "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
          margin: "0.5rem 0",
          marginBottom: "0.5rem !important",
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: "0",
      },
      content: {
        margin: 0,
      },
    },
  },
});
