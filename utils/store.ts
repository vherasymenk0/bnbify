import { create } from 'zustand'
import { Booking } from './types'
import { DateRange } from 'react-day-picker'
import { defaultSelected } from '~/utils/calendar'

type PropertyState = {
  propertyId: string
  price: number
  bookings: Booking[]
  range: DateRange | undefined
  setRange: (range: PropertyState['range']) => void
  setBookingInfo: (range: Pick<PropertyState, 'bookings' | 'propertyId' | 'price'>) => void
}

export const useProperty = create<PropertyState>((set) => ({
  propertyId: '',
  price: 0,
  bookings: [],
  range: defaultSelected,
  setRange: (range) => set(() => ({ range })),
  setBookingInfo: (info) => set(() => ({ ...info })),
}))
