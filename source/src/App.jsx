import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import Products from './components/Products.jsx'
import Clinical from './components/Clinical.jsx'
import Stories from './components/Stories.jsx'
import Pricing from './components/Pricing.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'
import ConceptBar from './components/ConceptBar.jsx'
import { useLenis, useReducedMotion } from './lib.jsx'

// Order follows the decision: what it does → what you can buy → why trust it → what it costs.
export default function App() {
  const reduced = useReducedMotion()
  useLenis(reduced)
  return (
    <>
      <ConceptBar />
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Products />
      <Clinical />
      <Stories />
      <Pricing />
      <CTA />
      <Footer />
      <StickyCTA />
    </>
  )
}
