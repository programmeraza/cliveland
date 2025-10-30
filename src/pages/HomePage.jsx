import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Video from '../components/Video/Video'
import LogoFlex from '../components/LogoFlex/LogoFlex'
import Clinic from '../components/Clinic/Clinic'
import Mission from '../components/Mission/Mission'
import Text from '../components/Text/Text'
import Area from '../components/Area/Area'
import Partner from '../components/Partner/Partner'
import Experience from '../components/Experience/Experience'
import Our from '../components/Our/Our'
import List from '../components/List/List'
import Accordion from '../components/Accordion/Accordion'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Up from '../components/Up/Up'

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <div className="home__block">
        <LogoFlex />
      </div>
      <Clinic />
      <Mission />
      <Text />
      <Area />
      <Partner />
      <Experience />
      <Our />
      <List />
      <Accordion />
      <div className="home__none">
        <LogoFlex />
      </div>
      <Contact />
      <Footer />
      <Up />
    </>
  )
}

export default HomePage