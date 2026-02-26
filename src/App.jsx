import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import AboutSection from './components/AboutSection'
import WhoWeAreSection from './components/WhoWeAreSection'
import VideoSection from './components/VideoSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'

function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <WhoWeAreSection />
      <VideoSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-coki-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carrito" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
