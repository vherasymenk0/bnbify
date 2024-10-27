'use client'

import { useProperty } from '~/utils/store'
import BookingForm from '~/components/booking/BookingForm'
import ConfirmBooking from '~/components/booking/ConfirmBooking'

function BookingContainer() {
  const { range, price, propertyId } = useProperty((state) => state)

  if (!range || !range.from || !range.to) return null
  if (range.to.getTime() === range.from.getTime()) return null

  return (
    <div className="w-full">
      <BookingForm
        price={price}
        checkIn={range.from}
        checkOut={range.to}
      />
      <ConfirmBooking
        propertyId={propertyId}
        checkIn={range.from}
        checkOut={range.to}
      />
    </div>
  )
}

export default BookingContainer
