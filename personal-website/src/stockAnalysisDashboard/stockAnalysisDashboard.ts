import styled from 'styled-components'

export async function analyzeStock (stockSymbolToAnalyze: string) {
  if (stockSymbolToAnalyze.length == 0){
    alert('You must put in a ticker symbol before running')
    return
  }
  const url = 'http://127.0.0.1:5000/analyze-stock/' + stockSymbolToAnalyze

  const response = await fetch(url)
  if (!response.ok) {
    alert('There was a problem getting the analysis for ' + stockSymbolToAnalyze)
    return 
  }
  const data = await response.json()
  return data
}

export const VerticalAlignContainer = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`

export const PrimaryColor = '#90b6fa'

export const VerticalAlignContent = styled.div`
  display: table-cell;
  vertical-align:middle;
`
export const DashboardGriContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border: solid black 1px;
`
export const DashboardGridContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 15px;
`

