import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import About from './pages/About'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="about" element={<About />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:slug" element={<RecipeDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="privacy-policy" element={<LegalPage pageKey="privacy-policy" />} />
        <Route path="terms" element={<LegalPage pageKey="terms" />} />
        <Route path="legal-notice" element={<LegalPage pageKey="legal-notice" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
