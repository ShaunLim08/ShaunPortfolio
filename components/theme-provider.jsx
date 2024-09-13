"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProviderProps({ children, ...props } ) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
