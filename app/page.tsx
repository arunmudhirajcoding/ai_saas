import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions </h1>
        <section className='home-section'>
          <CompanionCard
          id="123"
            name="Neura the Brainy Explorer"
            topic="Network Of the Brain"
            subject="Science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
          id="453"
            name="Countsy the Number Wizard"
            topic="Derivatives & Integrals"
            subject="Maths"
            duration={30}
            color="#ffda6e"
          />
          <CompanionCard
          id="563"
            name="Neura the Brainy Explorer"
            topic="Network Of the Brain"
            subject="Language"
            duration={45}
            color="#ffda6e"
          />
          
        </section>
        <section className='home-section'>
          <CompanionsList
            title='Recently completed sessions'
            companions={recentSessions}
            classNames='w-2/3 max-lg:w-full'
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Page