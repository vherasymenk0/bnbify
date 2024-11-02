import { fetchChartsData } from '~/utils/actions'
import { Chart } from '~/components/admin/Chart'

export const ChartsContainer = async () => {
  const bookings = await fetchChartsData()
  if (!bookings.length) return null

  return <Chart data={bookings}/>
}
