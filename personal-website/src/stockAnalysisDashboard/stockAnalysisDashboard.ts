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
  min-height: 100%;
  display: table;
`

export const PrimaryColor = '#90b6fa'

export const VerticalAlignContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 2px 0;
`
export const DashboardGriContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`
export const DashboardGridContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 5px;
`
export const MarginSpace = styled.div`
  margin-bottom: 15px;
`
export const DashboardTitle = styled.div`
  font-size: 25px;
  text-align: center;
`
export const DashboardSubTitle = styled.div`
  font-size: 17px;
  text-align: center;
`
export const LoadingMutatingContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`
export const BackButton = styled.div`
  margin-left: 10px;
  width: fit-content;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const InputContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
`
export const AnalyzeInput = styled.input`
  padding: 20px;
  background: none;
  border: none;
  border-bottom: solid white 1px;
`
export const AnalyzeButton = styled.button`
  margin-left: 15px;
  padding: 10px;
  background: none;
  border: solid white 1px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: ${PrimaryColor}
  }
`
export const DashboardLink = styled.a` 
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #90b6fa;
    display: block;
    font-weight: bold;
    cursor: pointer;
    display: block;
  }
  &:focus {
    outline: none;

  }
  
  &:active {
    outline: none;
  }
`
