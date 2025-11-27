import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import StockAnalysisDashboard from './stockAnalysisDashboard/stockAnalysisDashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StockAnalysisDashboard/>
  </StrictMode>,
)
