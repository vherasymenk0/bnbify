'use client'
import { deleteReviewAction } from '~/utils/actions'
import { FormContainer } from '~/components/form/FormContainer'
import { IconButton } from '~/components/form/IconButton'

export const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = () => deleteReviewAction({ reviewId })
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete"/>
    </FormContainer>
  )
}
