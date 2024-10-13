'use client'

import { useFormState } from 'react-dom'
import { PropsWithChildren, useEffect } from 'react'
import { ActionFunction } from '~/utils/types'
import { useToast } from '~/hooks/use-toast'

interface Props extends PropsWithChildren {
  action: ActionFunction
}

const initState = {
  message: ''
}

export const FormContainer = ({ action, children }: Props) => {
  const [state, formAction] = useFormState(action, initState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) toast({ description: state.message })
  }, [state, toast])

  return (
    <form action={formAction}>{children}</form>
  )
}
