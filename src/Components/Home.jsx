import React, { useEffect } from 'react'
import Homehero from './HomeHero'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Homehero/>
      <Home2/>
      <Home3/>
      <Home4/>
    </>
  )
}
