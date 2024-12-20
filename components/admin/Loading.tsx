import { Card, CardHeader } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-20 rounded"/>
      </CardHeader>
    </Card>
  )
}

export const StatsLoadingContainer = () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <LoadingCard/>
      <LoadingCard/>
      <LoadingCard/>
    </div>
  )
}

export const ChartsLoadingContainer = () => {
  return <Skeleton className="mt-16 w-full h-[300px] rounded"/>
}
