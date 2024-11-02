import { fetchReservationStats } from '~/utils/actions'
import { formatCurrency } from '~/utils/format'
import { StatsCard } from '~/components/admin/StatsCard'

async function Stats() {
  const stats = await fetchReservationStats()

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <StatsCard
        title="properties"
        value={stats.properties}
      />
      <StatsCard
        title="nights"
        value={stats.nights}
      />
      <StatsCard
        title="total"
        value={formatCurrency(stats.amount)}
      />
    </div>
  )
}

export default Stats
