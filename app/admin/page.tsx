import { ChartsLoadingContainer, StatsLoadingContainer, } from '~/components/admin/Loading'
import { Suspense } from 'react'
import { StatsContainer } from '~/components/admin/StatsContainer'
import { ChartsContainer } from '~/components/admin/ChartsContainer'

async function AdminPage() {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer/>}>
        <StatsContainer/>
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer/>}>
        <ChartsContainer/>
      </Suspense>
    </>
  )
}

export default AdminPage
