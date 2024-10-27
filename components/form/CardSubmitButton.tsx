import { useFormStatus } from 'react-dom'
import { Button } from '~/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className=" p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className=" animate-spin"/>
      ) : isFavorite ? (
        <FaHeart/>
      ) : (
        <FaRegHeart/>
      )}
    </Button>
  )
}
