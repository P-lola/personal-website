import { useState } from 'react'
import { 
  analyzeStock, 
  VerticalAlignContainer, 
  VerticalAlignContent,
  DashboardGriContainer,
  MarginSpace,
  DashboardTitle,
  DashboardSubTitle,
  LoadingMutatingContainer,
  BackButton,
  InputContainer,
  AnalyzeInput,
  AnalyzeButton,
  DashboardLink,
  PrimaryColor
 } from "./stockAnalysisDashboard"
import { MutatingDots } from 'react-loader-spinner'
import './stockAnalysisDashboard.css'
import DashboardGrid from './dashboardGrid'

function StockAnalysisDashboard() {
  
  const [stockData, setStockData] = useState<any>()
  const [stockSymbol, setStockSymbol] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [gotData, setGotData] = useState(false)

  function goBack () {
    setGotData(false)
    setIsLoading(false)
  }


  async function runStockAnalysis () {
    setIsLoading(true)
    const gotStockData = await analyzeStock(stockSymbol)
    if (gotStockData) {
      setStockData(gotStockData)
      setGotData(true)
      setIsLoading(false)
    } else {
      goBack()
    }
  }

  if (gotData) {
    return (
      <VerticalAlignContainer>
       <VerticalAlignContent>
        <DashboardGriContainer>
          <DashboardTitle><DashboardLink href={stockData.basicInfo.website} target="_blank" rel="noopener noreferrer">
            {stockData.basicInfo.longName}
          </DashboardLink></DashboardTitle>
        </DashboardGriContainer>
        <DashboardGriContainer>
          <DashboardSubTitle>
            {stockData.basicInfo.sector}
          </DashboardSubTitle>
          <MarginSpace></MarginSpace>
          <BackButton onClick={() => goBack()}>BACK</BackButton>
          <div>
            <DashboardGrid
            stockData={stockData}>
            </DashboardGrid>
          </div>
        </DashboardGriContainer>
       </VerticalAlignContent>
      </VerticalAlignContainer>
    )
  }


  return (
    <VerticalAlignContainer>
      <VerticalAlignContent>
        <div>
          <DashboardTitle id="stock-analysis-dashboard-title">STOCK ANALYSIS DASHBOARD</DashboardTitle>
          {isLoading ? (
            <LoadingMutatingContainer>
              <MarginSpace></MarginSpace>
              <MutatingDots
                visible={true}
                height="100"
                width="100"
                color={PrimaryColor}
                secondaryColor="white"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
          </LoadingMutatingContainer>
        ) : (
          <div>
            <DashboardSubTitle id="stock-analysis-dashboard-subtitle">
              Put in a stock symbol you'd like to analyze (e.g. MSFT)
          </DashboardSubTitle>
          <MarginSpace></MarginSpace>
          <InputContainer>
            <AnalyzeInput
              value={stockSymbol}
              onChange={e => setStockSymbol(e.target.value)}>
            </AnalyzeInput>
            <AnalyzeButton className="stock-analysis-dashboard-button" onClick={() => runStockAnalysis()}>Analyze</AnalyzeButton>
          </InputContainer>
          </div>
        )}
        </div>
      </VerticalAlignContent>
    </VerticalAlignContainer>
  )
}

export default StockAnalysisDashboard
