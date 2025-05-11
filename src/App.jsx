import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Lazy load your components
const Home = React.lazy(() => import('../pages/home'))
const Quotes = React.lazy(() => import('../pages/quotes'))
const Markdown = React.lazy(() => import('../pages/markdown'))
const Drum = React.lazy(() => import('../pages/drum'))
const Calcula = React.lazy(() => import('../pages/calcula'))
const Pomodoro = React.lazy(() => import('../pages/25clock'))

function App() {
  return (
    <>
    <Router>
      <div>
        {/* Suspense to handle fallback while loading components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/markdown" element={<Markdown />} />
            <Route path="/drum" element={<Drum />} />
            <Route path="/calculator" element={<Calcula />} />
            <Route path="/25clock" element={<Pomodoro />} />
            {/* 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </Suspense>
      </div>
    </Router>
    </>
  );
}

export default App

