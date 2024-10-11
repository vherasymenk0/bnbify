'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from '~/app/themeProvider'
import { Toaster } from '~/components/ui/toaster'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster/>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >{children}</ThemeProvider>
    </>
  )
}
