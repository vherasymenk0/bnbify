'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from '~/app/themeProvider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >{children}</ThemeProvider>
    </>
  )
}
