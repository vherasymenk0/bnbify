'use client'
import { Calendar } from '~/components/ui/calendar'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useProperty } from '~/utils/store'

import {
  defaultSelected,
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
} from '~/utils/calendar'
import { useToast } from '~/hooks/use-toast'

function BookingCalendar() {
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)
  const { bookings, setRange: setStoreRange } = useProperty((state) => state)
  const { toast } = useToast()
  const blockedPeriods = generateBlockedPeriods(bookings)
  const unavailableDates = generateDisabledDates(blockedPeriods)

  useEffect(() => {
    const selectedRange = generateDateRange(range)
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected)
        toast({
          description: 'Some dates are booked. Please select again.',
        })
        return true
      }
      return false
    })

    setStoreRange(range)
  }, [range, bookings])

  return (
    <Calendar
      mode="range"
      defaultMonth={new Date()}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  )
}

export default BookingCalendar
