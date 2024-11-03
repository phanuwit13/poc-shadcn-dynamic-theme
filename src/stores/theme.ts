import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ThemeConfig = {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
  radius: string
}

type ThemeStore = {
  configs: ThemeConfig | null
  setConfigs: (configs: ThemeConfig) => void
}

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      configs: null,
      setConfigs: (configs: ThemeConfig) => set({ configs }),
    }),
    {
      name: 'theme-config',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useThemeStore
