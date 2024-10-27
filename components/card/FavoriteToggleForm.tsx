'use client'

import { usePathname } from 'next/navigation'
import { toggleFavoriteAction } from '~/utils/actions'
import { FormContainer } from '~/components/form/FormContainer'
import { CardSubmitButton } from '~/components/form/CardSubmitButton'

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname()
  const toggleAction = () => toggleFavoriteAction({ propertyId, favoriteId, pathname })

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId}/>
    </FormContainer>
  )
}

export default FavoriteToggleForm
