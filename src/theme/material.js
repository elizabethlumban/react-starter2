import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import { darkGray, accentColor, gray, primaryColor, unselectedWhite, white, disabledInputGray } from "./colors";

export const defaultTheme = {
    ...lightBaseTheme,
    palette: {
        ...lightBaseTheme.palette,
        primary1Color: primaryColor.toString(),
        accent1Color: accentColor.toString(),
        disabledColor: disabledInputGray.toString()
    },
    bottomNavigation: {
        backgroundColor: accentColor.toString(),
        selectedColor: white.toString(),
        unselectedColor: unselectedWhite.toString()
    },
    flatButton: {
        secondaryTextColor: gray.toString()
    },
    stepper: {
        connectorLineColor: darkGray.toString()
    }
};