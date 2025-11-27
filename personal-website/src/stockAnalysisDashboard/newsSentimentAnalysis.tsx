import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

interface SentimentData {
  data: {
    sentiment: {
      pos: number
      neg: number
      neu: number
    }
  };
  metadata: {
    sentencesAnalyzed: number
    wordsAnalyzed: number
  }
}

interface SentimentDoughnutProps {
  sentimentData: SentimentData
}

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
`

const ChartWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const DoughnutWrapper = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`

const LegendWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 180px;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: white;
  
  &:last-child {
    grid-column: span 2;
    justify-content: center;
  }
`

const LegendColor = styled.div<{ color: string }>`
  width: 20px;
  height: 10px;
  background-color: ${props => props.color};
  border-radius: 2px;
  flex-shrink: 0;
`

const TextSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`

const StatLabel = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.8);
`

const SentimentDoughnut: React.FC<SentimentDoughnutProps> = ({ sentimentData }) => {
  const positivePercent = Math.round(sentimentData.data.sentiment.pos * 100)
  const negativePercent = Math.round(sentimentData.data.sentiment.neg * 100)
  const neutralPercent = Math.round(sentimentData.data.sentiment.neu * 100)

  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: [positivePercent, negativePercent, neutralPercent],
        backgroundColor: [
          '#6ee7b7',
          '#f87171',
          '#90b6fa',
        ],
        borderColor: [
          '#34d399',
          '#ef4444',
          '#60a5fa',
        ],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: '#90b6fa',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return context.label + ': ' + context.parsed + '%'
          }
        }
      },
    },
    cutout: '65%',
  }

  return (
    <ChartContainer>
      <ChartWrapper>
        <DoughnutWrapper>
          <Doughnut data={data} options={options} />
        </DoughnutWrapper>
        <LegendWrapper>
          <LegendItem>
            <LegendColor color="#6ee7b7" />
            <span>Positive</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#f87171" />
            <span>Negative</span>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#90b6fa" />
            <span>Neutral</span>
          </LegendItem>
        </LegendWrapper>
      </ChartWrapper>
      <TextSection>
        <Title>News Text Analysis</Title>
        <StatItem>
          <StatValue>{sentimentData.metadata.sentencesAnalyzed}</StatValue>
          <StatLabel>Sentences Analyzed</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{sentimentData.metadata.wordsAnalyzed}</StatValue>
          <StatLabel>Words Analyzed</StatLabel>
        </StatItem>
      </TextSection>
    </ChartContainer>
  )
}

export default SentimentDoughnut