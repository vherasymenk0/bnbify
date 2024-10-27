'use client'
import { Button } from '~/components/ui/button'
import { createBookingAction } from '~/utils/actions'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { FormContainer } from '~/components/form/FormContainer'
import { SubmitButton } from '~/components/form/SubmitButton'

type Props = {
  checkIn: Date
  checkOut: Date
  propertyId: string
}

function ConfirmBooking({ propertyId, checkIn, checkOut }: Props) {
  const { userId } = useAuth()
  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button
          type="button"
          className="w-full"
        >
          Sign In to Complete Booking
        </Button>
      </SignInButton>
    )

  const createBooking = () => createBookingAction({
    propertyId,
    checkIn,
    checkOut,
  })

  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton className="w-full">Reserve</SubmitButton>
      </FormContainer>
    </section>
  )
}

export default ConfirmBooking
