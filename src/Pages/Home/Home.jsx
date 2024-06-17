import React from 'react'
import Hero from '../../Components/Hero/Hero'
import LoansHome from '../../Components/LoansHome/LoansHome'
import MakeLoanHappen from '../../Components/MakeLoanHappen/MakeLoanHappen'
import Offers from '../../Components/Offers/Offers'
import OurPartner from '../../Components/OurPartner/OurPartner'
import HaveQuestion from '../../Components/HaveQuestion/HaveQuestion'
import AdvantageHome from '../../Components/AdvantageHome/AdvantageHome'
import Form from '../../Components/Form/Form'

function Home() {
  return (
    <>
    <Hero />
    <LoansHome />
    <MakeLoanHappen />
    <Form />
    {/* <Offers /> */}
    {/* <OurPartner /> */}
    <AdvantageHome />
    <HaveQuestion />
    </>
  )
}

export default Home
