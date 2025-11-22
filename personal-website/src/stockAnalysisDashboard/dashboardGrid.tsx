import { useEffect } from 'react';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { DashboardGridContent } from './stockAnalysisDashboard'
import NumberStat from './numberStat'
import LineChartContent from './lineChartContent'
import NewsLinks from './newsLink'
import SentimentDoughnut from './newsSentimentAnalysis'


function DashboardGrid({stockData}:{stockData: any}) {

  useEffect(() => {
   GridStack.init();
  })  

  return (
    <div>
      Dashboard Grid
      <div className="grid-stack">
        {/* First Row */}
        <div className="grid-stack-item" gs-w="3" gs-h="1.3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value={stockData.basicInfo.marketCap}
            label='Market Cap'
            center={true}
            ></NumberStat>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3" gs-h="1.3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value={stockData.basicInfo.fullTimeEmployees}
            label='Employees'
            center={true}
            ></NumberStat>
            </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3" gs-h="1.3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value={stockData.basicInfo.totalRevenue}
            label='Total Revenue'
            center={true}
            ></NumberStat>
            </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="3" gs-h="1.3">
          <DashboardGridContent className="grid-stack-item-content">
            <NumberStat 
            value={stockData.basicInfo.trailingEps}
            label='Earnings Per Share'
            center={true}
            ></NumberStat>
            </DashboardGridContent>
        </div>
        {/* Second Row */}
        <div className="grid-stack-item" gs-w="10" gs-h="3">
          <DashboardGridContent className="grid-stack-item-content">
            <LineChartContent
              priceHistory={stockData.priceHistory}>
            </LineChartContent>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="2" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <div style={{marginBottom: '5px', fontSize: '12px'}}>Future Earnings</div>
            {stockData.futureEarningsDates.map((nextDate: string) => (
              <div>{nextDate}</div>
            ))}
          </DashboardGridContent>
        </div>
        {/* Third Row */}
        <div className="grid-stack-item" gs-w="6" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <NewsLinks
              newsLinks={stockData.newsArticles}>
            </NewsLinks>
          </DashboardGridContent>
        </div>
        <div className="grid-stack-item" gs-w="4" gs-h="2">
          <DashboardGridContent className="grid-stack-item-content">
            <SentimentDoughnut
              sentimentData={stockData.newsTextAnalysis}>
            </SentimentDoughnut>
          </DashboardGridContent>
        </div>
      </div>
    </div>
  )
}

export default DashboardGrid
