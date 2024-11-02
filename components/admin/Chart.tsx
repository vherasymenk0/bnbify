'use client'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts'

type ChartPropsType = {
  data: {
    date: string
    count: number
  }[]
}

export const Chart = ({ data }: ChartPropsType) => {
  return (
    <section className="mt-24">
      <h1 className="text-4xl font-semibold text-center">Monthly Bookings</h1>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={data}
          margin={{ top: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis allowDecimals={false}/>
          <Tooltip/>
          <Bar
            dataKey="count"
            fill="#F97215"
            barSize={75}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
