import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Products from './components/Products'
import InspirationSection from './components/InspirationSection'
import HashtagSection from './components/HashtagSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Categories />
      <Products />
      <InspirationSection />
      <HashtagSection />
      <Footer />
    </div>
  )
}
