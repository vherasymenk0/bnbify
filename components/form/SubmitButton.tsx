'use client'

import { Button } from '~/components/ui/button'
import { useFormStatus } from 'react-dom'
import { ReloadIcon } from '@radix-ui/react-icons'

type SubmitButtonProps = {
  className?: string
  text?: string
}

export const SubmitButton = ({ text = 'submit', className = '' }: SubmitButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className={className} disabled={pending} size="lg">
      {pending ?
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin"/>
          Please wait...
        </>
        : text}
    </Button>
  )
}
