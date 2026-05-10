import React from 'react'
import { Navbar } from './components/Navbar'
import { TradeCard } from './components/TradeCard'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem', fontWeight: 800 }}>
          Trade BitSats
        </h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2rem' }}>
          Seamlessly exchange ETH and BitSats on Base
        </p>
        <TradeCard />
      </main>
    </>
  )
}

export default App
