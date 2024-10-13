import { LuUser2 } from 'react-icons/lu'
import { fetchProfileImage } from '~/utils/actions'
import Image from 'next/image'

export const UserIcon = async () => {
  const profileImg = await fetchProfileImage()

  if (!profileImg) return (
    <LuUser2 className="w-6 h-6 bg-primary text-white rounded-full">UserIcon</LuUser2>
  )

  return (
    <Image src={profileImg} alt="profile image" width={24} height={24} className="rounded-full object-cover"/>
  )
}
