import { Toaster } from 'react-hot-toast'
import './App.css'
import TokenFetcher from './TokenFetcher'

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <TokenFetcher />
    </div>
  )
}

export default App
