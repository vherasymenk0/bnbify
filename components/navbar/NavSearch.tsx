'use client'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useEffect, useState } from 'react'

export const NavSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParamValue = searchParams.get('search')

  const [search, setSearch] = useState(searchParamValue?.toString() || '')

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  useEffect(() => {
    if (!searchParamValue) setSearch('')
  }, [searchParamValue])

  return (
    <Input
      type="search"
      placeholder="find a property..."
      className="max-w-xs dark:bg-muted "
      onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
      value={search}
    />
  )
}

export default NavSearch
