import React from 'react'
import { Container } from 'reactstrap'
import Image from 'next/image'
import imgAbout from "../../assets/images/about-us.jpg"

const About = () => {
  return (
    <>
        <Container>
            <Image src={imgAbout}  width={555} height={369.55}/>
        </Container>
    </>
  )
}

export default About