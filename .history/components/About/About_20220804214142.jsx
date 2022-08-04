import React from 'react'
import { Container } from 'reactstrap'
import Image from 'next/image'
import imgAbout from "../../assets/images/about-us.jpg"

const About = () => {
  return (
    <>
        <Container>
            <Image src={imgAbout} />
        </Container>
    </>
  )
}

export default About