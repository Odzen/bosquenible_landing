import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Container } from '../styles'

const DynamicHeader = dynamic(() => import('../components/Header'))
const DynamicHero = dynamic(() => import('../sections/Hero'))
const DynamicServices = dynamic(() => import('../sections/Services'))
const DynamicContact = dynamic(() => import('../sections/Contact'))
const DynamicAllies = dynamic(() => import('../sections/Allies'))
const DynamicBanner = dynamic(() => import('../sections/Banner'))
const DynamicTeam = dynamic(() => import('../sections/Team'))
const DynamicFooter = dynamic(() => import('../sections/Footer'))

const Home: React.FC = () => (
  <>
    <Head>
      <title>Bosquenible</title>
    </Head>

    <Container>
      <DynamicHeader />
      <DynamicHero />
      <DynamicServices />
      <DynamicContact />
      <DynamicAllies />
      <DynamicBanner />
      <DynamicTeam />
      <DynamicFooter />
    </Container>
  </>
)

export default Home
