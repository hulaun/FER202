import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import {Home, About, News, Quiz, Contact} from './pages'
import QuizResult from './pages/QuizResult'

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='news' element={<News/>}/>
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/result" element={<QuizResult />} />
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
