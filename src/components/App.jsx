import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import '../css/App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
// Coverpage
import CoverPage from '../parrot_components/new stuff/CoverPage.jsx';

// Activity
import ActivityWorkouts from '../parrot_components/new stuff/activity/ActivityWorkouts.jsx';
import Header from '../parrot_components/new stuff/activity/Header.jsx';
import NavigationBar from '../parrot_components/new stuff/activity/NavigationBar.jsx';
import WorkoutItem from '../parrot_components/new stuff/activity/WorkoutItem.jsx';
import WorkoutItem2 from '../parrot_components/new stuff/activity/WorkoutItem2.jsx';
import WorkoutItem3 from '../parrot_components/new stuff/activity/WorkoutItem3.jsx';

// Exercise - Tree
import ExerciseDetails_NavigationBar from '../parrot_components/new stuff/exercise/tree/ExerciseDetails_NavigationBar.jsx';
import ExercisePage from '../parrot_components/new stuff/exercise/tree/ExercisePage.jsx';
import ExercisesTitle from '../parrot_components/new stuff/exercise/tree/ExercisesTitle.jsx';
import TaglineSection from '../parrot_components/new stuff/exercise/tree/TaglineSection.jsx';

// Exercise - Stretch
import Button from '../parrot_components/new stuff/exercise/stretch/Button.jsx';
import Content from '../parrot_components/new stuff/exercise/stretch/Content.jsx';
import MainImage from '../parrot_components/new stuff/exercise/stretch/MainImage.jsx';

// Exercise - Lotus
import MainContent_NavigationBar from '../parrot_components/new stuff/exercise/lotus/MainContent_NavigationBar.jsx';

// Exercise
import ExerciseTitle from '../parrot_components/new stuff/exercise/ExerciseTitle.jsx';

// Homepage
import IndividualClasses from '../parrot_components/new stuff/homepage/IndividualClasses.jsx';
import Layout from '../parrot_components/new stuff/homepage/Layout.jsx';
import RecommendationClass from '../parrot_components/new stuff/homepage/RecommendationClass.jsx';
import SearchBar from '../parrot_components/new stuff/homepage/SearchBar.jsx';
import TodayActivityCard from '../parrot_components/new stuff/homepage/TodayActivityCard.jsx';

// Profile
import '../parrot_components/new stuff/profile/Account.css';
import Account from '../parrot_components/new stuff/profile/Account.jsx';


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
