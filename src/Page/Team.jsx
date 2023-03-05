import React from 'react'
import styled from 'styled-components'

import { TeamCard } from '../Components/TeamCard'

const Container=styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Team = () => {
  return (
    <Container>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>  
    </Container>
  )
}
