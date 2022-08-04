import React from 'react'
import { Container } from 'reactstrap'
import Image from 'next/image'
import Logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <>
       <Container className='menu'>
            <Image className='menu-logo' src={Logo}/>
       </Container>
    </>
  )
}

export default Header