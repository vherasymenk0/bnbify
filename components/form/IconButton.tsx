'use client'
import { LuPenSquare, LuTrash2 } from 'react-icons/lu'
import { Button } from '~/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'

type actionType = 'edit' | 'delete';
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus()

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LuPenSquare/>
      case 'delete':
        return <LuTrash2/>
      default:
        throw new Error(`Invalid action type: ${actionType}`)
    }
  }

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className=" animate-spin"/> : renderIcon()}
    </Button>
  )
}
