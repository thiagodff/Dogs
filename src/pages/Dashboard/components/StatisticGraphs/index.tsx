import React, { useEffect, useState } from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

import { Container, TotalAccess } from './styles'

interface IGraphData {
  x: string
  y: number
}

interface IDataStats {
  id: number
  title: string
  acessos: string
}

interface StatisticGraphsProps {
  data: IDataStats[]
}

const StatisticGraphs: React.FC<StatisticGraphsProps> = ({ data }) => {
  const [graph, setGraph] = useState<IGraphData[]>([])
  const [totalAccess, setTotalAccess] = useState(0)

  useEffect(() => {
    const graphData = data.map(post => ({
      x: post.title,
      y: Number(post.acessos)
    }))

    const accessValues = data.map(({ acessos }) => Number(acessos))
    const sumTotalAccess = accessValues.reduce(
      (accumulator, accessValue) => accumulator + accessValue
    )

    setTotalAccess(sumTotalAccess)
    setGraph(graphData)
  }, [data])

  return (
    <Container className="anime-left">
      <TotalAccess className="graph-item">
        <p>Acessos: {totalAccess}</p>
      </TotalAccess>

      <div className="graph-item">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>

      <div className="graph-item">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </Container>
  )
}

export default StatisticGraphs
