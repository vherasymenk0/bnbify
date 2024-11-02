'use client'
import { deleteRentalAction } from '~/utils/actions'
import { FormContainer } from '~/components/form/FormContainer'
import { IconButton } from '~/components/form/IconButton'

export const DeleteRental = ({ propertyId }: { propertyId: string }) => {
  const deleteRental = () => deleteRentalAction({ propertyId })

  return (
    <FormContainer action={deleteRental}>
      <IconButton actionType="delete"/>
    </FormContainer>
  )
}
