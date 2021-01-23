import React, { lazy, Suspense, useEffect } from 'react'

import useFetch from '../../../../hooks/fetch'

import { GET_STATISTICS } from '../../../../services/api'

import Error from '../../../../components/Error'
import Head from '../../../../components/Head'
import Loading from '../../../../components/Loading'

import { ContainerNoDataStats } from './styles'

const StatisticGraphs = lazy(() => import('../StatisticGraphs'))

export interface IDataStats {
  id: number
  title: string
  acessos: string
}

const UserStatistics: React.FC = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { options, url } = GET_STATISTICS()
      await request({ options, url })
    }

    getData()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (Object.keys(data).length > 0) {
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />

        <StatisticGraphs data={(data as unknown) as IDataStats[]} />
      </Suspense>
    )
  }
  return (
    <ContainerNoDataStats>
      <h1>Nenhum dado foi encontrado</h1>
    </ContainerNoDataStats>
  )
}

export default UserStatistics
