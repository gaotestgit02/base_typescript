import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function NotFound() {
  return <div>Not found</div>
}

function Home() {
  return <div>Hello Worlds</div>
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/tags" component={Posts} /> */}
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}
