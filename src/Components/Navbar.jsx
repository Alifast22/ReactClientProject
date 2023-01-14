import React from "react";
import styled from "styled-components";
//import SearchIcon from '@mui/icons-material/Search';
import {HiSearch} from 'react-icons/hi'
import {HiViewList} from 'react-icons/hi'
import { Link } from "react-router-dom";
import { mobile } from "../Page/Responsive";

import { Sidebar } from "./Sidebar";

import { useState } from "react";
const Container = styled.div`
  background-color: #5b40bb;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  
  @media (max-width:600px){
  .icon{
    font-size: 20px;
  }
  .Search{
    display: none;
  }
  width: 100%;
};
@media (min-width:600px){
  .Nav{
    display: none;
  }


};

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items:center;

  `;
const Center = styled.div`
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  height: 24px;
  margin-right:5px;
  border-radius: 10px;
  margin-left: 10px;
  ${mobile({display:"none"})}
`
const Heading= styled.h1`
  font-weight: bold;
  font-family: san-serif;
  ${mobile({fontSize:"24px"})}

`
const Para= styled.p`
 font-size: 16px;
 font-weight: lighter;
 padding: 10px;
 ${mobile({display:"none"})}

`




const Navbar = () => {

  const [comp,setComp]=useState(false);
  const [openside,setOpenside]=useState(false);
  console.log(openside)
  return (
    <>
    <Container>
      <Right>
        
        <HiViewList style={{fontSize:"20px",margin:"0px 5px 2px 10px"} } className="Nav" onClick={()=>{setOpenside(!openside)}}/>
        <Para className="EN">EN</Para>
      <Input/>
      <HiSearch className="Search" fontSize="24px" />
      </Right>
      <Center>
        <Heading>Expo Store.</Heading>
      </Center>
      <Left>
        <Para>REGISTER</Para>
        <Para>SIGN IN</Para>

      </Left>
    </Container>
      {openside && <Sidebar/>}
      </>
    
  );
};

export default Navbar;
