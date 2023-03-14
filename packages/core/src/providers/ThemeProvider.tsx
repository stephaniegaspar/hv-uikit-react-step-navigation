import { useEffect, useMemo, useState } from "react";
import { parseTheme, HvThemeStructure } from "@hitachivantara/uikit-styles";
import { HvThemeContext } from "@hitachivantara/uikit-react-shared";
import type { HvThemeContextValue } from "@hitachivantara/uikit-react-shared";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { setElementAttrs } from "utils";
import { HvTheme } from "../types/theme";

export { HvThemeContext };
export type { HvThemeContextValue };

interface HvThemeProviderProps {
  children: React.ReactNode;
  themes: (HvTheme | HvThemeStructure)[];
  theme: string;
  colorMode: string;
  rootElementId?: string;
}

export const HvThemeProvider = ({
  children,
  themes: themesList,
  theme,
  colorMode,
  rootElementId,
}: HvThemeProviderProps) => {
  let pTheme = parseTheme(themesList, theme, colorMode);

  const [rootId] = useState<string | undefined>(rootElementId);
  const [activeTheme, setActiveTheme] = useState<HvTheme | HvThemeStructure>(
    pTheme.theme
  );
  const [selectedTheme, setSelectedTheme] = useState<string>(
    pTheme.selectedTheme
  );
  const [selectedMode, setThemeMode] = useState<string>(pTheme.selectedMode);
  const [colorModes, setColorModes] = useState<string[]>(pTheme.colorModes);
  const [themes] = useState<string[]>(themesList.map((t) => t.name));

  const changeTheme = (newTheme = selectedTheme, newMode = selectedMode) => {
    pTheme = parseTheme(themesList, newTheme, newMode);

    setActiveTheme(pTheme.theme);
    setSelectedTheme(pTheme.selectedTheme);
    setThemeMode(pTheme.selectedMode);
    setColorModes(pTheme.colorModes);

    setElementAttrs(
      pTheme.selectedTheme,
      pTheme.selectedMode,
      pTheme.styles,
      rootId
    );
  };

  useEffect(() => {
    changeTheme(theme, colorMode);
  }, [theme, colorMode]);

  const value = useMemo(
    () => ({
      themes,
      colorModes,
      activeTheme: activeTheme as HvTheme,
      selectedTheme,
      selectedMode,
      changeTheme,
      rootId,
    }),
    [
      themes,
      colorModes,
      activeTheme,
      selectedTheme,
      selectedMode,
      changeTheme,
      rootId,
    ]
  );

  const MuiTheme = createTheme({
    breakpoints: {
      values: {
        ...activeTheme.breakpoints.values,
      },
    },
  });

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <HvThemeContext.Provider value={value}>
        {children}
      </HvThemeContext.Provider>
    </MuiThemeProvider>
  );
};
