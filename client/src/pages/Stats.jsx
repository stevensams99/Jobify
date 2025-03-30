import { ChartsContainer, StatsContainer } from '../components'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs/stats')
    return data
  } catch (error) {
    return error
  }
}

const Stats = () => {
  const { defaultsStats, monthlyApplications } = useLoaderData()
  console.log(monthlyApplications, defaultsStats)
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
