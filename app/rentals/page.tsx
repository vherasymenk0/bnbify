import EmptyList from '~/components/home/EmptyList'
import { fetchRentals } from '~/utils/actions'
import Link from 'next/link'

import { formatCurrency } from '~/utils/format'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'

import { IconButton } from '~/components/form/IconButton'
import { DeleteRental } from '~/components/rental/DeleteRental'

async function RentalsPage() {
  const rentals = await fetchRentals()

  if (!rentals.length) {
    return (
      <EmptyList
        heading="No rentals to display."
        message="Don't hesitate to create a rental."
      />
    )
  }

  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">Active Properties : {rentals.length}</h4>
      <Table>
        <TableCaption>A list of all your properties.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Nightly Rate </TableHead>
            <TableHead>Nights Booked</TableHead>
            <TableHead>Total Income</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map(({ totalNightsSum, orderTotalSum, name, price, id }) => (
            <TableRow key={id}>
              <TableCell>
                <Link
                  href={`/properties/${id}`}
                  className="underline text-muted-foreground tracking-wide"
                >
                  {name}
                </Link>
              </TableCell>
              <TableCell>{formatCurrency(price)}</TableCell>
              <TableCell>{totalNightsSum || 0}</TableCell>
              <TableCell>{formatCurrency(orderTotalSum)}</TableCell>

              <TableCell className="flex items-center gap-x-2">
                <Link href={`/rentals/${id}/edit`}>
                  <IconButton actionType="edit"></IconButton>
                </Link>
                <DeleteRental propertyId={id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RentalsPage
