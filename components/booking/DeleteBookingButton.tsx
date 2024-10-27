'use client'
import { deleteBookingAction } from '~/utils/actions'
import { FormContainer } from '~/components/form/FormContainer'
import { IconButton } from '~/components/form/IconButton'

export const DeleteBookingButton = ({ bookingId }: { bookingId: string }) => {
  const deleteBooking = () => deleteBookingAction({ bookingId })
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete"/>
    </FormContainer>
  )
}
