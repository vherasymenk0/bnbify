import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { Button } from '~/components/ui/button'
import { LuAlignLeft } from 'react-icons/lu'
import { UserIcon } from '~/components/navbar/UserIcon'
import { links } from '~/utils/links'
import Link from 'next/link'

export const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6"/>
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        {
          links.map(({ href, label }) => (
            <DropdownMenuItem key={href}>
              <Link href={href} className="capitalize w-full">
                {label}
              </Link>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
