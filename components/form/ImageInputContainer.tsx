'use client'
import { ActionFunction } from '~/utils/types'
import { PropsWithChildren, useState } from 'react'
import { LuUser2 } from 'react-icons/lu'
import Image from 'next/image'
import { SubmitButton } from '~/components/form/SubmitButton'
import { FormContainer } from '~/components/form/FormContainer'
import { ImageInput } from '~/components/form/ImageInput'

interface Props extends PropsWithChildren {
  action: ActionFunction
  image: string
  name: string
  text: string
}

export const ImageInputContainer = ({ image, name, text, action, children }: Props) => {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false)
  const UserIcon = (<LuUser2 className="w-24 h-24 bg-primary text-white rounded mb-4"/>)

  return (
    <div>
      {image ?
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
        : UserIcon
      }
      <SubmitButton
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev => !prev))}
      >
        {text}
      </SubmitButton>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {children}
            <ImageInput/>
            <SubmitButton size="sm"/>
          </FormContainer>
        </div>
      )}
    </div>
  )
}
