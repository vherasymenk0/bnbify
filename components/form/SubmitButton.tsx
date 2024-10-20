'use client'

import { Button, ButtonProps } from '~/components/ui/button'
import { useFormStatus } from 'react-dom'
import { ReloadIcon } from '@radix-ui/react-icons'

export const SubmitButton = ({ children = 'Submit', size = 'lg', ...props }: ButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      size={size}
      {...props}
    >
      {pending ?
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>
          Please wait...
        </>
        : children}
    </Button>
  )
}
