import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Categories } from './components/Categories'
import { Home } from './components/Home'
import Electronics, { CategoriesItems } from './components/CategoriesItems'
import { ProductDetails } from './components/ProductDetails'

function App() {
  return (
    <>
      
      <main>
      <div className='App'>
      <Header /> {/* Always shows up */}
      

      <Routes>
      <Route path="categories" element={<Categories />} />
      <Route path="categories/:categoryId" element={<CategoriesItems />} />
      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="home" element={<Home />} />
     
        
      </Routes>
    </div>
      </main>
    </>
  )
}

export default App
