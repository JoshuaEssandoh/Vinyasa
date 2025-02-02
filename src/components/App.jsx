import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../parrot_components/Header.jsx'
import IndividualClasses from '../parrot_components/IndividualClasses.jsx'
import Layout from '../parrot_components/Layout.jsx'
import NavigationBar from '../parrot_components/NavigationBar.jsx'
import RecommendationClass from '../parrot_components/RecommendationClass.jsx'
import SearchBar from '../parrot_components/SearchBar.jsx'
import TodayActivityCard from '../parrot_components/TodayActivityCard.jsx'
import CoverPage from '../parrot_components/CoverPage.jsx'
import ExercisePageLayout from '../parrot_components/exercise_page/ExercisePageLayout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage/>}/>
        <Route path="/home" element={<Layout/>}/>
        <Route path="/exercise" element={<ExercisePageLayout/>}/>
      </Routes>
    </Router>
    {/*
    <h1>Vinyasa</h1>
      <div>
        <CoverPage/>
    <Layout/>

      </div>
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    */}
    </>
  )
}

export default App
