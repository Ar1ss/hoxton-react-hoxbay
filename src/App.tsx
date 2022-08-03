import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './components/Home'

function App() {
  return (
    <>
      
      <main>
      <div className='App'>
      <Header /> {/* Always shows up */}
      

      <Routes>
      <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
      </main>
    </>
  )
}

export default App