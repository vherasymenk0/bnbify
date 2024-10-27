'use client'
import { useState } from 'react'
import { Card } from '~/components/ui/card'
import RatingInput from '~/components/form/RatingInput'
import { Button } from '~/components/ui/button'
import { createReviewAction } from '~/utils/actions'
import { FormContainer } from '~/components/form/FormContainer'
import { SubmitButton } from '~/components/form/SubmitButton'
import { TextAreaInput } from '~/components/form/TextAreaInput'

function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)
  return (
    <div className="mt-8">
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input
              type="hidden"
              name="propertyId"
              value={propertyId}
            />
            <RatingInput name="rating"/>
            <TextAreaInput
              name="comment"
              label="your thoughts on this property"
              defaultValue="Amazing place !!!"
            />
            <SubmitButton className="mt-4">Submit</SubmitButton>
          </FormContainer>
        </Card>
      )}
    </div>
  )
}

export default SubmitReview
