import { ReactNode, createContext } from "react";

export interface AppSettingsData {
  isSubapp: boolean;
  theme: "dark" | "light";
  language: string;
}

interface AppSettingsProviderProps {
  settings: AppSettingsData;
  children: ReactNode;
}

export const AppSettingsContext = createContext<AppSettingsData>({
  isSubapp: false,
  theme: "dark",
  language: "en-US",
});

function AppSettingsProvider({ settings, children }: AppSettingsProviderProps) {
  return (
    <AppSettingsContext.Provider value={settings}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export default AppSettingsProvider;
