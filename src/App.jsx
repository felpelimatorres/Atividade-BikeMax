import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Catalog from './components/sections/Catalog.jsx'
import Benefits from './components/sections/Benefits.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Newsletter from './components/sections/Newsletter.jsx'
import Contact from './components/sections/Contact.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { ToastProvider } from './context/ToastProvider.jsx'

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <a href="#produtos" className="skip-link">Pular para os produtos</a>
        <Header />
        <main>
          <Hero />
          <Catalog />
          <Benefits />
          <Testimonials />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </ToastProvider>
  )
}
