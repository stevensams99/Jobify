import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useQuery } from '@tanstack/react-query'

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats')
    return response.data
  },
}
export const loader = (queryClient) => async () => {
  //fetch data using react query
  const data = await queryClient.ensureQueryData(statsQuery)
  return null
  //error will set up through error element in router in app.jsx
}

const Stats = () => {
  const { data } = useQuery(statsQuery)
  const { defaultsStats, monthlyApplications } = data
  return (
    <>
      <StatsContainer defaultStats={defaultsStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  )
}

export default Stats
