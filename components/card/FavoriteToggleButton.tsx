import { auth } from '@clerk/nextjs/server'
import { fetchFavoriteId } from '~/utils/actions'
import { CardSignInButton } from '~/components/form/CardSignInButton'
import FavoriteToggleForm from '~/components/card/FavoriteToggleForm'

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth()
  if (!userId) return <CardSignInButton/>
  const favoriteId = await fetchFavoriteId({ propertyId })

  return (
    <FavoriteToggleForm
      favoriteId={favoriteId}
      propertyId={propertyId}
    />
  )
}

export default FavoriteToggleButton
