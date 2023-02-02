import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width: 70%;

`
const FormPage=styled.form`
   display: flex;
   flex-direction: column;
`
const Input=styled.input`
   height: 5vh;
   font-size: 1.15rem;
   border-radius: 0.4rem;
   border:1pt solid white;
   box-shadow: 2px 2px 5px #9e8fd4;
`
const SubjectIn=styled.input`
   margin-top: 1rem;
   height: 5vh;
   font-size: 1.15rem;
   border-radius: 0.4rem;
   border:1pt solid white; 
   box-shadow: 2px 2px 5px #9e8fd4;  
`
const InputCon=styled.div`
 display: flex;
 justify-content: space-between;
`
const Longin=styled.textarea`
    height: 15vh;
    margin-top: 1rem;
    font-size: 1.15rem;
    border-radius: 0.4rem;
   border:1pt solid white;     
   box-shadow: 2px 2px 5px #9e8fd4;
`
export const Form = () => {
  return (
    <Container>
     <FormPage>
        <InputCon>
     <Input type="text" placeholder='Name'/>
     <Input type="email" placeholder='Email'/>
     </InputCon>
     <SubjectIn type="text" placeholder='Subject'/>
     <Longin placeholder='Requirments'></Longin>
     </FormPage>
    </Container>
  )
}
