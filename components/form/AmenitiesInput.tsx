'use client'
import { useState } from 'react'
import { amenities, Amenity } from '~/utils/amenities'
import { Checkbox } from '~/components/ui/checkbox'

const getDefaultAmenities = (defaultValue?: Amenity[]): Amenity[] => {
  if (!defaultValue) return amenities

  return defaultValue?.map(({ name, selected }) => ({
    name,
    selected,
    icon: amenities.find((amenity) => amenity.name === name)!.icon,
  }))
}

export const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const defaultAmenities = getDefaultAmenities(defaultValue)
  const [selectedAmenities, setSelectedAmenities] = useState(defaultAmenities)

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((item) => {
        if (item.name === amenity.name) return { ...item, selected: !item.selected }
        return item
      })
    })
  }

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div
              key={amenity.name}
              className="flex items-center space-x-2"
            >
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
              >
                {amenity.name}
                <amenity.icon className="w-4 h-4"/>
              </label>
            </div>
          )
        })}
      </div>
    </section>
  )
}
